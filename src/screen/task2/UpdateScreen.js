import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput,TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';
const {width, height} = Dimensions.get('window');

export default class UpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: Moment(),
      data: this.props.navigation.getParam('data'),

      name: '',
      address:'',
      contactNo:''
    };

  
  }

  componentDidMount() {
    this.setState({
      name: this.state.data.name,
      address:this.state.data.address,
      contactNo:this.state.data.contact
    })

  }
  saveData=()=>{

    const { navigation } = this.props;
    console.log("props:" + JSON.stringify(this.props));

    this.state.data.name = this.state.name;
    this.state.data.address=this.state.address;
    this.state.data.contat=this.state.contactNo;
    //this.setState({ data: newData });
    console.log("User details:" + JSON.stringify(this.state.data));
    //navigation.getParam.onUpdateData(this.state.data);
   // navigation.state.params.onUpdateData(this.state.data);
  
   
     navigation.state.params.onUpdateData(this.state.data);
     navigation.goBack();
  
     
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text  style={{
          fontSize:18,
          color:'blue',
          margin:20,
          top:50,
          fontWeight:'bold'
          
        }}>Add Details</Text>
        <View
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop:70 
            
          }}>
          <TextInput
            style={styles.Input}
            value={this.state.name}
            onChangeText={value => this.setState({name: value})}
          />
        </View>
        <View
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop:10 
         
          }}>
          <TextInput
            style={styles.Input}
            numberOfLines={4}
            placeholder={"Address"}
            value={this.state.address}
            onChangeText={value => this.setState({address: value})}
          />
        </View>
        <View
          style={{
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 15,
            marginRight: 15,
            marginTop:10        
          }}>
          <TextInput
          placeholder={"(257)563-7401)"}
            placeholderTextColor="grey"
            style={styles.Input}
            value={this.state.contactNo}
            onChangeText={value => this.setState({contactNo: value})}
          />
        </View>
        
       
        <View style={styles.solidButton}>
        <TouchableOpacity
        onPress={()=>this.saveData()}>
        <Text
        style={{
          color:'white',
          textAlign:'center',
          
        }}>SAVE</Text>
         </TouchableOpacity>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    flex: 1,
  },
  Input: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 15,
    marginTop:20,
    paddingRight: 15,
  },
  solidButton: {
    width: "90%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf:'center',
    bottom: 0,
  
  },
});
