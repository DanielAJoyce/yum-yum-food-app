import React, {Component} from 'react';
import {Text, View} from 'react-native';

class DetailsScreen extends Component{
  static navigationOptions ={ 
    title:'Details Page'
  }

  render(){
    const {navigation} = this.props;
    const name = navigation.getParam('name');
    const calories = navigation.getParam('calories');
    const icon = navigation.getParam('icon');
    
    return(
      <View>
        <Text>
          Name: {name}
          Calories: {calories}
        </Text>
      </View>
    )
  }
};

export default DetailsScreen;