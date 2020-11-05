import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const BookDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        >
          <Image
            style={styles.logo}
            source={require("../images/Profile.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "white",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
          flex: 0.8,
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={40}
          color="black"
          style={styles.iconBack}
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
        <Image style={styles.book} source={require("../images/book.jpg")} />
        <Text style={styles.welcome}>Turning Point</Text>
        <Text style={styles.direct}> By STEEL,DANIELLE</Text>
        <Text style={styles.details}>
          The inspiring sequel to Wings of Fire. Over 3 lakh copies sold. 'It
          was like any other day on the Anna University campus in Chennai.{" "}
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.navigation.navigate("Payment");
          }}
        >
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
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
    width: 70,
    height: 70,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    marginBottom: 50,
    left: 150,
  },
  details: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  direct: {
    fontWeight: "bold",
  },
  book: {
    width: 300,
    height: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  input: {
    height: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    paddingHorizontal: 20,
    borderColor: "#191927",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 300,
    fontSize: 16,
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    color: "black",
  },
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  iconBack: {
    paddingRight: 275,
    marginBottom: 30,
  },
});
export default BookDetailScreen;
