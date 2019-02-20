import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Styles from '../styles/Styles';
import { postMatches } from '../backEndRequests';
import { RestaurantCard } from '../components/RestaurantCard';
import RestaurantInfoScreen from '../screens/RestaurantInfoScreen';
import { RESTARAUNT_INFO_SCREEN } from '../navigation/AppNavigator';

class DinderScreen extends React.Component {
  
    constructor(props){
      super(props);
      this.state = { 
          dataSource: [], 
          isLoading: true, 
          error: false, 
          count: 0,
      }
    }
  
    static navigationOptions = {
      title: 'Match With Food',
    };
  
    componentDidMount(){
      console.log(typeof(this.props.selectedCuisines) + this.props.selectedCuisines);
      return this.getRestaraunts(0);
    }

    getRestaraunts = (start) => {
      return postMatches(this.props.lat, this.props.long, start, this.props.selectedCuisines)
        .then((responseJson) => {
          let copy = [...this.state.dataSource];
          this.setState({
            isLoading: false,
            dataSource: copy.concat(responseJson),
            error: false,
          }, function(){
          });
  
        })
        .catch((error) =>{
          this.setState({
            ...this.state,
            isLoading: false,
            error: true,
          }, function(){
  
          });
        });
    }

    incrementRestarauntCount = () => {
      let data = [...this.state.dataSource];
      data.shift();

      this.setState({
        ...this.state,
        dataSource: data,
        count: this.state.count + 1,
      })
      if (this.state.dataSource.length == 5) {
        this.getRestaraunts(this.state.count + 5);
      }
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
        
      return (
        <SwipeCards
          cards={this.state.dataSource}
          renderCard={(restaurantData) => {
            // return <RestaurantCard restaurantData={restaurantData}/>
            return <View style={[Styles.foodCard]}>
                <Text>{restaurantData.name}</Text>
                <Image style={{height:150, width: 150}} source={{uri:restaurantData.thumbnail}}/>
            </View>
          }}
          renderNoMoreCards={() => <Text>NO MORE CARDS</Text>}
  
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          stack={true}
          containerStyle = {Styles.foodCardContainer}
          dragY={false}
          stackOffsetX={0}
        />
      );
    }

    handleYup = (card) => {
      const { navigate } = this.props.navigation;
      navigate(RESTARAUNT_INFO_SCREEN, { restaurantData: this.state.dataSource[0] });
      this.incrementRestarauntCount();
    }

    handleNope = (card) => {
      this.incrementRestarauntCount();

    }

    handleMaybe = (card) => {
      this.incrementRestarauntCount();

    }
  }
  
  function mapStateToProps(state) {
    return {
      lat: state.lat,
      long: state.long,
      selectedCuisines: state.selectedCuisines,
    };
  }

  export default connect(mapStateToProps)(DinderScreen);