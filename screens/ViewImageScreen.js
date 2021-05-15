import * as React from "react";
import { ScrollView } from "react-native";
import {
  Component,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Alert,
  Modal,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import db from "../config";
export default class ViewImageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: "",
      search: "",
      searchedName: "",
      searchedPrice: "",
      searchedCategory: "",
      allTransactions: [],
      search: "",
      lastVisibleTransaction: null,
    };
  }
  componentDidMount = async () => {
    const queries = await db.collection("products").get();
    queries.docs.map((doc) => {
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data()],
      });
    });
  };
  render() {
    return (
      <ImageBackground
        style={styles.bg}
        source={require("../assets/bgbg.jpeg")}
      >
        <ScrollView>
          <Text style={styles.title}>View Products</Text>
          <Image
            source={require("../assets/camera.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.inputBox2}
            placeholder="Search for products"
            placeholderTextColor="#61C494"
          />
          <FlatList
            data={this.state.allTransactions}
            renderItem={({ item }) => (
              <View>
                <Text
                  style={[
                    styles.productText,
                    { color: "#61C494" },
                    { fontStyle: "italic" },
                    { fontSize: 26 },
                  ]}
                >
                  Name-
                  {item.inputName}
                </Text>
                <Text style={[styles.productText, { color: "white" }]}>
                  Category-
                  {item.inputCategory}
                </Text>
                <Text style={[styles.productText, { color: "white" }]}>
                  Price-
                  {item.inputPrice}
                </Text>
                <Text
                  style={[
                    styles.productText,
                    { color: "black" },
                    { fontWeight: "bold" },
                    { backgroundColor: "white" },
                  ]}
                >
                  .......................*.......................
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={this.fetchMoreTransactions}
            onEndReachedThreshold={0.7}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  productText: {
    marginLeft: 65,
    backgroundColor: "#1B5788",
    marginTop: 5,
    borderColor: "white",
    fontSize: 23,
    width: 300,
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
    marginTop: 5,
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
});
