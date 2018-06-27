import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import FoodTile from './FoodTile';
import axios from 'axios';
//You'll need to add this file, in order for the project to work correctly. 
import axiosDetails from './axiosDetails';


class FoodList extends Component{
    state = {
      items:[],
      lastItemTouched:null,
      isHighlighted:false
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
  
  handleClick = (name) => {
    alert("hi" + name);
  }
  
  render(){

    return(
      <View style={{width:'100%', marginBottom:20}}>
        <FlatList
          data={this.state.items}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <FoodTile
                style={{width:'80%'}}
                id={item.name}
                name={item.name}
                calories={item.nutrition.calories}
                isVegan={item.isVegan}
                isVegetarian={item.isVegetarian}
                icon={item.icon}
                onTouch={() => this.handleClick(item.name)}
                />
          )}/>
      </View>
    );
  }
}

export default FoodList;