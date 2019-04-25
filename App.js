/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, StatusBar} from 'react-native';
import {createAppContainer,createBottomTabNavigator,createStackNavigator,SafeAreaView } from 'react-navigation';
import cart from './assets/drawable-mdpi/Icon_Cart.png'
import home from './assets/drawable-mdpi/Explore.png'
import setting from './assets/drawable-mdpi/Icon_User.png'
import Home from "./src/pages/Home";
import Cart from "./src/pages/Cart";
import Setting from "./src/pages/Setting";
import ItemShow from "./src/pages/ItemShow";
import WriteReview from'./src/pages/WriteReview'
import ItemList from "./src/pages/ItemList";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Checkout from "./src/pages/Checkout";
import Profile from "./src/pages/Profile";
import OrderList from "./src/pages/OrderList";
console.disableYellowBox = true;
const HomeStackNavigater=createStackNavigator({
  Home:{
    screen:Home,
  },
  CheckOut:{
    screen:Checkout
  },
  Login:{
    screen:Login
  },
  Signup:{
    screen:Signup
  },
  Showitem:{
    screen:ItemShow
  },
    Writereview:{
    screen:WriteReview
    },
  ItemList:{
    screen:ItemList
  },
  Profile:{
    screen:Profile
  },
},{
  headerMode:'none',
  navigationOptions:{
    header:false
  }
});

const SettingStackNavigater=createStackNavigator({
  Setting:{
    screen:Setting
  },Profile:{
    screen:Profile
  },
  OrderList:{
    screen:OrderList
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
      }else if (route.routeName === "ItemList"){
        tabBarVisible = false;
      }else if (route.routeName === "Login"){
        tabBarVisible = false;
      }else if (route.routeName === "Signup"){
        tabBarVisible = false;
      }else if (route.routeName === "CheckOut"){
        tabBarVisible = false;
      }else if (route.routeName === "Profile"){
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



SettingStackNavigater.navigationOptions=({navigation})=>{
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Profile") {
        tabBarVisible = false;
      } else if (route.routeName === "OrderList"){
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
          <Image source={cart} style={{width:Dimensions.get('window').width*0.06 ,height:Dimensions.get('window').height*0.039}}  />
      )
    }
  },
  Setting:{
    screen:SettingStackNavigater,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
          <Image source={setting} style={{width:Dimensions.get('window').width*0.046 ,height:Dimensions.get('window').height*0.031}}  />
      )
    }
  }
},{
  tabBarOptions:{
    showLabel:false,
      style:{
          height:Dimensions.get('window').height*0.08
      }
  }
});

export default createAppContainer(TabNavigater);
