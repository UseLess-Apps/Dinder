import React from 'react';
import { connect } from 'react-redux';

import Styles from '../styles/Styles.js';
import {
  Text,
  TextInput,
  Image,
  View,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import { HOME_SCREEN } from '../navigation/AppNavigator.js';

class LoginScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    text: '',
  }
  
  static navigationOptions = {
    title: "Login",
  };

  render() {
    const { navigate } = this.props.navigation;
    return ( 

        <View>
            <TextInput placeholder="*Username*"></TextInput>
            <TextInput placeholder="*Password*"></TextInput>
            <Button title='Sign Up' onPress={() => navigate(HOME_SCREEN)}/>
            <Button title='Login' onPress={() => navigate(HOME_SCREEN)}/>
            <Button title='Click Me!' onPress={() => navigate(HOME_SCREEN)}/>
        </View>
        
    );

  }
}

export default LoginScreen;