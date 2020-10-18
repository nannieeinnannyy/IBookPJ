import React, { Component } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView} from "react-native";
import LoginForm from "../components/LoginForm";
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/iBook.png")} />
        </View>
        <View style={styles.footer}>
            <View style={styles.formContainer}>
                <LoginForm/>
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130f40",
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
  formContainer:{
      marginBottom: 30
  },
  footer:{
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  }
});
