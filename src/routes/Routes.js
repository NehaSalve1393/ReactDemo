import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Task3 from '../screen/Task3';
import Task4 from '../screen/Task4';
import Task1 from '../screen/Task1';
import Task5 from '../screen/Task5';
import Task6 from '../screen/Task6';
import Task2 from '../screen/task2/Task2';
import UpdateScreen from '../screen/task2/UpdateScreen';
const MainNavigator = createStackNavigator({
    Task3: { screen: Task3 },
    Task4: { screen: Task4 },
    Task1: { screen: Task1 },
    Task5: { screen: Task5 },
    Task6: { screen: Task6 },
    Task2: { screen: Task2 },
    updateScreen: { screen: UpdateScreen },
},
    {
        initialRouteName: 'Task1',
        defaultNavigationOptions: {
            // header: null
            headerShown: false
        }
    },
);






export default AppContainer = createAppContainer(
    MainNavigator
  );
