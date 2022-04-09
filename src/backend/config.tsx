import firebase from 'firebase';
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey:  "AIzaSyDKPXqmQ5cqUJbYAXVudXvfOTemvmilev8",
        authDomain:"crud-basic-7c932.firebaseapp.com",
        projectId: "crud-basic-7c932",
        
    })
}

export default firebase