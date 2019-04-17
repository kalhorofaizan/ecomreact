import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import BestSells from "../components/BestSells";
import ListBox from "../components/ListBox";
import ListItems from "../components/ListItems";

export default class Home extends Component {
    constructor(props){
        super(props);

    }

  render() {
    return (
      <View  style={{backgroundColor:'#FFFFFF',flex:1}}>
        <Searchbar  />
          <ScrollView>
              <Categories  navigation={this.props.navigation}/>
              <BestSells navigation={this.props.navigation} >
                  <ListBox >
                      <ListItems navigation={this.props.navigation}/>
                      <ListItems  navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox>
                      <ListItems  navigation={this.props.navigation}/>
                      <ListItems  navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox>
                      <ListItems  navigation={this.props.navigation}/>
                      <ListItems  navigation={this.props.navigation}/>
                  </ListBox>
              </BestSells>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
