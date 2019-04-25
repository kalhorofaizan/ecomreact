import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native'
import {Container,Content,Header,Left,Button,Icon,Text,Body,Segment,Radio,Label,ListItem,Right,Footer,Form,Item,Input,DatePicker,Thumbnail,Title} from 'native-base'
import cardicon from '../../assets/cardicon.png'
export default class Checkout extends Component {
    constructor(props){
        super(props);
        this.state={
            page:1
        }
    }
    nextPage(){
        if (this.state.page!==3){
            this.setState({
                page:this.state.page+1
            })
        }else {
            this.props.navigation.goBack()
        }
    }
    backPage(){
        if (this.state.page!==1){
            this.setState({
                page:this.state.page-1
            })
        }
    }

    delevery=()=>{
        return  <Content style={{padding:10,marginTop:10}}>
            <Text style={{fontSize:20,alignSelf:'center'}} > Delivery </Text>
            <View>
               <Text style={{fontSize:18,fontWeight: 'bold'}} >Standard Delivery</Text>
                <ListItem>
                    <Left>
                        <Text style={{fontSize:12}} >Order will be delivered between 3 - 5 business days</Text>
                    </Left>
                    <Right>
                        <Radio selected={false}  />
                    </Right>
                </ListItem>
            </View>
            <View>
                <Text style={{fontSize:18,fontWeight: 'bold'}} >Next Day Delivery</Text>
                <ListItem>
                    <Left>
                        <Text style={{fontSize:12}}>Order will be delivered between 3 - 5 business days</Text>
                    </Left>
                    <Right>
                        <Radio selected={false}  />
                    </Right>
                </ListItem>
            </View>
            <View>
                <Text style={{fontSize:18,fontWeight: 'bold'}} >Standard Delivery</Text>
                <ListItem>
                    <Left>
                        <Text  style={{fontSize:12}}>Order will be delivered between 3 - 5 business days</Text>
                    </Left>
                    <Right>
                        <Radio selected={false}  />
                    </Right>
                </ListItem>
            </View>
        </Content>
    };
    address=()=>{
            return <Content>
                <Text style={{fontSize:20,alignSelf:'center'}} > Address </Text>
                <Form style={{padding: 20,paddingTop:0}} >
                    <Item floatingLabel>
                        <Label>Street</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>city</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>State</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Country</Label>
                        <Input />
                    </Item>
                </Form>
            </Content>
    };
    payment=()=>{
        return <Content>
            <Text style={{fontSize:20,alignSelf:'center'}} > Payment </Text>
            <Form style={{padding: 20,paddingTop:0}} >
                <Item floatingLabel>
                    <Label>Card Name</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Card Number</Label>
                    <Input keyboardType="numeric" />
                    <Thumbnail source={cardicon} />
                </Item>
                <Item style={{marginTop: 10}}>
                    <Label>Expiry Date</Label>
                    <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false}
                    />

                </Item>
                <Item floatingLabel>
                    <Label>CVV</Label>
                    <Input  />
                </Item>

            </Form>
        </Content>
    };
    componentWillMount() {
        StatusBar.setHidden(true)
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
                    <Text style={{color:'black',alignSelf:'center'}} >Checkout</Text>
                </Body>
                <Right/>
            </Header>
            <Segment style={{backgroundColor:'white'}} >
                <View  >
                    <Radio  selected={this.state.page>=1} style={{alignSelf:'center'}} first/>
                    <Label  >Delivery</Label>
                </View>
                <View style={{height:1,borderBottom:1,width:210,borderBottomColor:'black',backgroundColor:'black',position:'absolute',justifyContent:'center',top:11}}  />
                <View  style={{marginRight:49,marginLeft:51}} >
                    <Radio  selected={this.state.page>=2} style={{alignSelf:'center'}}  />
                    <Label  >Address</Label>
                </View>
                <View   >
                    <Radio  selected={this.state.page===3} style={{alignSelf:'center'}} last />
                    <Label  >Payment</Label>
                </View>

            </Segment>
            { this.state.page===1?  this.delevery():<Text/>}
            { this.state.page===2?  this.address():<Text/>}
            { this.state.page===3?  this.payment():<Text/>}
            <Footer  style={{backgroundColor:'white'}} >
                <Left>
                    <Button onPress={()=>{this.backPage()}}  bordered color={'#00C569'}  style={{borderRadius:10,marginLeft:10}}>
                        <Text>Back</Text>
                    </Button>
                </Left>
                <Left>
                    <TouchableOpacity style={{marginLeft:"auto",marginRight:15,height:40,width:100,borderRadius:5,backgroundColor:'#00C569',alignItems:'center',justifyContent:'center'}} onPress={()=>{
                        this.nextPage()
                    }}>
                        <Text  style={{fontSize:15,color:'white'}}>{this.state.page=== 3 ? 'pay':'next'}</Text>
                    </TouchableOpacity>
                </Left>
            </Footer>
        </Container>
    )
  }
}

const styles = StyleSheet.create({});
