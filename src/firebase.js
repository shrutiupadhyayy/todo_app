// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
    
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDK_gs68O77VITtGUyOeQFoS-IT-id8SEg",
        authDomain: "todo-app-cp-5151e.firebaseapp.com",
        projectId: "todo-app-cp-5151e",
        storageBucket: "todo-app-cp-5151e.appspot.com",
        messagingSenderId: "886088976035",
        appId: "1:886088976035:web:0c1c1db7c3ef47f94ca116",
        measurementId: "G-GMN2VELGP1"
        });

        const db = firebaseApp.firestore();

        export default db;