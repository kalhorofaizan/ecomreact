import React, { Component } from 'react'
import {Text, StyleSheet, View, Image,TouchableOpacity,Dimensions} from 'react-native'


export default  CatItem =(props)=>{
    return (
        <View  style={styles.ItemLayout} >
            <TouchableOpacity style={styles.ImageLayout} onPress={()=>{props.navigation.navigate('ItemList')}} >
                <Image source={props.image} />
            </TouchableOpacity>
            <Text style={{fontSize:Dimensions.get('window').height*0.03}}>{props.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    ItemLayout:{
        margin:5,
        alignItems:'center',
        justifyContent:'center',
    },
    ImageLayout:{
        borderRadius:100,
        elevation:1,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },

});
