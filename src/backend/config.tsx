import firebase from 'firebase';
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyDKPXqmQ5cqUJbYAXVudXvfOTemvmilev8",
        authDomain: "crud-basic-7c932.firebaseapp.com",
        projectId: "crud-basic-7c932",
        storageBucket: "crud-basic-7c932.appspot.com",
        messagingSenderId: "628794686191",
        appId: "1:628794686191:web:bc793e268b508df5fd391a"
    })
}

export default firebase