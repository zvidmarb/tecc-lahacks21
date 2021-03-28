import * as firebase from "firebase";

export function setUpFirebase() {
    let firebaseConfig = {
        apiKey: "AIzaSyAmH9_AEc9akKa0XYDEWA0MGPhCI5fAd3M",
        authDomain: "la-hacks2021.firebaseapp.com",
        projectId: "la-hacks2021",
        storageBucket: "la-hacks2021.appspot.com",
        messagingSenderId: "294988207775",
        appId: "1:294988207775:web:90a68939257b13cc4db4aa",
        measurementId: "G-M68EDCC264"
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};
