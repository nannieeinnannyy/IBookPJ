import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ProfileUser = (props) => {
  console.log("props", props);
  return (
    <View style={styles.bodyContainer}>
      <Ionicons
        name="ios-arrow-back"
        size={40}
        color="black"
        style={styles.iconBack}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.ImageProfile}
          source={require("../images/Profile.jpg")}
        />
        <View style={styles.detail}>
          <Text style={styles.detailText}>Name: Christopher Grant Kirwan</Text>
          <Text style={styles.detailText}>Phone: 0984765583</Text>
          <Text style={styles.detailText}>Email: Superbot99@gmail.com</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bodyContainer: {
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    flexGrow: 1,
  },
  iconBack: {
    paddingLeft: 20,
    marginBottom: 5,
  },
  ImageProfile: {
    width: "50%",
    height: 250,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 80,
    width: 300,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  detail:{
    textAlign: 'left',
    alignContent: "space-between",
    flexDirection: "column",
    paddingVertical: 50,
  },
  detailText:{
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
export default ProfileUser;
