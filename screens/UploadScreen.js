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
  Button,
  ImageBackground,
  TextInput,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
export default class UploadScreen extends React.Component {
  state = {
    photo: null,
  };
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  render() {
    const { photo } = this.state;
    return (
      // <ImageBackground style={styles.bg} source={require("../assets/bg.jpeg")}>
      //   <View>
      //     <Text style={styles.title}>Upload a Product</Text>

      //     <Image
      //       source={require("../assets/camera.png")}
      //       style={styles.imageStyle}
      //     />
      //     <TextInput
      //       style={styles.inputBox2}
      //       placeholder="Product name"
      //       placeholderTextColor="#61C494"
      //     />
      //     <TextInput
      //       style={styles.inputBox2}
      //       placeholder="Product Price-$$"
      //       placeholderTextColor="#61C494"
      //     />
      //     <TextInput
      //       style={styles.inputBox2}
      //       placeholder="Category"
      //       placeholderTextColor="#61C494"
      //     />
      //   </View>
      // </ImageBackground>
      // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      //   {photo && (
      //     <Image
      //       source={{ uri: photo.uri }}
      //       style={{ width: 300, height: 300 }}
      //     />
      //   )}
      //   <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      // </View>
      <View>
        <Button style={styles.inputBox2} title="YO a button" />
        <Button
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: "photo",
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                console.log(response);
                this.setState({ resourcePath: response });
              }
            )
          }
          title="Select Image"
        />
      </View>
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
