import React, { Component } from 'react'
import {Text, StyleSheet, View, Image,TouchableOpacity} from 'react-native'


export default  CatItem =(props)=>{
    return (
        <View  style={styles.ItemLayout} >
            <TouchableOpacity style={styles.ImageLayout}>
                <Image source={props.image}   style={[styles.Image,{width:props.width,height:props.height}]}/>
            </TouchableOpacity>
            <Text>{props.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    ItemLayout:{
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        width:70
    },
    ImageLayout:{
        borderRadius:50,
        width:60,
        height:60,
        elevation:1,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },

});
