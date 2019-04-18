import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import Searchbar from "../components/Searchbar";
import ListBox from "../components/ListBox";
import Carditem from "../components/Carditem";
import {Appbar} from "react-native-paper";

export default class ItemList extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View style={{flex:1}} >
          <Appbar.Header  style={{backgroundColor:'white'}}>
              <Appbar.BackAction onPress={()=>{
                  this.props.navigation.goBack()
              }} />
              <Appbar.Content title={'Cloth'}  />
          </Appbar.Header>
          <Searchbar/>
          <ScrollView>
              <ListBox >
                  <Carditem navigation={this.props.navigation}/>
                  <Carditem navigation={this.props.navigation}/>
              </ListBox>
              <ListBox >
                  <Carditem navigation={this.props.navigation}/>
                  <Carditem navigation={this.props.navigation}/>
              </ListBox>
              <ListBox >
                  <Carditem navigation={this.props.navigation}/>
                  <Carditem navigation={this.props.navigation}/>
              </ListBox>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
