import React from 'react';
import { View,Text } from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
            <View style={{justifyContent : 'center', alignSelf : 'center'}}>
                <Text style={{
                    fontSize : 30,
                    fontWeight : 'bold',
                    color:'#0000FF',
                    marginTop:300
                }}>FACEBOOK</Text>

            </View>
        )
    }
}