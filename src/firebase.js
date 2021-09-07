import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDmT2rcaYSuudRXIPaBWqnWT6Z49TCIYEU",
    authDomain: "crud-2ae6d.firebaseapp.com",
    projectId: "crud-2ae6d",
    storageBucket: "crud-2ae6d.appspot.com",
    messagingSenderId: "26649007015",
    appId: "1:26649007015:web:e61898fc35dbc2b0e5dc82"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)