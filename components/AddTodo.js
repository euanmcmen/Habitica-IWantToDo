import React, { Component, useState } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ToastAndroid} from 'react-native';

class AddTodo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            addInProgress: false,
            todoText: ""
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <Text style={styles.headerText}>Habitica To-Do</Text>

                <View style={styles.alignedContainer}>
                    <Text style={styles.headerText}></Text>
                    <TextInput style={styles.inputText} placeholder="Type what you want to do."></TextInput>
                    <Button style={styles.addTodoButton} title="Add To-Do" onPress={() => this.addHabiticaTodo()} disabled={this.state.addInProgress}></Button>
                </View>
            </SafeAreaView>
        );
    }

    addHabiticaTodo()
    {
        ToastAndroid.show("Successfully added todo to Habitica!", ToastAndroid.LONG);
        this.setState({addInProgress: true});
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
    },
    headerText:{
        textAlign: 'center',
        marginBottom: 5
    },
    alignedContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal: 30,
    },
    addTodoButton: {
        fontSize: 20,
        height: 30,
        textAlign: 'center'
    },
    inputText:{
        height:100,
        fontSize: 20,
        textAlign: 'center'
    }
});


export { AddTodo }