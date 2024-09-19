import React from "react";
import {View, Text, StyleSheet } from "react-native";

export default function app () {
  return(
    <View style ={stylestilo.conteinerqn}> 
      <View style = {stylestilo.box1}>
        <Text>Box 1</Text>
      </View>
      <View style ={stylestilo.box1}>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

const stylestilo = StyleSheet.create({
  conteinerqn:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  box1:{
    width:100,
    height:100,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:'center',
    marginBottom:20
  }
  caixa2: {
    backgroundColor: '#555555'
  }
    

})

