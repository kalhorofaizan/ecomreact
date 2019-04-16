/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Dimensions} from 'react-native';
import {createAppContainer,createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import cart from './assets/drawable-mdpi/Icon_Cart.png'
import home from './assets/drawable-mdpi/Explore.png'
import setting from './assets/drawable-mdpi/Icon_User.png'
import Home from "./src/pages/Home";
import Cart from "./src/pages/Cart";
import Setting from "./src/pages/Setting";
import ItemShow from "./src/pages/ItemShow";
import WriteReview from'./src/pages/WriteReview'



const HomeStackNavigater=createStackNavigator({
  Home:{
    screen:Home,
  },
  Showitem:{
    screen:ItemShow
  },
    Writereview:{
    screen:WriteReview
    },
},{
  headerMode:'none',
  navigationOptions:{
    header:false
  }
});

HomeStackNavigater.navigationOptions=({navigation})=>{
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Showitem") {
        tabBarVisible = false;
      } else if (route.routeName === "Writereview"){
        tabBarVisible = false;
      }
      else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};


const TabNavigater = createBottomTabNavigator({
  Home:{
    screen:HomeStackNavigater,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
          <Image source={home} style={{width:Dimensions.get('window').width*0.13 ,height:Dimensions.get('window').height*0.03}}  />
      )
    }
  },
  Cart:{
    screen:Cart,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
          <Image source={cart} style={{width:Dimensions.get('window').width*0.055 ,height:Dimensions.get('window').height*0.036}}  />
      )
    }
  },
  Setting:{
    screen:Setting,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
          <Image source={setting} style={{width:Dimensions.get('window').width*0.046 ,height:Dimensions.get('window').height*0.031}}  />
      )
    }
  }
},{
  tabBarOptions:{
    showLabel:false
  }
});

export default createAppContainer(TabNavigater);
//
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View >
//       </View>
//     );
//   }
// }

