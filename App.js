import React, { Component, useState } from 'react';
import { AddTodo } from './components/AddTodo'

export default class App extends Component{
    
  constructor(props) {
      super(props);
  }

  render() {
    return <AddTodo/>
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Type what you want to do...</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
