import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
const PagesNavigator = createStackNavigator({
  Login: {
    screen:LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen:SignInScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen:SignUpScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(PagesNavigator);
