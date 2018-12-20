import React from 'react';
import { ScrollView, FlatList, Text, View, ActivityIndicator } from 'react-native';
import Styles from '../styles/Styles.js';
import { getCuisines } from '../backEndRequests';
import { connect } from 'react-redux';


class FoodTypeScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ dataSource:null, isLoading: true, error: false}
  }

  static navigationOptions = {
    title: 'Cuisine Types',
  };

  componentDidMount(){
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
          renderItem={({item}) => <Text>{item.cuisine.cuisine_name}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    lat: state.lat,
    long: state.long
  };
}

export default connect(mapStateToProps)(FoodTypeScreen);