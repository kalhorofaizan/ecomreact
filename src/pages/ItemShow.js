import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Dimensions,Image,ScrollView ,TouchableOpacity,Button,Platform} from 'react-native'
import item  from '../../assets/drawable-mdpi/item.png'
import Review from "../components/Review";
import arrowleft from '../../assets/drawable-mdpi/arrowleft.png'

export default class ItemShow extends Component {
    constructor(props){
        super(props);
        Dimensions.addEventListener("change",()=>{
           this.setState({
               portrait:this.isPortrait
           })
        });
            this.state={
                showText:3
            };
    }
    isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };


  render() {
    return (
        <View  style={{flex:1}}>
            <Image  source={item} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch',position:'absolute'}}  />
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{width:40,height:40,borderRadius:50,backgroundColor:'rgba(247,246,255,0.18)',marginTop:10,marginLeft:10,alignItems:'center',justifyContent:'center'}}  >
                <Image  source={arrowleft} style={{width:30,height:30}}  />
            </TouchableOpacity>
            <View style={{height:Dimensions.get('window').height*0.2}} />
            <ScrollView showsVerticalScrollIndicator={false}  >
                <View style={{marginTop:Dimensions.get('window').height*0.31}}/>
                <View style={{backgroundColor:"white"}} >
                    <View  >
                        <Text   style={{fontSize:20,marginLeft:10,fontWeight: "bold",color:'#000000',marginTop:5,}}   >Nike Dri-Fit Long Sleeve</Text>
                    </View>
                    <View style={{marginTop:30}}>
                        <Text style={{fontSize:16,color:"#000000",fontWeight:'bold',marginLeft:10,marginRight:10}} >Details</Text>
                        <Text numberOfLines={this.state.showText}   style={{color:"#000000",marginLeft:10,marginRight:10,lineHeight:25}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        {this.state.showText ?  <TouchableOpacity onPress={()=>{this.setState({
                            showText:null
                        })}} style={{marginLeft:10}} >
                            <Text style={{color:'#00C569'}}>See more</Text>
                        </TouchableOpacity>: <TouchableOpacity onPress={()=>{this.setState({
                            showText:3
                        })}} style={{marginLeft:10}} >
                            <Text style={{color:'#00C569'}}>See less</Text>
                        </TouchableOpacity>}
                    </View>
                    <Text style={{fontSize:16,color:"#000000",fontWeight:'bold',marginLeft:10,marginRight:10,marginTop:10}} >Reviews</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Writereview')}}  style={{marginLeft:10}} >
                <Text style={{color:'#00C569',marginTop:10}}>Write Yours</Text>
            </TouchableOpacity>
                <Review/>
                <Review/>
                    <Review/>
                    <Review/>
                </View>

            </ScrollView>
            <View  style={{height:60,width:Dimensions.get('window').width,flexDirection:'row',elevation:1,backgroundColor:'white'}}>
                <View  style={{marginLeft:20,marginTop:10}}>
                    <Text>Price</Text>
                    <Text style={{fontSize:15,color:'#00C569'}} >RS 1500</Text>
                </View>
                <TouchableOpacity style={{marginLeft:"auto",marginRight:15,height:40,marginTop:10,width:100,borderRadius:5,backgroundColor:'#00C569',alignItems:'center',justifyContent:'center'}} onPress={()=>{}}>
                    <Text style={{fontSize:15,color:'white'}}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({});
