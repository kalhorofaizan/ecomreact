import React, { Component } from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

export default  CatItem =(props)=>{
    return (
        <View  style={styles.ItemLayout} >
            <View style={styles.ImageLayout}>
                <Image source={props.image} style={[styles.Image,{width:props.width,height:props.height}]}/>
            </View>
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
        borderRadius:30,
        width:60,
        height:60,
        shadowColor:'black',
        shadowOffset:{width:2,height:6},
        shadowOpacity:0.01,
        elevation:2,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
    Image:{
        width:30,
        height:24
    }
});
