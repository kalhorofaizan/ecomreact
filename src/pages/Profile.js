import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {Container, Content, Input, Thumbnail, Form, Item, Label, ListItem, Button, Icon, Left} from 'native-base'
import image from '../../assets/drawable-mdpi/Avatar.png'
export default class Profile extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container>
          <Content style={{padding:10}}>
              <Button onPress={()=>{this.props.navigation.goBack()}} transparent>
                  <Icon style={{color:'black'}} name={'arrow-back'}/>
              </Button>
              <TouchableOpacity onPress={()=>{alert('ok')}} style={{marginTop:20}} >
              <Thumbnail large circle source={image} style={{alignSelf:'center'}}  />
              </TouchableOpacity>
              <Form>
                  <Item fixedLabel>
                      <Label>Username</Label>
                      <Input />
                  </Item>
                  <Item fixedLabel>
                      <Label>Email</Label>
                      <Input />
                  </Item>
                  <Item fixedLabel>
                      <Label>Password</Label>
                      <Input />
                  </Item>
                  <ListItem itemHeader>
                      <Text>Address</Text>
                  </ListItem>
                  <Item fixedLabel>
                      <Label>street</Label>
                      <Input />
                  </Item>
                  <Item fixedLabel>
                      <Label>city</Label>
                      <Input />
                  </Item>
                  <Item fixedLabel>
                      <Label>state</Label>
                      <Input />
                  </Item>
                  <Button full warning>
                      <Text>Save</Text>
                  </Button>
              </Form>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
