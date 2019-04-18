import React, { Component } from 'react'
import {Searchbar} from 'react-native-paper'
export default class Searchbar1 extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <Searchbar   style={{margin:10,borderRadius: 20 }}  placeholder={'Search'}  />
    )
  }
}
