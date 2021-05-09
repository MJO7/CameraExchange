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
import db from "../config";
import ImagePicker from "react-native-image-picker";
import { launchImageLibrary } from "react-native-image-picker";
export default class UploadScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputPrice: "",
      inputCategory: "",
    };
  }
  uploadProduct = async () => {
    // this.setState({
    //   title: this.state.inputTitle,
    //   author: this.state.inputAuthor,
    //   story: this.state.inputStory,
    // });
    db.collection("products").add({
      inputName: this.state.inputName,
      inputPrice: this.state.inputPrice,
      inputCategory: this.state.inputCategory,
    });
    Alert.alert("Your Product Has Been Uploaded");
  };

  render() {
    const { photo } = this.state;
    return (
      <ImageBackground style={styles.bg} source={require("../assets/bg.jpeg")}>
        <View>
          <Text style={styles.title}>Upload a Product</Text>

          <Image
            source={require("../assets/camera.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Product name"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ inputName: text });
            }}
            value={this.state.inputName}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Product Price-$$"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ inputPrice: text });
            }}
            value={this.state.inputPrice}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Category"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ inputCategory: text });
            }}
            value={this.state.inputCategory}
          />
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={async () => {
              this.uploadProduct();
            }}
          >
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: "#1B5788" }}
              onPress={() => {
                this.uploadProduct();
              }}
            >
              Upload
            </Text>
          </TouchableOpacity>
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
  uploadButton: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 30,
    width: 360,
    color: "#61C494",
    borderColor: "white",
    backgroundColor: "#61C494",
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 17,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
