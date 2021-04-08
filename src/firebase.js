import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAwBDQclkDnMHLu4l7v3mp1gtNSFmbfr0I",
  authDomain: "remotenoti-406ff.firebaseapp.com",
  databaseURL: "https://remotenoti-406ff.firebaseio.com",
  projectId: "remotenoti-406ff",
  storageBucket: "remotenoti-406ff.appspot.com",
  messagingSenderId: "1030303037890",
  appId: "1:1030303037890:web:8a8453ece75e6e6fe47e5b",
});

export const auth = app.auth();
export default app;
