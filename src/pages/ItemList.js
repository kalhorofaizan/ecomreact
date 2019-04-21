import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import sort from '../../assets/sort.png'
import {
    Button,
    ActionSheet,
    Container,
    Content,
    Picker,
    Form,
    Header,
    Left,
    Right,
    Icon,
    Body,
    Title,
    Label,
    Item, Input
} from "native-base";
import Searchbar from "../components/Searchbar";
import ListBox from "../components/ListBox";
import Carditem from "../components/Carditem";
import {Appbar} from "react-native-paper";

export default class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
  render() {
    return (
      <Container style={{flex:1}} >
         <Header searchBar transparent style={{elevation:1}}  >
             <Left>
                 <Button onPress={()=>{this.props.navigation.goBack()}} transparent>
                     <Icon style={{color:'black'}} name={'arrow-back'}/>
                 </Button>
             </Left>
                 <Item>
                     <Icon name="ios-search" />
                     <Input placeholder="Search" />
                 </Item>
                 <Button transparent>
                     <Text>Search</Text>
                 </Button>
             <Right>
                 <Button onPress={()=>{alert('ok')}} transparent>
                     <Icon style={{color:'black'}} name={'funnel'} />
                 </Button>
             </Right>

         </Header>
          <Content>
              <ScrollView>
                  <ListBox >
                      <Carditem navigation={this.props.navigation}/>
                      <Carditem navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox >
                      <Carditem navigation={this.props.navigation}/>
                      <Carditem navigation={this.props.navigation}/>
                  </ListBox>
                  <ListBox >
                      <Carditem navigation={this.props.navigation}/>
                      <Carditem navigation={this.props.navigation}/>
                  </ListBox>
              </ScrollView>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
