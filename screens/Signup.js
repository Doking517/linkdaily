import { View, Text} from 'react-native'
import React from 'react'
import Userinput from '../components/Userinput'


const Signup = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, color: '#333', alignSelf: 'center'}}>Signup</Text>
      <Userinput name="NAME"/>
      <Userinput name="EMAIL"/>
      <Userinput name="PASSWORD"/>

    </View>
  )
}

export default Signup