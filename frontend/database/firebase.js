import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt1gBx9mb0IvufpQmKToYw1aW1tIeO2s8",
  authDomain: "projeto-api5sem.firebaseapp.com",
  projectId: "projeto-api5sem",
  storageBucket: "projeto-api5sem.appspot.com",
  messagingSenderId: "172006156973",
  appId: "1:172006156973:web:4cce2f1c6f08107c073424",
  measurementId: "G-H10T7JJ339",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
