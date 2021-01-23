import React, {Component} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet,View} from 'react-native';
import ListItem from '../../component/ListItem';
export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [
        {
          id: 1,
          name: 'somuel morrison',
          address: 'pune-411002',
          contact: '020-6758(5874)',
        },
        {
          id: 2,
          name: 'somuel morrison',
          address: 'pune-411002',
          contact: '020-6758(5874)',
        },
        {
          id: 3,
          name: 'somuel morrison',
          address: 'pune-411002',
          contact: '020-6758(5874)',
        },
        {
          id: 4,
          name: 'somuel morrison',
          address: 'pune-411002',
          contact: '020-6758(5874)',
        },
      ],
     // onUpdateData: this.onUpdateData.bind()

    };
  }

  componentDidMount() {}

  
  onUpdateData = details => {
    const {dataList}=this.state;

    dataList.map(item=>{
        if(item.id===details.id)
        {
           item=details;
        }
    })
    this.setState({
        dataList
    })
    console.log("User details task2:" + JSON.stringify(details));
  };

  onItemClick=(data)=>{

    const { navigation } = this.props;
    navigation.navigate("updateScreen", {
       data: data, 
      onUpdateData: details => this.onUpdateData(details)
    });
  

  }

  renderListRow = item => {
    return <ListItem item={item} 
    onPress={() => this.onItemClick(item)}/>;
  };

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={this.state.dataList}
          renderItem={({item, index}) => this.renderListRow(item, index)}
          onEndThreshold={1}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={Styles.loginBtn}>
          <Text style={{fontSize: 24, color: 'white', textAlign: 'center'}}>
            +
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  loginBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf:'flex-end',
    right:10,
    margin:10,
    bottom: 0,
  },
});
