import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Image, Dimensions,ScrollView} from 'react-native'
import sort from '../../assets/sort.png'
import {
    ListItem,
    Button,
    Radio,
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
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import Searchbar from "../components/Searchbar";
import ListBox from "../components/ListBox";
import Carditem from "../components/Carditem";
import {Appbar} from "react-native-paper";

export default class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false,
            Orderby:{
                name:true,
                price:false
            },
            Sortby:{
                asu:true,
                dec:false
            }
        }
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
                 <Button onPress={()=>{this.setState({
                     visible:true
                 })}} transparent>
                     <Icon style={{color:'black'}} name={'funnel'} />
                 </Button>
             </Right>

         </Header>
          <Content>
              <View style={styles.container}>
                  <Dialog
                      onTouchOutside={() => {
                          this.setState({ visible: false });
                      }}
                      visible={this.state.visible}
                      dialogAnimation={new SlideAnimation({
                          slideFrom: 'bottom',
                      })}
                  >
                      <DialogContent>
                         <View>
                             <ListItem itemHeader>
                                 <Text>Order By</Text>
                             </ListItem>
                             <ListItem>
                                     <Text  style={{marginLeft:2,marginRight:2}}>Name</Text>
                                     <Radio selected={this.state.Orderby.name} onPress={()=>{
                                         this.setState({
                                             Orderby:{
                                                 name:!this.state.Orderby.name,
                                                 price:false
                                             }
                                         })
                                     }} />
                                 <Text style={{marginLeft:2,marginRight:2}} >price</Text>
                                 <Radio selected={this.state.Orderby.price} onPress={()=>{
                                     this.setState({
                                         Orderby:{
                                             price:!this.state.Orderby.price,
                                             name:false
                                         }
                                     })
                                 }} />
                             </ListItem>
                             <ListItem itemHeader>
                                 <Text>Sort by</Text>
                             </ListItem>
                             <ListItem>
                                 <Text  style={{marginLeft:2,marginRight:2}}>Ascending</Text>
                                 <Radio selected={this.state.Sortby.asu} onPress={()=>{
                                     this.setState({
                                         Sortby:{
                                             asu:!this.state.Sortby.asu,
                                             dec:false
                                         }
                                     })
                                 }} />
                                 <Text  style={{marginLeft:2,marginRight:2}}>Descending</Text>
                                 <Radio selected={this.state.Sortby.dec} onPress={()=>{
                                     this.setState({
                                         Sortby:{
                                             dec:!this.state.Sortby.dec,
                                             asu:false
                                         }
                                     })
                                 }} />
                             </ListItem>
                                     <Button style={{marginLeft:'auto',marginRight:10}} transparent onPress={()=>{this.setState({
                                         visible:false
                                     })}} >
                                         <Text style={{color:'#00C569'}} >Ok</Text>
                                     </Button>
                         </View>
                      </DialogContent>
                  </Dialog>
              </View>
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
