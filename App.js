import React, { Component } from 'react';
import { AddTodo } from './components/AddTodo'

export default class App extends Component{
    
  constructor(props) {
      super(props);
  }

  render() {
    return <AddTodo/>
  }
}