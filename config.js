import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCh6ppAUvqOro_5s-MWQO8irmfd0hzQelQ",
  authDomain: "cameraexchange-686e1.firebaseapp.com",
  projectId: "cameraexchange-686e1",
  storageBucket: "cameraexchange-686e1.appspot.com",
  messagingSenderId: "694886129445",
  appId: "1:694886129445:web:a389a2a6f30048e36804cc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
