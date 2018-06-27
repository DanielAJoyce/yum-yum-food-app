import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {Card, Rating} from 'react-native-elements';
import foodIcon from './assets/food/fajita.jpeg';


const FoodTile = props => {

  console.log("inside props" + props.color);
  
    return(
      <TouchableHighlight 
      color='rgba(0,0,0,0.5)'
      underlayColor="rgba(253,138,94,0)"
      activeOpacity={0}
      onPress={props.onTouch}
       >
        <Card
          image={foodIcon}
          style={{borderRadius:20}}
          >
          <View style={styles.cardInline}>
            <Rating
              type="heart"
              startingValue={4}
              readonly
              imageSize={15}
              onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 10 }}
              />
              <View style={styles.guidelineIcons}>
                {props.isVegan ? <Image style={styles.icon} source={require('./assets/icons/vegan.jpg')}/> : null} 
                {props.isVegetarian ? <Image style={styles.icon} source={require('./assets/icons/vegetarian.png')}/> : null}
              </View>
          </View>
          <Text style={{color: props.color}}>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </Text>
          <Text style={[styles.cardSubtitles, ]}>
            Calories: {props.calories}
          </Text>
        </Card>
      </TouchableHighlight>
    )



};

const styles = StyleSheet.create({
  icon:{
    height:20,
    width:20
  },
  cardInline:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
    margin:5
  },
  guidelineIcons:{
    flex:0,
    flexDirection:'row',
    height:30,
    width:30
  },
  cardTitle:{
    fontSize:15
  },
  cardSubtitles:{
    color:'#c4c4c4'
  }
});



export default FoodTile;