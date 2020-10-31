import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

const SignInScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/iBook.png")} />
      </View>
      <StatusBar barStyle="light-content" />
      <Text style={styles.welcome}>Welcome</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="rgba(19, 15, 64,0.5)"
        returnKeyType="next"
        autoCapitalize="none"
        // onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(19, 15, 64,0.5)"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        // ref={(input) => this.passwordInput = input}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191927",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  input: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    paddingHorizontal: 20,
    borderColor: "#191927",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  buttonContainer: {
    backgroundColor: "#191927",
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
export default SignInScreen;
