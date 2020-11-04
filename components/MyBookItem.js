import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const MyBookItem = (props) => {
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
        <View style={styles.itemContainer}>
          <Image
            style={styles.frontBook}
            source={require("../images/book.jpg")}
          />
          <View style={styles.detail}>
            <Text style={styles.Title}>Turning Point</Text>
            <Text style={styles.Available}>Available: 9 day left</Text>
            <TouchableOpacity>
              <View style={styles.SelectContainer}>
                <Text style={styles.Select}>Select</Text>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  color="white"
                  style={{ marginTop: 2 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            style={styles.frontBook}
            source={require("../images/book.jpg")}
          />
          <View style={styles.detail}>
            <Text style={styles.Title}>Turning Point</Text>
            <Text style={styles.Available}>Available: 9 day left</Text>
            <TouchableOpacity>
              <View style={styles.SelectContainer}>
                <Text style={styles.Select}>Select</Text>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  color="white"
                  style={{ marginTop: 2 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: 300,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "black",
    marginLeft: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  frontBook: {
    flex: 0.6,
    width: "100%",
    height: 200,
    resizeMode: "contain",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    borderRadius: 30,
    marginBottom: 15,
  },
  Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
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
  detail: {
    flex: 0.4,
    flexDirection: "column",
    marginLeft: 5,
    marginTop: 60,
  },
  Available: {
    color: "white",
    fontSize: 12,
  },
  Select: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  SelectContainer: {
    marginLeft: 20,
    marginTop: 40,
    flexDirection: "row",
  },
});
export default MyBookItem;
