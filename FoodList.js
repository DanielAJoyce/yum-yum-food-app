import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList, TouchableHighlight} from 'react-native';
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

    const listItems = [];
    for(let key in response.data){
      listItems.push({
        ...response.data[key],
        id:key
      })
    }
    this.setState({items:listItems});
  })
  .catch(function (error) {
    console.log(error);
  });
  }  
  
  handleClick = (name) => {
    // console.log(name);
    this.setState({
      isHighlighted:true
    });
  };
  
  render(){
    let itemColor = "black";

    
    if(this.state.isHighlighted == true){
      itemColor = "red";
    }

    let foodFlatList = (
      <FlatList
          data={this.state.items}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <TouchableHighlight 
            onPress={() => this.props.navigation.navigate('Details',
                {
                  name:item.name,
                  calories:item.nutrition.calories,
                  icon:item.icon
                }
              )} >
            <FoodTile
                style={{width:'80%'}}
                id={item.name}
                name={item.name}
                color={itemColor}
                calories={item.nutrition.calories}
                isVegan={item.isVegan}
                isVegetarian={item.isVegetarian}
                icon={item.icon}
                onTouch={() => this.handleClick(item.name)}
                />
              </TouchableHighlight>
          )}/>
    )

    console.log("itemColor: " + itemColor + " " + "isHighlighted: " + this.state.isHighlighted);
    return(
      <View style={{width:'100%', marginBottom:20}}>
          {foodFlatList}
      </View>
    );
  }
}

export default FoodList;