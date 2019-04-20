import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'
import {Container,Content,Left,Right,Body,Thumbnail,ListItem,List,Button,Icon} from 'native-base'
import image from '../../assets/drawable-mdpi/Avatar.png'
import editprofile from '../../assets/editprofile.png'
import order from '../../assets/orderlist.png'
import logout from '../../assets/logout.png'
export default class Setting extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <Container >
          <Content style={{padding:10}}>
              <View style={{flexDirection:'row',marginBottom:20}} >
                      <Thumbnail large circle source={image}  />
                  <View style={{marginTop:20,marginLeft:40}} >
                      <Text style={{fontWeight: 'bold'}} >faizan ullah</Text>
                      <Text >kalhorofaizan@gmail.com</Text>
                  </View>
                  <Right/>
              </View>
                  <ListItem onPress={()=>{this.props.navigation.navigate('Profile')}} icon>
                      <Left>
                          <Thumbnail small source={editprofile}  />
                      </Left>
                      <Body>
                          <Text>Edit profile</Text>
                      </Body>
                  </ListItem>
              <ListItem icon>
                  <Left>
                      <Thumbnail small source={order}  />
                  </Left>
                  <Body>
                      <Text>Order List</Text>
                  </Body>
              </ListItem>
              <ListItem icon>
                  <Left>
                      <Thumbnail small source={logout}  />
                  </Left>
                  <Body>
                      <Text>Logout</Text>
                  </Body>
              </ListItem>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
