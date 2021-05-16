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
import db from "../config";
import firebase from "firebase";
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
  constructor() {
    super();
    this.state = {
      emailId: "",
      firstName: "",
      lastName: "",
      Address: "",
      Contact: "",
      docId: "",
    };
  }
  updateDetals = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      contact: this.state.Contact,
      address: this.state.Address,
    });
    Alert.alert("Details Udpated Successfully");
  };
  getUserDetails = () => {
    var emailId = firebase.auth().currentUser.email;
    db.collection("users")
      .where("emailId", "==", emailId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            Address: data.address,
            Contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };
  componentDidMount() {
    this.getUserDetails();
  }
  render() {
    return (
      <ImageBackground style={styles.bg} source={require("../assets/bg3.jpg")}>
        <View>
          <Text style={styles.title}>My Account</Text>
          <Image
            source={require("../assets/camera.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="First Name"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ firstName: text });
            }}
            value={this.state.firstName}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Last Name"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ lastName: text });
            }}
            value={this.state.lastName}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Contact"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ Contact: text });
            }}
            value={this.state.Contact}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Address"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ Address: text });
            }}
            value={this.state.Address}
          />
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => {
              this.updateDetals();
            }}
          >
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: "#61C494" }}
              i
            >
              Update
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
  updateButton: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 30,
    width: 360,
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
});
