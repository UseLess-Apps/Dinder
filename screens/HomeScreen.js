import React from 'react';
import { Styles } from '../styles/Styles.js';
import {
  Text,
  TextInput,
  Image,
  View,
  Button,
} from 'react-native';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.homeScreenContainer}> 
        <Text style={Styles.homeText}> Dinder!! </Text>
        <View style={Styles.flexRow}> 
          <TextInput
            placeholder='fudge'
            style={Styles.location}
          />
          <Image source={require('../assets/images/myLocation.png')} style={Styles.locationImage}/>
        </View>
        <Button title='Click Me!'/>
      </View>
      
    );
  }
}




