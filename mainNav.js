import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';




export default createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:({navigation}) => ({
      title:"Main",
    })


  },

  Details: {

  }
});
