import React, {Component} from 'react';
import {View,Text,
    StyleSheet 
    } from 'react-native';
import Button from "../component/Button";
import AppImages from '../constant/AppImages';
export default class Task1 extends Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <View>
       <Button style={styles.Button1}
                name={'Edit'}
                icon={AppImages.edit_black}
                textStyle={styles.textStyle} />
       <Button
       style={styles.Button2}
       name={'Edit'}
       textStyle={styles.textStyle}/>
       <Button
       style={styles.Button3}
       name={'Edit'}
       icon={AppImages.edit_white}
       textStyle={styles.textStyle1}/>
       <Button  
       style={styles.Button4}
       name={'Edit'}
       textStyle={styles.textStyle1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      
      flex: 1,
    },
    Button1:{
      margin:10,
      padding:2,
      alignItems:'center',
        width:'40%',
        borderColor:'purple',
        borderWidth:1

    },
    Button2:{
      margin:10,
      padding:2,
      alignItems:'center',
        width:'80%',
        borderColor:'purple',
        borderWidth:1
    },
    Button3:{
      margin:10,
      padding:2,
      alignItems:'center',
        width:'40%',
        backgroundColor:'purple',
        borderWidth:1
    },
    Button4:{
      margin:10,
      padding:2,
      alignItems:'center',
        width:'80%',
        backgroundColor:'purple',
        borderWidth:1
    },
    textStyle:{
        textAlign:'center',
        color:'purple'
    },
    textStyle1:{
        textAlign:'center',
        color:'white'
    }
    
  });