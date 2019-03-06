// import React from 'react';
// import { createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodTypesScreens';
import DinderScreen from '../screens/DinderScreen';
import RestaraunInfoScreen from '../screens/RestaurantInfoScreen';

export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const HOME_SCREEN = "HOME_SCREEN"; 
export const SELECT_FOOD_TYPES = "SELECT_FOOD_TYPES";
export const DINDER_SWIPE_SCREEN = "DINDER_SWIPE_SCREEN";
export const RESTARAUNT_INFO_SCREEN = "RESTARAUNT_INFO_SCREEN";


export default HomeStack = createStackNavigator({
  LOGIN_SCREEN: LoginScreen,
  HOME_SCREEN: HomeScreen,
  SELECT_FOOD_TYPES: FoodScreen,
  DINDER_SWIPE_SCREEN: DinderScreen,
  RESTARAUNT_INFO_SCREEN: RestaraunInfoScreen,
});