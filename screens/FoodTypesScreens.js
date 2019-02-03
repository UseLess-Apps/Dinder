import React from 'react';
import { FlatList, Text, View, ActivityIndicator, Button } from 'react-native';
import { getCuisines } from '../backEndRequests';
import { connect } from 'react-redux';
import CuisineTypeItem from '../components/CuisineTypeItem';
import { resetCusines } from '../redux/actions.js';
import { DINDER_SWIPE_SCREEN } from '../navigation/AppNavigator';


class FoodTypeScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ dataSource:null, isLoading: true, error: false, selectedCuisines: []}
  }

  static navigationOptions = {
    title: 'Cuisine Types',
  };

  componentDidMount(){
    this.props.dispatch(resetCusines());
    return getCuisines(this.props.lat, this.props.long)
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.cuisines,
          error: false,
        }, function(){

        });

      })
      .catch((error) =>{
        this.setState({
          isLoading: false,
          dataSource: null, 
          error: true,
        }, function(){

        });
      });

  }

  render(){
    const {navigate} = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } 
    if (this.state.error) {
      return(
        <Text style={{flex: 1, padding: 20}}>
          Error getting food types, please check your connection.
        </Text>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <CuisineTypeItem id={item.cuisine.cuisine_id} text={item.cuisine.cuisine_name} />}
          keyExtractor={({id}, index) => id}
        />
        <Button title='Find Match!' disabled={this.props.selectedCuisines.length == 0 ? true : false}
          onPress={() => navigate(DINDER_SWIPE_SCREEN)}/>        
        <Text>{JSON.stringify(this.props.selectedCuisines)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    lat: state.lat,
    long: state.long,
    selectedCuisines: state.selectedCuisines,
  };
}

export default connect(mapStateToProps)(FoodTypeScreen);