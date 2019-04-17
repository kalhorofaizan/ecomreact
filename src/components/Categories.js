import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView ,Image,Dimensions} from 'react-native'
import man from '../../assets/drawable-mdpi/Icon_MensShoe.png'
import woman from '../../assets/drawable-mdpi/Icon_WomensShoe.png'
import devices from '../../assets/drawable-mdpi/Icon_Devices.png'
import gadgets from '../../assets/drawable-mdpi/Icon_Gadgets.png'
import gaming from '../../assets/drawable-mdpi/Icon_Gaming.png'
import CatItem from './CatItem'
export default class Categories extends Component {
    constructor(props){
        super(props);
        
    }

  render() {
    return (
      <View style={{width:Dimensions.get('window').width}}   >
        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,marginTop:5}} > Categories </Text>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{width:Dimensions.get('window').width}} >
              <CatItem  image={man} name={"Man"} width={36} height={17}  />
              <CatItem  image={woman} name={"Woman"} width={30} height={24} />
              <CatItem  image={devices} name={"Devices"} width={19} height={26}  />
              <CatItem  image={gadgets} name={"Gadgets"} width={28} height={26} />
              <CatItem  image={gaming} name={"Gaming"} width={34} height={23} />
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
