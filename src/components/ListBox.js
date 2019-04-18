import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class  extends Component {
    constructor(props){
        super(props);
        console.log(this.props.showitem);
    }
  render() {
    return (
      <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}} >
          {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({});
