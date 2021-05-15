import * as React from "react";
import { Component, View, TouchableOpacity } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  SwitchRouter,
} from "react-navigation";
import { Icon } from "react-native-elements";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { AppTabNavigator } from "./components/AppTabNavigator";
import CustomSidebarMenu from "./components/CustomSidebarMenu";

import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const SwitchN = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(SwitchN);
