import * as React from "react";
import { Component, View, TouchableOpacity } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  SwitchRouter,
} from "react-navigation";
import { Icon } from "react-native-elements";

import { AppTabNavigator } from "./components/AppTabNavigator";

import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const SwitchN = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(SwitchN);
