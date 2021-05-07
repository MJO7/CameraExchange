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
import ViewImageScreen from "../screens/ViewImageScreen";
export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      isModalVisible: false,
      contact: "",
      confirmPassword: "",
    };
  }
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("ViewImage");
      })
      .catch((error) => {
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  signUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Password Does Not Match. Please Try Again.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            address: this.state.address,
            emailId: this.state.emailId,
          });
          return Alert.alert("User Added Successfully", "Welcome to the App", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };
  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.inputBox2}
            placeholder="First Name"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ firstName: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Last Name"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ lastName: text });
            }}
          />

          <TextInput
            style={styles.inputBox2}
            placeholder="Contact"
            maxLength={10}
            placeholderTextColor="#61C494"
            keyboardType={"number-pad"}
            onChangeText={(text) => {
              this.setState({ contact: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Address"
            multiline={true}
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ address: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Email ID"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Password"
            placeholderTextColor="#61C494"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Confirm Password"
            placeholderTextColor="#61C494"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ confirmPassword: text });
            }}
          />
          <TouchableOpacity
            style={[styles.signInButton, { marginLeft: 0 }]}
            onPress={() => {
              this.signUp(
                this.state.emailId,
                this.state.password,
                this.state.confirmPassword
              );
            }}
          >
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: "#61C494" }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.title2, { marginLeft: 20 }, { marginTop: 10 }]}
          >
            <Text
              style={{
                fontSize: 23,
                fontWeight: "bold",
                color: "#1B5788",
              }}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  render() {
    return (
      <ImageBackground
        style={styles.bg}
        source={require("../assets/bg2copy.jpeg")}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.showModal()}
        </View>
        <View>
          <Text style={styles.title}>Camera Exchange</Text>
          <Image
            source={require("../assets/camera.png")}
            style={styles.imageStyle}
          />

          <TextInput
            style={styles.inputBox1}
            placeholder="Email ID"
            autoCapitalize="none"
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholderTextColor="#61C494"
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity style={[styles.title2, { width: 150 }]}>
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#1B5788" }}
              onPress={() => {
                this.setState({ isModalVisible: true });
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text
              style={{ fontSize: 40, fontWeight: "bold", color: "#61C494" }}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.title2, { marginLeft: 125 }]}>
            <Text
              style={{ fontSize: 23, fontWeight: "bold", color: "#1B5788" }}
            >
              Forgot Password
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
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 140,
    width: 200,
    backgroundColor: "#61C494",
    borderColor: "white",
    color: "#1B5788",
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox1: {
    borderWidth: 1,
    alignSelf: "center",
    borderColor: "white",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    backgroundColor: "#1B5788",
    width: 320,
    borderRadius: 15,
    marginTop: 50,
    fontSize: 22,
    color: "white",
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
    marginLeft: 140,
    marginTop: 20,
    height: 150,
    width: 150,
  },
  text: {
    marginLeft: 10,
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  signInButton: {
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
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
});
