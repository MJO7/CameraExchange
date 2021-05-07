import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import UploadScreen from "../screens/UploadScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import MyAccount from "../screens/MyAccount";
export const AppTabNavigator = createBottomTabNavigator({
  ViewImage: ViewImageScreen,
  Upload: UploadScreen,
  MyAccount: MyAccount,
});
