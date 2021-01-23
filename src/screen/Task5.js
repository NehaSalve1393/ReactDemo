import React, {Component} from 'react';
import {View,Text 
    } from 'react-native';

export default class Task5 extends Component {
  constructor(props) {
    super(props);
     this.dataArray= [ { name: 'Samuel', age: 23 } , 
        { name: 'Racheal', age: 24 } , 
        { name: 'Norway', age: 76 } , 
        {name: 'Sohel', age: 64 } , 
        { name: 'Crimson', age: 45 } , 
        { name: 'Shaggy', age: 34 } ];
     this.newArray=[];
  }

  componentDidMount() {
   this.gatSortedArray();

  }

  gatSortedArray=()=>{
     {this.dataArray.filter(dataArray => dataArray.age < 60).map(filtereddata => (
        this.newArray.push(JSON.stringify(filtereddata))
      ))} 
      
      {this.dataArray.filter(dataArray => dataArray.name.includes('S')).map(filtereddata => (
        this.newArray.push(JSON.stringify(filtereddata))
      ))}

      console.log("new filter data"+JSON.stringify(this.newArray))

      const removeDuplicates =this.newArray.reduce((result,nextItem) => result.includes(nextItem) ? result : result.concat(nextItem),[]);

  console.log("remove data"+JSON.stringify(removeDuplicates))
  }

  
  render() {
    return (
      <View>
     <Text>task4</Text>
      </View>
    );
  }
}
