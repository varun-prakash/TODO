import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyA-YT7tvCwVvDQ-d3r-7WSqvJs--5U5QnI",
    authDomain: "todo-react-d5361.firebaseapp.com",
    projectId: "todo-react-d5361",
    storageBucket: "todo-react-d5361.appspot.com",
    messagingSenderId: "1039772431290",
    appId: "1:1039772431290:web:51014843fa9ee44b6b2383",
    measurementId: "G-KBHMWCX1HW"
  });

  const db = firebaseapp.firestore();
  
  export default db;