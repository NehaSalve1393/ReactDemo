import React, {Component} from 'react';
import {View,Text 
    } from 'react-native';

export default class Task3 extends Component {
  constructor(props) {
    super(props);
    this.max=100;
    this.min=1;
     this.state={
       prevNo:0,
       curNo:0
     }
  
   this.getrandomNo=this.getrandomNo.bind(this);

  }

  componentDidMount() {
    setTimeout(this.getrandomNo(),2000);

  }

  

  getrandomNo=()=>{
    this.state.prevNo=this.curNo;
    //let no=setTimeout()
    this.setState({
      curNo:Math.floor((Math.random()*100)+1)
    },()=>{()=>this.getNo()})
    
  }

  getNo=()=>{
    if(this.state.prevNo<this.state.curNo)
    console.log("Number..."+JSON.stringify(this.state.curNo))
  }


  
  render() {
    return (
      <View>
     <Text>{this.state.curNo}</Text>
      </View>
    );
  }
}
