import firebase from 'firebase';
import 'firebase/firestore'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey:  "",
        authDomain:"",
        projectId: "",
        
    })
}

export default firebase