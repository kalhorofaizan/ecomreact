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
              <Categories/>
              <BestSells >
                  <ListBox>
                      <ListItems navigation={this.props.navigation}/>
                      <ListItems/>
                  </ListBox>
                  <ListBox>
                      <ListItems/>
                      <ListItems/>
                  </ListBox>
                  <ListBox>
                      <ListItems/>
                      <ListItems/>
                  </ListBox>
              </BestSells>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
