import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Ionicons} from "@expo/vector-icons";


class SearchScreen extends Component{
  
  constructor(props){
    super(props);
    this.state= {
      text:'placeholder',
      placeholder:'placeholder'
    };
  }
  componentDidMount = () =>{
    let iconColor = "#7c7c7c";
  }

  static navigationOptions ={ 
    tabBarLabel:'Home',
    tabBarIcon: <Ionicons name="ios-search" size={26} color={"#7c7c7c"}/>
  }


  render(){
    
    clearPlaceholderText = () => {

      if(this.state.text == this.state.placeholder){
        this.setState({
          text:''
        })
      }
    }

    return(
      <View>
        <Text>
          Search Screen
          </Text>
         <TextInput
            style={{height:40, borderColor:'red', borderWidth:2}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            onFocus={() => clearPlaceholderText()}
         />
      </View>
    )
  }
};

export default SearchScreen;