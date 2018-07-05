import React from 'react';
import {Icon} from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, DrawerNavigator } from 'react-navigation';
import {Platform} from 'react-native';

// import homeIcon from './assets/nav-icons/basic_home.svg';
// import heartIcon from './assets/nav-icons/basic_heart.png';
import TabBarIcon from './TabBarIcon';
import HomeScreen from './screens/HomeScreen';
import RecommendedScreen from './screens/RecommendedScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import DetailsScreen from './screens/DetailsScreen';


const HomeStack = createStackNavigator({
  Home:HomeScreen,
  Details: DetailsScreen
});

HomeStack.navigationOptions={
  tabBarLabel:'Home',
  tabBarIcon:({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
        ? `ios-information-circle${focused ? '' : `-outline`}`
        : 'md-information-circle'
      }
    />
    ),
}

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions={
  tabBarLabel:'Search',
  tabBarIcon:({focused}) => {
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
        ? `ios-information-circle${focused ? '' : `-outline`}`
        : 'md-information-circle'
      }
    />
  }
}

const FavoritesStack = createStackNavigator({
  Favorites:FavoritesScreen
});

FavoritesStack.navigationOptions={
  tabBarLabel:'Favorites',
  tabBarIcon:({focused}) => {
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' 
        ? `ios-information-circle${focused ? '' : `-outline`}`
        : 'md-information-circle'
      }
    />
  }
}



export const Tabs = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  FavoritesStack
},
{
  initialRouteName:'HomeStack',
  activeTintColor:'#28e2cd',
  inactiveTintColor:'#7c7c7c',
  barStyle:{
    backgroundColor:'#f0edf6'
  }
})