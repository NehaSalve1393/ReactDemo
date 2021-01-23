import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity

} from 'react-native';


const ListItem = ({ item,onPress }) => {

    return (
        <TouchableOpacity
        onPress={() => onPress()}>
        <View style={{
            margin:10,
            backgroundColor:'white',
            borderRadius:10,
                padding:10
        }}>
         
            <View style={{ flexDirection: 'column' }}>
                <Text style={{color:'purple',
            fontSize:18,
            fontWeight:'bold',
            padding:5}} >{item.name}</Text>
                <Text  style={{color:'grey',
            fontSize:12,
            padding:5}}>{item.address}</Text>
                <Text style={{color:'black',
            padding:5}}>{item.contact}</Text>
            </View>
           
        </View>
        </TouchableOpacity>
    );
};



export default ListItem;