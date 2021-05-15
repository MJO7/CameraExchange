import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";

export default class CustomSidebarMenu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <View style={{ flex: 0.8, marginTop: 30 }}>
          <DrawerItems {...this.props} />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("WelcomeScreen");
            firebase.auth().signOut();
          }}
        >
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
