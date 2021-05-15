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
// import ImagePicker from "react-native-image-picker";
// import { showImagePicker } from "react-native-image-picker";
// const options = {
//   title: "Select Avatar",
//   storageOptions: {
//     skipBackup: true,
//     path: "images",
//   },
// };
// ImagePicker.showImagePicker(options, (response) => {
//   console.log("Response = ", response);

//   if (response.didCancel) {
//     console.log("User cancelled image picker");
//   } else if (response.error) {
//     console.log("ImagePicker Error: ", response.error);
//   } else {
//     const uri = response.uri;
//     this.setState({
//       selectedPictureUri: uri,
//     });
//   }
// });
export default class MyAccount extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/bg3.jpg")}>
        <View>
          <Text style={styles.title}>My Account</Text>
          <Image
            source={require("../assets/camera.png")}
            style={styles.imageStyle}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
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
