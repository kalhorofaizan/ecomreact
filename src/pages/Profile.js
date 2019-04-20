import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {Container,Content,Input,Thumbnail} from 'native-base'
import image from '../../assets/drawable-mdpi/Avatar.png'
export default class Profile extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <Container>
          <Content style={{padding:10}}>
              <TouchableOpacity onPress={()=>{alert('ok')}}>
              <Thumbnail large circle source={image} style={{alignSelf:'center'}}  />
              </TouchableOpacity>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
