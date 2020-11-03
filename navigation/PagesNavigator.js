import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import IndexScreen from "../screens/IndexScreen";
import MyBookScreen from '../screens/MyBookScreen';
import SearchScreen from '../screens/SearchScreen';
const BookTabNavigator = createBottomTabNavigator(
  {
    My_Book: {
      screen: MyBookScreen,
      navigationOptions: {
          tabBarLabel: 'My books',
        },
      },
    Search: {
      screen: SearchScreen,
    },
    Index:{
      screen:IndexScreen,
      navigationOptions:{
        headerShown: false,
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: { fontSize: 18, fontWeight: "bold" },
      style: { backgroundColor: "black" },
    },
  }
);
const CombineNavigator = createStackNavigator(
  {
    Login: {
      screen:LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignIn: {
      screen:SignInScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUp: {
      screen:SignUpScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Tabs: {
      screen:BookTabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
  }
);


export default createAppContainer(CombineNavigator);
