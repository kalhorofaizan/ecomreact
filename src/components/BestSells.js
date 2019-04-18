import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,Dimensions,ScrollView,Image} from 'react-native'
export default class BestSells extends Component {
    constructor(props){
        super(props);

    }

  render() {
    return (
      <View>
          <View style={{flexDirection:'row',textColor: "black"}}  >
              <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:5 }} >Bast Selling</Text>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ItemList')}} style={{alignSelf:'flex-end',textColor: "black",marginLeft:'auto',marginRight:10}} >
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
