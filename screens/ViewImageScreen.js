import * as React from "react";
import {
  Component,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Alert,
  Modal,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";

export default class ViewImageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>View Products</Text>
        <Image
          source={require("../assets/camera.png")}
          style={styles.imageStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 120,
    width: 280,
    color: "#61C494",
    borderColor: "white",
    backgroundColor: "#1B5788",
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 17,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    marginLeft: 2,
    marginTop: -70,
    height: 120,
    width: 120,
  },
  text: {
    fontStyle: "italic",
    color: "#1B5788",
    fontSize: 15,
    backgroundColor: "#61C494",
    width: 280,
    borderColor: "#1B5788",
  },
});
