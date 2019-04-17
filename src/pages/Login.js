import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions ,TouchableOpacity,TextInput} from 'react-native'

export default class Login extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <View  style={{backgroundColor:'#fafafa'}} >
          <View style={{flexDirection:'row',width:Dimensions.get('window').width*0.8,alignSelf:'center',height:Dimensions.get('window').height*0.5,elevation:1,marginTop:Dimensions.get('window').height*0.1,backgroundColor:'white'}} >
              <View  >
                <Text style={{fontSize:Dimensions.get('window').height*0.040,fontWeight: 'bold',margin:5,marginBottom:0,color:'#000000'}} >Welcome</Text>
                <Text style={{fontSize:Dimensions.get('window').height*0.015,marginLeft:5}}>Sign in to Continue</Text>
              </View>
              <View  style={{margin: 5}}>
                  <Text>Email</Text>
                  <TextInput  />
              </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
