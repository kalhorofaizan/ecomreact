import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import item from '../../assets/drawable-mdpi/item.png'
export default class Carditem extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Card  onPress={()=>{this.props.navigation.navigate('Showitem')}} >
            <Card.Cover source={item } />
            <Card.Content>
                <Title>Dri-FIT  Long</Title>
                <Paragraph style={{color:'#00C569'}} >RS 1500</Paragraph>
            </Card.Content>

        </Card>
    )
  }
}

const styles = StyleSheet.create({});
