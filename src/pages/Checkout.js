import React, { Component } from 'react'
import {  StyleSheet, View,TouchableOpacity } from 'react-native'
import {Container,Content,Header,Left,Button,Icon,Text,Body,Segment} from 'native-base'
export default class Checkout extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
        <Container>
            <Header style={{backgroundColor:'white'}}  hasSegment >
                <Left>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Icon name={"md-arrow-back"} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{color:'black'}} >Checkout</Text>
                </Body>
            </Header>
            <Segment >
                <Button first>
                    <Text>Puppies</Text>
                </Button>
                <Button>
                    <Text>Kittens</Text>
                </Button>
                <Radio  selected={true} Last/>
            </Segment>
            <Content>
                <Text>game</Text>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({});
