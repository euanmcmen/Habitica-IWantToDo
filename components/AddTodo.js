import React, { Component } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, ToastAndroid, Keyboard} from 'react-native';
import Axios from 'axios';
import secrets from '../secrets';

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
                    <TextInput style={styles.inputText} 
                        placeholder="Type what you want to do..." 
                        onChangeText={text => this.setState({todoText: text})}
                        value={this.state.todoText} />

                    <Button style={styles.addTodoButton} title="Add To-Do" onPress={() => this.addHabiticaTodo()} disabled={this.state.addInProgress} />
                </View>
            </SafeAreaView>
        );
    }

    addHabiticaTodo()
    {
        if (this.state.todoText === "")
        {
            ToastAndroid.showWithGravity("Please type what you want to add.", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            return;
        }

        //Disable the button so the user can't re-add the task.
        this.setState({addInProgress: true});
        Keyboard.dismiss();

        this.makeHabiticaHttpRequestAsync()
        .then(() => {
            ToastAndroid.showWithGravity("Successfully added \"" + this.state.todoText + "\" to Habitica!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
            this.setState({todoText: ""});
        })
        .catch(() => {
            ToastAndroid.showWithGravity("Error - Failed to add \"" + this.state.todoText + "\" to Habitica.", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        })
        .finally(() => {
            this.setState({addInProgress: false});
        })
    }

    async makeHabiticaHttpRequestAsync()
    {
        Axios({
            method: "post",
            url: "https://habitica.com/api/v3/tasks/user",
            headers:{
                "x-client": secrets.ApiUserId + "-" + secrets.ApiAppName,
                "x-api-user": secrets.ApiUserId,
                "x-api-key": secrets.ApiKey
            },
            data:{
                text: this.state.todoText,
                type: "todo"
            }
        });
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
        fontSize: 24
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