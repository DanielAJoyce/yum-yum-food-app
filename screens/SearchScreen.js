import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";


class SearchScreen extends Component{
  
  componentDidMount = () =>{
    let iconColor = "#7c7c7c";
  }

  static navigationOptions ={ 
    tabBarLabel:'Home',
    tabBarIcon: <Ionicons name="ios-search" size={26} color={"#7c7c7c"}/>
  }

  render(){
    

    return(
      <View>
        
      </View>
    )
  }
};

export default SearchScreen;