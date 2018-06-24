import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FoodTile from './FoodTile';
import axios from 'axios';
//You'll need to add this file, in order for the project to work correctly. 
import axiosDetails from './urlForFirebase';


class FoodList extends Component{
    state ={
      items:[]
    }


  componentDidMount = () => {
    axios.get(axiosDetails.url,{
      headers:{
        "apiKey":axiosDetails.apiKey,
        "accept":"application/json"
      }
    })
  .then((response)  => {
    console.log(response.data);

    const listItems = [];
    for(let key in response.data){
      listItems.push({
        ...response.data[key],
        id:key
      })
    }
    console.log("List Items:");
    console.log(listItems);
    this.setState({items:listItems});
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render(){

    
    return(
      <View style={{width:'100%'}}>
        <Text>Testing List</Text>
        <ScrollView>
          {this.state.items.map(item => (
              <FoodTile 
                style={{width:'80%'}}
                key={item.id}
                name={item.name}
                calories={item.nutrition.calories}
                isVegan={item.isVegan}
                isVegetarian={item.isVegetarian}
                icon={item.icon}/>
            ))}
        </ScrollView>
      </View>
    );
  }
}

export default FoodList;