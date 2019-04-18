import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image,Dimensions} from 'react-native'
import {Input} from 'native-base'
import {TextInput,Appbar} from 'react-native-paper'
import arrowleft from "../../assets/drawable-mdpi/arrowleft.png";
import fillStar from "../../assets/drawable-mdpi/fillStar.png"
import blankStar from "../../assets/drawable-mdpi/blankstar.png"
export default class WriteReview extends Component {
    constructor(props){
        super(props);
        this.state={
            stars:3
        }
    }

    changeStar=(number)=>{
        if (this.state.stars===number){
            this.setState({
                stars:0
            })
        } else {
            this.setState({
                stars:number
            })
        }

    };
  render() {
    return (
      <View style={{flex:1}}>
        <Appbar.Header  style={{backgroundColor:'white'}}>
            <Appbar.BackAction onPress={()=>{
                this.props.navigation.goBack()
            }} />
            <Appbar.Content title={'Write Review'} subtitle="NiKi"  />
        </Appbar.Header>
          <View style={{flexDirection:"row" ,justifyContent:'center',marginTop:10}}>
              {this.state.stars<1 ? <TouchableOpacity onPress={()=>{this.changeStar(1)}} style={styles.starLayout} ><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(1)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<2 ? <TouchableOpacity  onPress={()=>{this.changeStar(2)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(2)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<3 ? <TouchableOpacity onPress={()=>{this.changeStar(3)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(3)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<4 ? <TouchableOpacity onPress={()=>{this.changeStar(4)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(4)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<5 ? <TouchableOpacity onPress={()=>{this.changeStar(5)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(5)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
          </View>
          <View style={{marginTop:10}} >
              <TextInput underlineColor={'#00C569'} selectionColor={'#00C569'}  placeholder={"Tell us  your experience"}  style={{alignSelf:'center',height:50,width:300,backgroundColor:'white'}}  />
          </View>
          <TouchableOpacity style={{marginLeft:"auto",marginRight:15,height:40,marginTop:30,width:100,borderRadius:5,backgroundColor:'#00C569',alignItems:'center',justifyContent:'center'}} onPress={()=>{}}>
              <Text  style={{fontSize:15,color:'white'}}>Send</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    star:{
        width:Dimensions.get("window").width*0.14,
    },
    starLayout:{
        justifyContent:'space-around',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:Dimensions.get("window").height*0.04
    }
});
