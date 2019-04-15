import React, { Component } from 'react'
import {Text, StyleSheet, View, Image, Dimensions,TouchableOpacity} from 'react-native'
import image from "../../assets/drawable-mdpi/item.png";

export default class ListItems extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <TouchableOpacity   >
          <Image source={image} style={{width:Dimensions.get('window').width*0.43}}  height={Dimensions.get('window').height*0.35} />
          <Text style={{fontWeight:'bold'}}>Dri-FIT  Long Sleeve</Text>
          <Text style={{fontSize:12}} >Nike</Text>
          <Text   style={{fontSize:16,color:'#00C569'}}    >RS 1500</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({});
