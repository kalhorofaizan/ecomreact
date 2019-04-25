import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Button, Container, Content, Header, Icon,Left,Right,Title,Body,Card,CardItem} from 'native-base'
export default class OrderList extends Component {
    constructor(props){
        super(props);
        
    }

  render() {
    return (
      <Container>
          <Header style={{backgroundColor:'white',}} >
              <Left>
                  <Button onPress={()=>{this.props.navigation.goBack()}} transparent>
                      <Icon style={{color:'black'}} name={'arrow-back'}/>
                  </Button>
              </Left>
              <Body>
                  <Title style={{color:'black'}}  >OrderList</Title>
              </Body>
          </Header>
          <Content>
                <Card>
                    <CardItem>
                        <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                        <Right>
                            <View style={{width:100,height:40,backgroundColor:'#FFB900',justifyContent:'center'}} >
                                <Text style={{color:'white',alignSelf:'center',}} >Pending</Text>
                            </View>
                        </Right>
                    </CardItem>
                </Card>
              <Card>
                  <CardItem>
                      <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                  </CardItem>
                  <CardItem>
                      <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                      <Right>
                          <View style={{width:100,height:40,backgroundColor:'#00C569',justifyContent:'center'}} >
                              <Text style={{color:'white',alignSelf:'center',}} >Delivered</Text>
                          </View>
                      </Right>
                  </CardItem>
              </Card>
              <Card>
                  <CardItem>
                      <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                  </CardItem>
                  <CardItem>
                      <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                      <Right>
                          <View style={{width:100,height:40,backgroundColor:'#00C569',justifyContent:'center'}} >
                              <Text style={{color:'white',alignSelf:'center',}} >Delivered</Text>
                          </View>
                      </Right>
                  </CardItem>
              </Card>
              <Card>
                  <CardItem>
                      <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                  </CardItem>
                  <CardItem>
                      <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                      <Right>
                          <View style={{width:100,height:40,backgroundColor:'#00C569',justifyContent:'center'}} >
                              <Text style={{color:'white',alignSelf:'center',}} >Delivered</Text>
                          </View>
                      </Right>
                  </CardItem>
              </Card>
              <Card>
                  <CardItem>
                      <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                  </CardItem>
                  <CardItem>
                      <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                      <Right>
                          <View style={{width:100,height:40,backgroundColor:'#00C569',justifyContent:'center'}} >
                              <Text style={{color:'white',alignSelf:'center',}} >Delivered</Text>
                          </View>
                      </Right>
                  </CardItem>
              </Card>
              <Card>
                  <CardItem>
                      <Text style={{fontWeight: 'bold'}} >12468454982316</Text>
                  </CardItem>
                  <CardItem>
                      <Left><Text style={{color:'#00C569'}} >RS 1500</Text></Left>
                      <Right>
                          <View style={{width:100,height:40,backgroundColor:'#00C569',justifyContent:'center'}} >
                              <Text style={{color:'white',alignSelf:'center',}} >Delivered</Text>
                          </View>
                      </Right>
                  </CardItem>
              </Card>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({});
