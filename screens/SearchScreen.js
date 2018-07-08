import React, {Component} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {SearchBar} from 'react-native-elements';
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

  handleInputChange = () => {
    this.setState({
      text:this.text
    }, () =>{
      if(this.state.text && this.state.text.length > 1){
        if(this.state.text.length % 2 === 0){
          this.getData()
        }
      }
    })
  }

  getData = () => {
    axios.get(axiosDetails.url).then(({response}) => {

      console.log("Search: ");
      console.log(response.data);
      this.setState({
        results:response.data
      })
      
    })
  }

  
  render(){

    let list = null;

    if(this.state.results.length > 0){
      list = <FlatList 
                data={this.state.results}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                  <Text>{item.name}</Text>
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