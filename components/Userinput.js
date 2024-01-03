import { View, Text, TextInput } from 'react-native'

import React from 'react'


const Userinput = (props) => {
return (
    
    <View style={{ marginHorizontal: 24}}>
        <Text style={{fontSize: 14}}>{props.name}</Text>
    <TextInput style={{
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#8e93a1',
        marginBottom: 30
        }}/>
    </View>

)
}

export default Userinput