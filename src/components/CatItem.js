import React, { Component } from 'react'
import {Text, StyleSheet, View, Image,TouchableOpacity,Dimensions} from 'react-native'


export default  CatItem =(props)=>{
    return (
        <View  style={styles.ItemLayout} >
            <TouchableOpacity style={styles.ImageLayout} onPress={()=>{props.navigation.navigate('ItemList')}} >
                <Image source={props.image}   style={{width:props.width,height:props.height}}/>
            </TouchableOpacity>
            <Text style={{fontSize:Dimensions.get('window').width*0.03}}>{props.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    ItemLayout:{
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        width:Dimensions.get('window').width*0.22
    },
    ImageLayout:{
        borderRadius:50,
        width:Dimensions.get('window').width*0.15,
        height:Dimensions.get('window').width*0.15,
        elevation:1,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },

});
