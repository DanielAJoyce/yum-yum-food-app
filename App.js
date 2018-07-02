import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import {Tabs} from './Router';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen, 
    Search:SearchScreen
  },
  {
    initialRouteName:'Home',
  }
);

export default class App extends Component {
  render() {
    return (
        <Tabs/>
    );
  }
};