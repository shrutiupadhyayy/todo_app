// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
    
const firebaseApp = firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
        });

        const db = firebaseApp.firestore();

        export default db;
