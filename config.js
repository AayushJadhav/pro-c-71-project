import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDScty4qC-zRjDTGMnNSxfG_P3Yjyf6nZ0",
    authDomain: "project-c-71-f13b5.firebaseapp.com",
    projectId: "project-c-71-f13b5",
    storageBucket: "project-c-71-f13b5.appspot.com",
    messagingSenderId: "550881388067",
    appId: "1:550881388067:web:5300970b29b01aafc27396"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
