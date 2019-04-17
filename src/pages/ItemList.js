import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import arrowleft from "../../assets/drawable-mdpi/arrowleft.png";
import Searchbar from "../components/Searchbar";
import ListItems from "../components/ListItems";
import ListBox from "../components/ListBox";
import filter from '../../assets/drawable-mdpi/filter.png'
export default class ItemList extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View style={{flex:1}} >
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{width:40,height:40,borderRadius:50,backgroundColor:'rgba(247,246,255,0.18)',marginTop:10,marginLeft:10,alignItems:'center',justifyContent:'center'}}  >
                  <Image  source={arrowleft} style={{width:30,height:30}}  />
              </TouchableOpacity>
              <Text style={{fontSize:Dimensions.get("window").height*0.03 ,marginTop:15,marginLeft:Dimensions.get("window").width*0.25,color:'#000000',}} >Gadgets</Text>
              {/*<TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{width:40,height:40,borderRadius:50,backgroundColor:'rgba(247,246,255,0.18)',marginTop:10,marginLeft:"auto",alignItems:'center',justifyContent:'center',marginRight:10}}  >*/}
              {/*    <Image  source={filter} style={{width:30,height:30}}  />*/}
              {/*</TouchableOpacity>*/}
          </View>
          <Searchbar/>
          <ScrollView>
              <ListBox>
                  <ListItems navigation={this.props.navigation}/>
                  <ListItems  navigation={this.props.navigation}/>
              </ListBox>
              <ListBox>
                  <ListItems navigation={this.props.navigation}/>
                  <ListItems  navigation={this.props.navigation}/>
              </ListBox>
              <ListBox>
                  <ListItems navigation={this.props.navigation}/>
                  <ListItems  navigation={this.props.navigation}/>
              </ListBox>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
