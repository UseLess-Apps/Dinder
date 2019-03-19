import React from 'react';
import { connect } from 'react-redux';

import Styles from '../styles/Styles.js';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setLocation } from '../redux/actions';
import { SELECT_FOOD_TYPES } from '../navigation/AppNavigator.js';

class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    header: null,
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.dispatch(setLocation(position.coords.latitude, position.coords.longitude));
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Styles.homeScreenContainer}> 
        <Text style={Styles.homeText}> Dinder</Text>
        <Image style={Styles.logo} source={require('../assets/images/chicken.png')}/>
        <View style={Styles.flexRow}> 
          <TextInput
            placeholder='Location'
            style={Styles.location}
          />
          <Button
            containerStyle={Styles.locationImage}
            type='clear'
            icon={<Icon name="my-location" size={25} color="white"/>}
            onPress={this.getLocation}
          />
        </View>
        <Button title='Find Cuisines'  
          containerStyle={Styles.findCuisinesBtn}
          buttonStyle={Styles.findCuisinesBtnEnabled}
          disabled={this.props.lat == null ? true : false}
          onPress={() => navigate(SELECT_FOOD_TYPES)}
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

export default connect(mapStateToProps)(HomeScreen);