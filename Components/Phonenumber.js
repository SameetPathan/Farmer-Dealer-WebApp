import { View, Text } from 'react-native'
import React from 'react'
import {  TextInput } from "react-native";


const Phonenumber = () => {
  return (
    <View>
      <TextInput
    
    placeholder="Phone Number"
    keyboardType="numeric"
  />
    </View>
  )
}

export default Phonenumber