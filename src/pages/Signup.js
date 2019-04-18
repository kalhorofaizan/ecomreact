import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Body, Button, Container, Content, Form, Header, Icon, Input, Item, Label, Title} from "native-base";

export default class Signup extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
        <Container  style={{backgroundColor:'#fafafa'}} >
            <Header style={{backgroundColor:'white',}}  >
                <Body style={{justifyContent:'center'}}>
                    <Title style={{color:'black',alignSelf:'center'}} >
                        SignUp
                    </Title>
                </Body>
            </Header>
            <Content style={{margin:10,backgroundColor:"white",padding:10,elevation:2}}>
                <Title style={{color:'black'}}  >Welcome</Title>
                <Form style={{marginTop:10}} >
                    <Item floatingLabel  success>
                        <Label color={'black'}>UserName</Label>
                        <Input style={{borderBottomColor:'#00C569'}} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Item floatingLabel  success>
                        <Label color={'black'}>Email</Label>
                        <Input style={{borderBottomColor:'#00C569'}} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Item floatingLabel  success>
                        <Label color={'black'}>Password</Label>
                        <Input style={{borderBottomColor:'#00C569'}} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Button style={{margin:23,backgroundColor:'#00C569'}} block  onPress={()=>{}}><Text> SignIn </Text></Button>
                </Form>
                <Title style={{color:'black'}}  >-OR-</Title>
                <Button bordered style={{margin:23,borderBottomColor:'#00C569'}} block  onPress={()=>{this.props.navigation.goBack()}}><Text> Already have a Account </Text></Button>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({});
