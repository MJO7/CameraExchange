import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import UploadScreen from "../screens/UploadScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import MyAccount from "../screens/MyAccount";
import { Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const AppTabNavigator = createBottomTabNavigator(
  {
    ViewImage: ViewImageScreen,
    Upload: UploadScreen,
    MyAccount: MyAccount,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routeName = navigation.state.routeName;
        if (routeName == "ViewImage") {
          return (
            <MaterialCommunityIcons name="search-web" size={35} color="black" />
          );
        } else if (routeName == "Upload") {
          return (
            <MaterialCommunityIcons name="upload" size={35} color="black" />
          );
        } else if (routeName == "MyAccount") {
          return (
            <MaterialCommunityIcons name="account" size={35} color="black" />
          );
        }
      },
      tabBarOptions: {
        activeTintColor: "green",
        inactiveTintColor: "black",
      },
    }),
  }
);
