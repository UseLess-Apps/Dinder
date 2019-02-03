import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Styles from '../styles/Styles';
import { postMatches } from '../backEndRequests';

class DinderScreen extends React.Component {
  
    constructor(props){
      super(props);
      this.state ={ 
          dataSource:null, 
          isLoading: true, 
          error: false, 
          cards: [
            {text: 'Tomato', backgroundColor: 'red'},
            {text: 'Aubergine', backgroundColor: 'purple'},
            {text: 'Courgette', backgroundColor: 'green'},
            {text: 'Blueberry', backgroundColor: 'blue'},
            {text: 'Umm...', backgroundColor: 'cyan'},
            {text: 'orange', backgroundColor: 'orange'},
          ],
      }

    }
  
    static navigationOptions = {
      title: 'Match With Food',
    };
  
    componentDidMount(){
      console.log(typeof(this.props.selectedCuisines) + this.props.selectedCuisines);
      return postMatches(this.props.lat, this.props.long, 0, this.props.selectedCuisines)
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
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
  
      return (
        <SwipeCards
          cards={this.state.dataSource}
          renderCard={(restaurantData) => {
            
            return <View style={[Styles.foodCard]}>
                <Text>{restaurantData.name}</Text>
                <Image source={{uri:restaurantData.thumbnail}}/>
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
    handleYup (card) {
        console.log(`Yup for ${card.text}`)
      }
      handleNope (card) {
        console.log(`Nope for ${card.text}`)
      }
      handleMaybe (card) {
        console.log(`Maybe for ${card.text}`)
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