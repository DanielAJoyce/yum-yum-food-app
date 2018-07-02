import React, {Component} from 'react';
import {Text, View} from 'react-native';
import favoriteIcon from '../assets/nav-icons/basic_heart.png';
import {navigationOptions} from 'react-navigation';
import {Ionicons} from "@expo/vector-icons";


class FavoritesScreen extends Component{

  static navigationOptions ={ 
    tabBarLabel:'Favorites',
    tabBarIcon: <Ionicons name="ios-heart-outline" size={26} color="#7c7c7c"/>
  }
  render(){
    return(
      <View>
        <Text>
        FavoritesScreen Page
        </Text>
      </View>
    )
  }
};

export default FavoritesScreen;