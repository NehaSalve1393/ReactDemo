import React from 'react';
import {View, StyleSheet,} from 'react-native';
import Counter from '../component/Counter';

export default class Task6 extends React.Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {}
  saveData=()=>{

    console.log("User details:" + "name :"+this.state.name+"\n"+"contact no :"+this.state.contactNo+"\n"+"address :"+this.state.address+"\n"+"date :"+this.state.selectedDate);
  }
  render() {
    return (
     <View style={styles.container}>
         <Counter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    flex: 1,
  },
  
});
