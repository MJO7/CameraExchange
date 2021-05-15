import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { DrawerItems } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSidebarMenu from "./CustomSidebarMenu";
import { createDrawerNavigator } from "react-navigation-drawer";
import MyAccount from "../screens/MyAccount";
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    Profile: { screen: MyAccount },
  },

  { contentComponent: CustomSidebarMenu },
  { initialRouteName: "Home" }
);
