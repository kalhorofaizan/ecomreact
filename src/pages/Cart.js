import React, { Component } from 'react'
import {  Text,StyleSheet, View } from 'react-native'
import {Container,Content,List,SwipeRow,Button,Icon,ListItem,Left,Body,Thumbnail,Item,Title,Right} from 'native-base'
import image from '../../assets/drawable-mdpi/item.png'
export default class Cart extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
        <Container>
            <Content style={{margin:10}}  >
                    <SwipeRow
                        rightOpenValue={-75}
                        body={
                           <View style={{flexDirection:'row'}}>
                               <View>
                                   <Thumbnail source={image} square large />
                               </View>
                               <View style={{marginLeft:10}} >
                                   <Text style={{fontWeight: 'bold',color:'#000000'}} >Game</Text>
                                   <Text style={{color:'#00C569'}} >Rs 1500</Text>
                               </View>
                           </View>
                        }
                        right={
                            <Button danger onPress={() => alert('Trash')}>
                                <Icon active name="trash" />
                            </Button>
                        }
                    />


            </Content>
        </Container>
    )
  }
}

