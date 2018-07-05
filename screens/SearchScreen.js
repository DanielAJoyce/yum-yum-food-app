import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import axios from 'axios';
import axiosDetails from '../axiosDetails';
class SearchScreen extends Component{
  
  constructor(props){
    super(props);
    this.state ={
      text:'',
      foundFood:false,
      loading:false,
      items:[]
    };
  }
  componentDidMount = () =>{
    let iconColor = "#7c7c7c";
  }

  static navigationOptions ={ 
    tabBarLabel:'Home',
    tabBarIcon: <Ionicons name="ios-search" size={26} color={"#7c7c7c"}/>
  }

  filterByTag = (item) => {
    let tags = [...item.tags];
    for(let x = 0; x < tags.length; x++){
      if(tags[x].includes(this.state.text)){
        return true
      } 
    }
    return false
  }

  render(){

    if(this.state.text !== '' && !this.state.loading && this.state.items.length == 0){
      this.setState({
        loading:true
      })
    }

    if(this.state.loading){
      axios.get(axiosDetails.url,{
        headers:{
          "apiKey":axiosDetails.apiKey,
          "accept":"application/json"
        }
      })
    .then((response) => {
      response = response.filter(this.filterByTag);
      console.log("Here's the leftovers");
      console.log(response);

      }).finally((response) => {
        const listItems = [];
    for(let key in response.data){
      listItems.push({
        ...response.data[key],
        id:key
      })
    }
    this.setState({
      items:listItems
    })
    });
  }

    if(this.state.foundFood){
      this.setState({
        loading:false
      })
    }
  
    return(
      <View style={styles.searchStyle}>
        <Text>
          Search Screen
          </Text>
          <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Search our recipes"
            underlineColorAndroid="transparent"
         />
          </View>
          <View>
            {this.state.loading ? (<ActivityIndicator
            size="large"
            color="#5dd0ef"
            />) : (
              <FlatList
              data={this.state.items}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
              <Text>
                {item.name}
              </Text>
              )}
              />
            )}
          </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  searchStyle:{
    backgroundColor:'#ffffff',
    height:'100%',
    width:'100%'
  },
  inputField:{
    height:'100%',
    width:'100%'
  },

  inputContainer:{
    width:'80%',
    height:50,
    borderRadius:20,
    backgroundColor:'#fff',
    borderWidth:2,
    padding:10
  }
})
export default SearchScreen;