import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header,Item,Icon,Input,Button} from 'native-base'
export default class NewSearchbar extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
        <Header searchBar rounded transparent style={{elevation:1}}  >
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
        </Header>
    )
  }
}

const styles = StyleSheet.create({});
