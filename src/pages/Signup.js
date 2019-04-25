import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Body, Button, Container, Content, Form, Header, Icon, Input, Item, Label, Title} from "native-base";
import firebase,{db} from '../firebase';
export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''
        };
        this.reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    }
    signup(){
        if(!(this.state.username.length>5)){
                alert('all field required');
        }else if (!this.reg.test(this.state.email))
        {
            alert('all field required');
        }else if(!(this.state.password.length>5)){
            alert('all field required');
        }else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user)=>{
                this.ref= db.collection('users');
                this.ref.add({
                    name:this.state.username,
                    id:user.user.uid,
                    profilepic:'default.jpg',
                    street:'',
                    city:'',
                    state:'',
                    phone:''
                }).then(()=>{
                    this.props.navigation.pop(2);
                }).catch((err)=>{
                    console.log(err)
                })
                }
            ).catch(err=>{
                console.log(err)
            });
        }



    }

  render() {

    return (
        <Container  style={{backgroundColor:'#fafafa'}} >
            <Header style={{backgroundColor:'white'}}  >
                <Body style={{justifyContent:'center'}}>
                    <Title style={{color:'black',alignSelf:'center'}} >
                        SignUp
                    </Title>
                </Body>
            </Header>
            <Content style={{margin:10,backgroundColor:"white",padding:10,elevation:2}}>
                <Title style={{color:'black'}}  >Welcome</Title>
                <Form style={{marginTop:10}} >
                    <Item floatingLabel success={this.state.username.length>=6}>
                        <Label color={'black'}>UserName</Label>
                        <Input  value={this.state.username} style={{borderBottomColor:'#00C569'}} onChangeText={(e)=>{
                            this.setState({
                                username:e
                            });
                        }} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Item floatingLabel  success={this.reg.test(this.state.email)} >
                        <Label color={'black'}>Email</Label>
                        <Input style={{borderBottomColor:'#00C569'}} onChangeText={(text)=>{
                            this.setState({
                                email:text
                            })
                        }} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Item floatingLabel  success={this.state.password.length>=6}>
                        <Label color={'black'}>Password</Label>
                        <Input  secureTextEntry={true} style={{borderBottomColor:'#00C569'}} onChangeText={(e)=>{
                            this.setState({
                                password:e
                            })
                        }} />
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Button style={{margin:23,backgroundColor:'#00C569'}} block   onPress={()=>this.signup()}><Text> SignUp </Text></Button>
                </Form>
                <Title style={{color:'black'}}  >-OR-</Title>
                <Button bordered style={{margin:23,borderBottomColor:'#00C569'}} block  onPress={()=>{this.props.navigation.goBack()}}><Text> Already have a Account </Text></Button>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({});
