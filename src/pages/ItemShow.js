import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Dimensions,Image,ScrollView ,TouchableOpacity} from 'react-native'
import item  from '../../assets/drawable-mdpi/item.png'
import Review from "../components/Review";
export default class ItemShow extends Component {
    constructor(props){
        super(props);
            this.state={
                showText:3
            }
    }
  render() {
    return (
        <View>
            <Image  source={item} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch',position:'absolute'}}  />
            <TouchableOpacity  >

            </TouchableOpacity>
            <ScrollView  >
                <View style={{marginTop:Dimensions.get('window').height*0.65}}/>
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
                </View>

            </ScrollView>
        </View>

    )
  }
}

const styles = StyleSheet.create({});
