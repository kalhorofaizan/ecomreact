import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import BestSells from "../components/BestSells";
import ListBox from "../components/ListBox";
import Carditem from "../components/Carditem";
import NewSearchbar from "../components/NewSearchbar";

export default class Home extends Component {
    constructor(props){
        super(props);

    }

  render() {

    return (
      <View  style={{backgroundColor:'#FFFFFF',flex:1}}  >
        {/*<Searchbar  />*/}
        <NewSearchbar/>
          <ScrollView>
              <Categories  navigation={this.props.navigation}/>
              <BestSells navigation={this.props.navigation} >
                  <ListBox >
                      <Carditem  navigation={this.props.navigation}/>
                      <Carditem  navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox >
                      <Carditem navigation={this.props.navigation}/>
                      <Carditem navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox >
                      <Carditem navigation={this.props.navigation}/>
                      <Carditem navigation={this.props.navigation}/>
                  </ListBox>
              </BestSells>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
