import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}
export default class Login extends Component {
  constructor() {
    super();
    this.buttonOpacity = new Value(1);
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
    ]);
    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 12, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    this.footerY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 5, 0],
      extrapolate: Extrapolate.CLAMP,
    });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={[styles.container]}>
        <Animated.View
          style={[
            styles.logoContainer,
            { transform: [{ translateY: this.bgY }] },
          ]}
        >
          <Image style={styles.logo} source={require("../images/iBook.png")} />
        </Animated.View>
        <Animated.View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            transform: [{ translateY: this.footerY }],
          }}
        >
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={[
                styles.buttonSignUP,
                {
                  opacity: this.buttonOpacity,
                  transform: [{ translateY: this.buttonY }],
                },
              ]}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Sign Up
              </Text>
            </Animated.View>
          </TapGestureHandler>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={[
                styles.buttonSignIn,
                {
                  opacity: this.buttonOpacity,
                  transform: [{ translateY: this.buttonY }],
                },
              ]}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 20 }}
              >
                Sign In
              </Text>
            </Animated.View>
          </TapGestureHandler>
        </Animated.View>
        {/* <View style={styles.footer}>
            <View style={styles.formContainer}>
                <LoginForm/>
            </View>
        </View> */}
      </KeyboardAvoidingView>
    );
  }
}
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
  // formContainer:{
  //     marginBottom: 30
  // },
  // footer:{
  //     backgroundColor: "#fff",
  //     borderTopLeftRadius: 35,
  //     borderTopRightRadius: 35,
  //     paddingVertical: 50,
  //     paddingHorizontal: 30
  // },
  buttonSignUP: {
    backgroundColor: "#191927",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  buttonSignIn: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
    borderWidth: 3,
    borderColor: "#191927",
  },
});
