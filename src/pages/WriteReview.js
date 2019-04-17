import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image,Dimensions,TextInput} from 'react-native'
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
      <View>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{width:40,height:40,borderRadius:50,backgroundColor:'rgba(247,246,255,0.18)',marginTop:10,marginLeft:10,alignItems:'center',justifyContent:'center'}}  >
                <Image  source={arrowleft} style={{width:30,height:30}}  />
            </TouchableOpacity>
            <Text style={{fontSize:Dimensions.get("window").height*0.03 ,marginTop:15,marginLeft:Dimensions.get("window").width*0.25,color:'#000000',}} >Write Review</Text>
        </View>
          <Text style={{fontSize:Dimensions.get("window").height*0.03,color:'#000000',fontWeight: 'bold',alignSelf:'center',marginTop:10}}>Nike Dri-FIT Long Sleeve</Text>
          <View style={{flexDirection:"row",height:Dimensions.get("window").height*0.15,width:Dimensions.get('window').width}}>
              {this.state.stars<1 ? <TouchableOpacity onPress={()=>{this.changeStar(1)}} style={styles.starLayout} ><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(1)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<2 ? <TouchableOpacity  onPress={()=>{this.changeStar(2)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(2)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<3 ? <TouchableOpacity onPress={()=>{this.changeStar(3)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(3)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<4 ? <TouchableOpacity onPress={()=>{this.changeStar(4)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(4)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
              {this.state.stars<5 ? <TouchableOpacity onPress={()=>{this.changeStar(5)}} style={styles.starLayout}><Image  source={blankStar} style={styles.star}  /></TouchableOpacity> :<TouchableOpacity onPress={()=>{this.changeStar(5)}} style={styles.starLayout}><Image  source={fillStar} style={styles.star}  /></TouchableOpacity> }
          </View>
          <TextInput placeholder={"Tell us  your experience"}  style={{width:Dimensions.get('window').width*0.9,alignSelf:'center',borderBottomWidth:0.8,borderBottomColor:'#DDDDDD',marginTop:20}}  />
          <TouchableOpacity style={{marginLeft:"auto",marginRight:15,height:40,marginTop:30,width:100,borderRadius:5,backgroundColor:'#00C569',alignItems:'center',justifyContent:'center'}} onPress={()=>{}}>
              <Text style={{fontSize:15,color:'white'}}>Send</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    star:{
        width:Dimensions.get("window").width*0.14,
        height:Dimensions.get("window").height*0.09,

    },
    starLayout:{
        justifyContent:'space-around',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:Dimensions.get("window").height*0.04
    }
});
