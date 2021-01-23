import React, { Component } from 'react';
import {
 TouchableOpacity,
 Text,
 View,
Image
} from 'react-native';

const Button = ({ style,name,icon,textStyle}) => {

    return (
       <TouchableOpacity style={style}>
           <View style={{flexDirection:'row'}}>
           <Text style={textStyle}>{name}</Text>
           <Image
           style={{height:20,width:20}}
           source={icon}
           />
           </View>
           </TouchableOpacity>

    );
};



export default Button;