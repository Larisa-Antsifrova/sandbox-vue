import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo7zjTWuqgBGimVPTLCZckTPFyyfIvEiA",
  authDomain: "vuetify-tut-e3d5f.firebaseapp.com",
  projectId: "vuetify-tut-e3d5f",
  storageBucket: "vuetify-tut-e3d5f.appspot.com",
  messagingSenderId: "1042598084354",
  appId: "1:1042598084354:web:dc45da47c53ec19f8c4c1b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
