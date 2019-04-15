import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,Dimensions,ScrollView,Image} from 'react-native'
import image from '../../assets/drawable-mdpi/item.png'
import ListItems from "./ListItems";
import ListBox from "./ListBox";
export default class BestSells extends Component {
    constructor(props){
        super(props);

    }

  render() {
    return (
      <View>
          <View style={{flexDirection:'row',width:Dimensions.get('window').width,textColor: "black"}}  >
              <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:5 }} >Bast Selling</Text>
              <TouchableOpacity style={{alignSelf:'flex-end',textColor: "black",marginLeft:'auto',marginRight:10}} >
                  <Text>See all</Text>
              </TouchableOpacity>
          </View>
          <View style={{marginTop:10}} >
              {this.props.children}
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
