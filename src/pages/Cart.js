import React, { Component } from 'react'
import {Text, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native'
import {Container,Content,List,SwipeRow,Button,Icon,ListItem,Left,Body,Thumbnail,Item,Title,Right,Footer} from 'native-base'
import image from '../../assets/drawable-mdpi/item.png'

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            item:1
        }
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
                                <Text style={{fontWeight: 'bold',color:'#000000',fontSize:18}} >Game</Text>
                                <Text style={{color:'#00C569'}} >Rs 1500</Text>
                                <View  style={{flexDirection:'row',marginTop:5}}>
                                    <Button small style={{backgroundColor:'#e2e2e2'}} onPress={()=> {
                                        this.setState({
                                            item:this.state.item+1
                                        })
                                    }} >
                                        <Icon name={"add"}  />
                                    </Button>
                                    <Text style={{backgroundColor:'#e2e2e2',padding: 5,paddingLeft:10,paddingRight:10}} >{this.state.item}</Text>
                                    <Button style={{backgroundColor:'#e2e2e2'}} small  onPress={()=>{
                                        this.setState({
                                            item:this.state.item-1
                                        })
                                    }} >
                                        <Icon name={"remove"}  />
                                    </Button>
                                </View>

                            </View>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
                <SwipeRow
                    rightOpenValue={-75}
                    body={
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Thumbnail source={image} square large />
                            </View>
                            <View style={{marginLeft:10}} >
                                <Text style={{fontWeight: 'bold',color:'#000000',fontSize:18}} >Game</Text>
                                <Text style={{color:'#00C569'}} >Rs 1500</Text>
                                <View  style={{flexDirection:'row',marginTop:5}}>
                                    <Button small style={{backgroundColor:'#e2e2e2'}} onPress={()=> {
                                        this.setState({
                                            item:this.state.item+1
                                        })
                                    }} >
                                        <Icon name={"add"}  />
                                    </Button>
                                    <Text style={{backgroundColor:'#e2e2e2',padding: 5,paddingLeft:10,paddingRight:10}} >{this.state.item}</Text>
                                    <Button style={{backgroundColor:'#e2e2e2'}} small  onPress={()=>{
                                        this.setState({
                                            item:this.state.item-1
                                        })
                                    }} >
                                        <Icon name={"remove"}  />
                                    </Button>
                                </View>

                            </View>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
                <SwipeRow
                    rightOpenValue={-75}
                    body={
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Thumbnail source={image} square large />
                            </View>
                            <View style={{marginLeft:10}} >
                                <Text style={{fontWeight: 'bold',color:'#000000',fontSize:18}} >Game</Text>
                                <Text style={{color:'#00C569'}} >Rs 1500</Text>
                                <View  style={{flexDirection:'row',marginTop:5}}>
                                    <Button small style={{backgroundColor:'#e2e2e2'}} onPress={()=> {
                                        this.setState({
                                            item:this.state.item+1
                                        })
                                    }} >
                                        <Icon name={"add"}  />
                                    </Button>
                                    <Text style={{backgroundColor:'#e2e2e2',padding: 5,paddingLeft:10,paddingRight:10}} >{this.state.item}</Text>
                                    <Button style={{backgroundColor:'#e2e2e2'}} small  onPress={()=>{
                                        this.setState({
                                            item:this.state.item-1
                                        })
                                    }} >
                                        <Icon name={"remove"}  />
                                    </Button>
                                </View>

                            </View>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
                <SwipeRow
                    rightOpenValue={-75}
                    body={
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Thumbnail source={image} square large />
                            </View>
                            <View style={{marginLeft:10}} >
                                <Text style={{fontWeight: 'bold',color:'#000000',fontSize:18}} >Game</Text>
                                <Text style={{color:'#00C569'}} >Rs 1500</Text>
                                <View  style={{flexDirection:'row',marginTop:5}}>
                                    <Button small style={{backgroundColor:'#e2e2e2'}} onPress={()=> {
                                        this.setState({
                                            item:this.state.item+1
                                        })
                                    }} >
                                        <Icon name={"add"}  />
                                    </Button>
                                    <Text style={{backgroundColor:'#e2e2e2',padding: 5,paddingLeft:10,paddingRight:10}} >{this.state.item}</Text>
                                    <Button style={{backgroundColor:'#e2e2e2'}} small  onPress={()=>{
                                        this.setState({
                                            item:this.state.item-1
                                        })
                                    }} >
                                        <Icon name={"remove"}  />
                                    </Button>
                                </View>

                            </View>
                        </View>
                    }
                    right={
                        <Button danger onPress={() => alert('Trash')}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
                <SwipeRow
                    rightOpenValue={-75}
                    body={
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Thumbnail source={image} square large />
                            </View>
                            <View style={{marginLeft:10}} >
                                <Text style={{fontWeight: 'bold',color:'#000000',fontSize:18}} >Game</Text>
                                <Text style={{color:'#00C569'}} >Rs 1500</Text>
                                <View  style={{flexDirection:'row',marginTop:5}}>
                                    <Button small style={{backgroundColor:'#e2e2e2'}} onPress={()=> {
                                        this.setState({
                                            item:this.state.item+1
                                        })
                                    }} >
                                        <Icon name={"add"}  />
                                    </Button>
                                    <Text style={{backgroundColor:'#e2e2e2',padding: 5,paddingLeft:10,paddingRight:10}} >{this.state.item}</Text>
                                    <Button style={{backgroundColor:'#e2e2e2'}} small  onPress={()=>{
                                        this.setState({
                                            item:this.state.item-1
                                        })
                                    }} >
                                        <Icon name={"remove"}  />
                                    </Button>
                                </View>

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
            <Footer  style={{backgroundColor:'white',padding:4,paddingTop:0}} >
                <Left>
                    <Text style={{color:'#000000',fontSize:18}} >Total</Text>
                    <Text style={{color:'#00C569'}} >Rs 1500</Text>
                </Left>
                <Right>
                    <TouchableOpacity style={{height:40,marginTop:10,width:100,borderRadius:5,backgroundColor:'#00C569',alignItems:'center',justifyContent:'center'}} onPress={()=>{this.props.navigation.navigate('CheckOut')}}>
                        <Text style={{fontSize:15,color:'white'}}>CheckOut</Text>
                    </TouchableOpacity>
                </Right>
            </Footer>
        </Container>
    )
  }
}

