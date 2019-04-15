import React, { Component } from 'react'
import {  StyleSheet, View ,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'
import search from '../../assets/drawable-mdpi/Icon_Search.png'
export default class Searchbar extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
        <View  style={styles.searchSection}>
            <Image source={search} style={styles.searchIcon}  />
            <TextInput
                style={styles.input}
                placeholder="Search"
                underlineColorAndroid="transparent"
            />

        </View>
    )
  }
}

const styles = StyleSheet.create({
    searchSection: {
        height:36,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        margin:10,
        marginRight:10,
        borderRadius:100
    },
    searchIcon: {
        padding: 10,
        marginRight:10,
        marginLeft:5
    },
    input: {
        height:36,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        width:Dimensions.get("window").width*0.8,
        backgroundColor: '#F7F7F7',
        color: '#424242',
    },
});
