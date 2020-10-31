import React, { Component } from 'react'
import { Text, View , TextInput, StyleSheet, TouchableOpacity, StatusBar} from 'react-native'

export default class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.welcome}>Welcome</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        color:"black"
    },
    buttonContainer:{
        backgroundColor: "#191927",
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    buttonText:{
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: 'bold'
    }
});
