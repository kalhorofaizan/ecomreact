import React, { Component } from 'react'
import {StyleSheet, View, Dimensions, TouchableOpacity, StatusBar} from 'react-native'
import { Container, Header, Content, Item, Input, Icon ,Text,Body,Title,Form,Label,Button,Left} from 'native-base';
import {TextInput} from 'react-native-paper'
export default class Login extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <Container  style={{backgroundColor:'#fafafa'}} >
              <Header style={{backgroundColor:'white',}}  >
                  <Body style={{justifyContent:'center'}}>
                      <Title style={{color:'black',alignSelf:'center'}} >
                          SignIn
                      </Title>
                  </Body>
              </Header>
                <Content style={{margin:10,backgroundColor:"white",padding:10,elevation:2}}>
                    <Title style={{color:'black'}}  >Welcome</Title>
                  <Form style={{marginTop:10}} >
                      <Item floatingLabel  success>
                          <Label color={'black'}>Email</Label>
                          <Input style={{borderBottomColor:'#00C569'}} />
                          <Icon name='checkmark-circle' />
                      </Item>
                      <Item floatingLabel  success>
                          <Label color={'black'}>Password</Label>
                          <Input secureTextEntry={true} style={{borderBottomColor:'#00C569'}} />
                          <Icon name='checkmark-circle' />
                      </Item>
                      <Button style={{margin:23,backgroundColor:'#00C569'}} block  onPress={()=>{}}><Text> SignIn </Text></Button>
                  </Form>
                    <Title style={{color:'black'}}  >-OR-</Title>
                    <Button bordered style={{margin:23,borderBottomColor:'#00C569'}} block  onPress={()=>{this.props.navigation.navigate('Signup')}}><Text> SignUP </Text></Button>
                    <Button bordered style={{margin:23,borderBottomColor:'#00C569'}} block  onPress={()=>{this.props.navigation.goBack()}}><Text> No Now </Text></Button>
                </Content>
          </Container>
    )
  }
}

const styles = StyleSheet.create({});
