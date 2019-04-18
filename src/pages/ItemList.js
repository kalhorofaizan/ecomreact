import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import {Button,ActionSheet,Container,Content,Picker,Form,Header,Left,Right,Icon,Body,Title,Label} from "native-base";
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
          <Appbar.Header  style={{backgroundColor:'white'}}>
              <Appbar.BackAction onPress={()=>{
                  this.props.navigation.goBack()
              }} />
              <Appbar.Content title={'Cloth'}  />
          </Appbar.Header>
          <Searchbar/>
          <Content>
              <Form>
                  <Label style={{marginLeft:10  }}>Order by</Label>
                  <Picker
                      renderHeader={backAction =>
                          <Header style={{ backgroundColor: "#f44242" }}>
                              <Left>
                                  <Button transparent onPress={backAction}>
                                      <Icon name="filter" style={{ color: "#fff" }} />
                                  </Button>
                              </Left>
                              <Body style={{ flex: 3 }}>
                                  <Title style={{ color: "#fff" }}>Your Header</Title>
                              </Body>
                              <Right />
                          </Header>}
                      mode="dropdown"
                      iosIcon={<Icon name="filter" />}
                      selectedValue={"Key0"}
                      onValueChange={this.onValueChange.bind(this)}
                  >
                      <Picker.Item label="Date" value="key0" />
                      <Picker.Item label="price-dec" value="key2" />
                      <Picker.Item label="price-acc" value="key1" />
                      <Picker.Item label="Rating" value="key4" />
                  </Picker>
              </Form>
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
