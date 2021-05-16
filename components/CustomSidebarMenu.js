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
          style={[styles.inputBox2, { width: 260 }]}
          onPress={() => {
            this.props.navigation.navigate("WelcomeScreen");
            firebase.auth().signOut();
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              color: "#61C494",
            }}
          >
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputBox2: {
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "white",
    height: 60,
    backgroundColor: "#1B5788",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    width: 320,
    borderRadius: 15,
    marginTop: 20,
    fontSize: 22,
    color: "white",
  },
});
