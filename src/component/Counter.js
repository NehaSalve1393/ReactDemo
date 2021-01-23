import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
          <View
             style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white',
                alignSelf:'center',
                fontSize:20,
                fontWeight:'bold'
              }}>
      <Text
        style={{
          textAlign: 'center',
          marginTop:35,
          color: 'white',
          fontSize:20,
          fontWeight:'bold'
        }}>
        {count}
      </Text>
      </View>
       <View style={{flexDirection:'row',
    alignSelf:'center'}}>
      <TouchableOpacity
        style={{
          width: '40%',
          height: 40,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          margin:10,
          alignSelf: 'center',
        }}
        onPress={() => setCount(count - 1)}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '40%',
          height: 40,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          margin:10,
          alignSelf: 'center',
        }}
        onPress={() => setCount(count + 1)}>
        <Text
        style={{
            textAlign:'center',
            color:'white'
        }}>Increase</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
