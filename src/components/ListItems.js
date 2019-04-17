import React, { Component } from 'react'
import {Text, StyleSheet, View, Image, Dimensions,TouchableOpacity} from 'react-native'
import image from "../../assets/drawable-mdpi/item.png";

export default class ListItems extends Component {
    constructor(props){
        super(props);

        this.state={
            portal:true
        }
    }
  render() {
    return (
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Showitem')}}   >
          <Image source={image} style={{resizeMode:'stretch',width:Dimensions.get('window').width*0.35}}  height={Dimensions.get('window').height*0.37} />
          <Text style={{fontWeight:'bold',fontSize:Dimensions.get('window').height*0.02,color:"#000000"}}>Dri-FIT  Long Sleeve</Text>
          <Text style={{fontSize:Dimensions.get('window').height*0.02,color:"#000000"}} >Nike</Text>
          <Text   style={{fontSize:Dimensions.get('window').height*0.025,color:'#00C569'}}    >RS 1500</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({});
