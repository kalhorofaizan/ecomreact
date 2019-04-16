import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions} from 'react-native'
import avatar from "../../assets/drawable-mdpi/Avatar.png";
import blankstart from '../../assets/drawable-mdpi/blankstar.png'
import fullstart from '../../assets/drawable-mdpi/fillStar.png'
export default class Review extends Component {
    constructor(props){
        super(props);
        
    }

    stars=(number)=> {
        this.star = [];
        for (i = 1; i <= number; i++) {
            this.star.push(
                <Image key={i}  source={fullstart} style={{width: 20, height: 20}}/>
            ) ;
        }
        return this.star;
    };
  render() {
    return (
      <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
          <View style={{width:Dimensions.get('window').width*0.2,marginLeft:10}} >
              <Image source={avatar} style={{width:Dimensions.get('window').width*0.1,height:Dimensions.get('window').width*0.1,borderRadius:50,resizeMode:'stretch'}}  />
          </View>
          <View style={{width:Dimensions.get('window').width*0.7}} >
              <View  style={{flexDirection:'row'}}>
                  <Text style={{color:"#000000"}}>Faizan Ullah</Text>
                  <View style={{flexDirection:'row-reverse',marginLeft:'auto'}}  >
                      {this.stars(3)}
                  </View>
              </View>
              <Text>
                  Wonderful jean, perfect gift for my girl for our anniversary!
              </Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
