import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
const BookItem = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.categoryHeader}>Philosopy</Text>
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
        </ScrollView>
      </View>

      <Text style={styles.categoryHeader}>Sport</Text>
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image
              style={styles.frontBook}
              source={require("../images/book.jpg")}
            />
            <Text style={styles.Title}>Turning Point</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  categoryHeader: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    paddingLeft: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "nowrap",
    alignItems: "baseline",
  },
  itemContainer: {
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "black",
    marginLeft: 15,
    marginBottom: 15,
  },
  frontBook: {
    flex: 1,
    width: 200,
    height: 250,
    resizeMode: "contain",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 15,
  },
  Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  bodyContainer: {
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    flexGrow: 1,
  },
});
export default BookItem;