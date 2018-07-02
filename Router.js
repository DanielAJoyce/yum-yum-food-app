import React from 'react';
// import {createMaterialBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import RecommendedScreen from './screens/RecommendedScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import homeIcon from './assets/nav-icons/basic_home.svg';
import heartIcon from './assets/nav-icons/basic_heart.png';
export const Tabs = createMaterialBottomTabNavigator({
  Home: {
    screen:HomeScreen
    },
  Search: {screen:SearchScreen,
    tabBarIcon:heartIcon},
  Favorites: {screen:FavoritesScreen},
},
{
  initialRouteName:'Home',
  activeTintColor:'#28e2cd',
  inactiveTintColor:'#7c7c7c',
  barStyle:{
    backgroundColor:'#f0edf6'
  }
})