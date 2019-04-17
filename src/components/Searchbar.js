import React, { Component } from 'react'
import {  StyleSheet, View ,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'
import {Searchbar} from 'react-native-paper'
import search from '../../assets/drawable-mdpi/Icon_Search.png'
export default class Searchbar1 extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <Searchbar   style={{margin:10,borderRadius: 20 }}  placeholder={'Search'}  />
    )
  }
}

const styles = StyleSheet.create({
    searchSection: {
        height:Dimensions.get('window').height*0.09,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#F7F7F7',
        margin:10,
        marginRight:10,
        borderRadius:100
    },
    searchIcon: {
        padding: 10,
        marginRight:10,
        marginLeft:10
    },
    input: {
        height:Dimensions.get('window').height*0.09,
        width:"100%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#F7F7F7',
        color: '#424242',
    },
});
