import React from 'react';
import { connect } from 'react-redux';

import { Styles } from '../styles/Styles.js';
import {
  Text,
  TextInput,
  Image,
  View,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import { setLocation } from '../redux/actions';

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
    return (
      <View style={Styles.homeScreenContainer}> 
        <Text style={Styles.homeText}> Dinder!! </Text>

        <View style={Styles.flexRow}> 
          <TextInput
            placeholder='fudge'
            style={Styles.location}
          />
          <TouchableOpacity onPress={this.getLocation} style={Styles.locationImage}>
            <Image source={require('../assets/images/myLocation.png')}/>
          </TouchableOpacity>
        </View>
        <Button title='Click Me!'  disabled={this.props.lat == null ? true : false}/>
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


