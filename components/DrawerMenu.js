import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

class DrawerMenu extends Component {
    
    constructor(props) {
        super(props);
    }
  
    render() {
      return (
        <View style={styles.navigationContainer}>
            <Text style={{ margin: 10, fontSize: 15 }}>
                Author:{"\n"}
                Euan McMenemin{"\n"}
                {"\n"}
                Habitica:{"\n"}
                @DressingFrown{"\n"}
                {"\n"}
                Github:{"\n"}
                @euanmcmen{"\n"}
            </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8
      }
});

export { DrawerMenu }