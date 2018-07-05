import React, {Component} from 'react';
import { Button, Platform, NativeModules, StatusBar, StyleSheet, Text, View } from 'react-native';
const { StatusBarManager } = NativeModules;
import { createStackNavigator, TabNavigator } from 'react-navigation';
import FoodList from '../FoodList';
import {Ionicons} from "@expo/vector-icons";
import {Header} from 'react-native-elements';

export default class HomeScreen extends Component{

  // Navigation options allows for this component to select the icon and label for bottomNavigation! 
  static navigationOptions ={ 
    tabBarLabel:'Home',
    tabBarIcon: <Ionicons name="ios-home-outline" size={26} color="#7c7c7c"/>
  }

  render(){
    console.log(this.props.navigation); 
    return (
      
      <View style={styles.container}>
        <FoodList navigation={this.props.navigation} style={styles.list}></FoodList>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //Need some padding to take into account the status bar. Will search for a better way to do this. 
    paddingTop:30,
    paddingBottom:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    width:'100%',
    marginBottom:20
  }
});
