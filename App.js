import React, { Component } from 'react';
import { AddTodo } from './components/AddTodo'
import { DrawerMenu} from './components/DrawerMenu'
import { DrawerLayoutAndroid } from 'react-native';

export default class App extends Component{
    
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <DrawerLayoutAndroid drawerWidth={200} drawerPosition="left" renderNavigationView={() => <DrawerMenu/>}>
        <AddTodo/>
      </DrawerLayoutAndroid>
    )
  }
}