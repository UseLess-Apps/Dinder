import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../styles/Styles';


class DinderScreen extends React.Component {
  
    constructor(props){
      super(props);
      this.state ={ 
          dataSource:null, 
          isLoading: false, 
          error: false, 
          selectedCuisines: [],
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
  
    // componentDidMount(){
    //   this.props.dispatch(resetCusines());
    //   return getCuisines(this.props.lat, this.props.long)
    //     .then((responseJson) => {
    //       this.setState({
    //         isLoading: false,
    //         dataSource: responseJson.cuisines,
    //         error: false,
    //       }, function(){
  
    //       });
  
    //     })
    //     .catch((error) =>{
    //       this.setState({
    //         isLoading: false,
    //         dataSource: null, 
    //         error: true,
    //       }, function(){
  
    //       });
    //     });
  
    // }
  
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
          cards={this.state.cards}
          renderCard={(cardData) => {
            
            return <View style={[Styles.foodCard, {backgroundColor: cardData.backgroundColor}]}>
                <Text>{cardData.text}</Text>
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
    };
  }

  export default connect(mapStateToProps)(DinderScreen);