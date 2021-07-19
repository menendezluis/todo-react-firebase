// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_89-aOMFi7GsBOkLPlh5djsRIGpP9RSE",
    authDomain: "todolist-react-b0781.firebaseapp.com",
    databaseURL: "https://todolist-react-b0781-default-rtdb.firebaseio.com",
    projectId: "todolist-react-b0781",
    storageBucket: "todolist-react-b0781.appspot.com",
    messagingSenderId: "597611628516",
    appId: "1:597611628516:web:280883a36802e65a8d29f1",
    measurementId: "G-TSENTPQMXL"
    
  });
  const db = firebaseApp.firestore();
  
  //export { db };
  export default db;