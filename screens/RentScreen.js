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
import { Ionicons } from "@expo/vector-icons";
const RentScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.Header}>Payment</Text>
        <Image style={styles.logo} source={require("../images/Profile.jpg")} />
      </View>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "white",
          marginTop: 0,
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
       <Ionicons name="ios-arrow-back" size={40} color="black" style={styles.iconBack}
       onPress={() => {props.navigation.popToTop()}}
       />
       
       <View style={{flex: 1, flexDirection: 'row'}}>
       <Image style={styles.book} source={require("../images/book.jpg")} />
       <View>
        <Text style={styles.direct}>Turning Point</Text>
        <Text style={styles.details}> By STEEL,DANIELLE</Text>
        <Text style={{color: 'red', fontWeight: "bold", marginTop:10,}}>
            Available : 
        <Text style={{color: 'black', fontWeight: "bold"}}>
             10 Days
        </Text> 
        </Text>
        <Text style={{color: 'red', fontWeight: "bold", marginTop:10,}}>
            Price : 
        <Text style={{color: 'black', fontWeight: "bold"}}>
             0.99 $
        </Text> 
        </Text>
        
        </View>
        
        
        </View>
        <Text style={styles.welcome}>Choose payment</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
       <Image style={styles.payment1} source={require("../images/paypal.png")} />
       <View>
       <Image style={styles.payment2} source={require("../images/master.png")} />
        
       
        
        </View>
        
        
        </View>
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>My Books</Text>
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
  Header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    marginTop: 60,
    paddingLeft: 20,
  },
  headerContainer: {
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    marginTop:50,
    marginVertical: 25,
    marginRight: 10,
  },
  
  details: {
    marginTop:20,
    
    marginLeft:0,
    marginRight:0,
    fontWeight: "bold",

  },
  direct: {
      marginTop:20,
    fontWeight: "bold",
    marginRight: 50,
    fontSize: 18,
  },
  book: {
    width: 100,
    height: 150,
    marginBottom:150,
    marginRight: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  payment1 :{
    width: 80,
    height: 80,
    margin: 35,
    marginBottom:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  payment2 :{
    width: 120,
    height: 80,
    margin: 35,
    marginBottom:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom:10,
    
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
    marginBottom:100,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  iconBack: {
    marginTop:70,
    paddingRight: 275,
    marginBottom: 30,
  },
});
export default RentScreen;