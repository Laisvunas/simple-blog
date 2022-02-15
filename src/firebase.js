import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC-okwwxIP2mOkI3aw-9pNVp_F8OKDS1nM",
  authDomain: "react-blog-demo-23a9b.firebaseapp.com",
  projectId: "react-blog-demo-23a9b",
  storageBucket: "react-blog-demo-23a9b.appspot.com",
  messagingSenderId: "1029801399988",
  appId: "1:1029801399988:web:b86cece01529db7df1e9e1"
};
firebase.initializeApp(config);
export default firebase;