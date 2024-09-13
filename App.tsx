import React from "react";
import {View, Text, StyleSheet } from "react-native";

export default function app () {
  return(
    <View style={styles.conteiner}> 
      <View style = {styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
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
    

})

