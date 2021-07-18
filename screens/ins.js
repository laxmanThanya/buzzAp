import React from 'react';
import { View,Text } from 'react-native';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center', alignSelf:'center'}}>
                <Text style={{
                    fontSize : 30,
                    fontWeight : 'bold',
                    color:'red',
                   justifyContent:'center',
                   marginTop:300
                }}>INSTAGRAM</Text>
            </View>
        )
    }
}