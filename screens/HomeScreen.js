import React, {Component} from 'react';
import { Button, Platform, NativeModules, StatusBar, StyleSheet, Text, View } from 'react-native';
const { StatusBarManager } = NativeModules;
import { createStackNavigator } from 'react-navigation';
import FoodList from '../FoodList';

export default class HomeScreen extends Component{
  render(){

    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
      {/* <Button style={styles.button} title="Go here" onPress={() => this.props.navigation.navigate('Details')}></Button> */}
      <FoodList style={styles.list}></FoodList>
    </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    width:'100%',
    marginBottom:10
  },
  button:{
    marginTop:30
  }
});
