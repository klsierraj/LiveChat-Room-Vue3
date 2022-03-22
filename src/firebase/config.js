import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDI878q2011XTVd7vNWGNG9J8dgLMTLypE",
    authDomain: "vue-projects-dac4f.firebaseapp.com",
    projectId: "vue-projects-dac4f",
    storageBucket: "vue-projects-dac4f.appspot.com",
    messagingSenderId: "614996321094",
    appId: "1:614996321094:web:471063c80d89354782bb47",
    measurementId: "G-27L89Q7GNH"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export  { projectAuth, projectFirestore, timestamp}
  