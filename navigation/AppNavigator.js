// import React from 'react';
// import { createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// });

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodTypesScreens';

export const HOME_SCREEN = "HOME";
export const SELECT_FOOD_TYPES = "SELECT_FOOD_TYPES"

export default HomeStack = createStackNavigator({
  HOME_SCREEN: HomeScreen,
  SELECT_FOOD_TYPES: FoodScreen,
});