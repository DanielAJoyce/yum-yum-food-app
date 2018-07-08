import React, {Component} from 'react';
import {Text, View, TextInput, FlatList, TouchableHighlight} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {SearchBar} from 'react-native-elements';
import FoodTile from '../FoodTile';
import axios from 'axios';
import axiosDetails from '../axiosDetails';

class SearchScreen extends Component{
  
  constructor(props){
    super(props);
    this.state= {
      text:'',
      results:[]
    };
  }
  componentDidMount = () =>{
    let iconColor = "#7c7c7c";
  }

  static navigationOptions ={ 
    tabBarLabel:'Home',
    tabBarIcon: <Ionicons name="ios-search" size={26} color={"#7c7c7c"}/>
  }

  handleInputChange = (text) => {
    console.log("handleInputChange hit");
    console.log(text);
    this.setState({
      text:text
    }, () =>{
      let newTextState = this.state.text;
      if( newTextState.length > 1){
          this.getData();
        }
    })
  }

  getData = () => {

    axios.get(axiosDetails.url,{
      headers:{
        "apiKey":axiosDetails.apiKey,
        "accept":"application/json"
      }
    })
  .then((response)  => {
    console.log("Search: ");
    console.log(response);

    let searchData = [];
    for(var x = 0; x< response.data.length; x++){
      if(response.data[x].name.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()))
      {
        searchData.push(response.data[x]);
      }
    }
    this.setState({
      results:searchData
    });
  })
  }

  
  render(){

    let list = null;

    if(this.state.results.length > 0){
      list = <FlatList 
                data={this.state.results}
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
                color="red"
                calories={item.nutrition.calories}
                isVegan={item.isVegan}
                isVegetarian={item.isVegetarian}
                icon={item.icon}
                onTouch={() => this.handleClick(item.name)}
                />
              </TouchableHighlight>
                )}
                /> 
    }
    return(
      <View>
        <Text>
          Search Screen
          </Text>
         <SearchBar
            style={{height:40}}
            onChangeText={(text) => this.handleInputChange(text)}
            value={this.state.text}
            placeholder="Search our recipes..."
         />

         {list}
      </View>
    )
  }
};

export default SearchScreen;