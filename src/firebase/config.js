import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storge'

const firebaseConfig = {
    apiKey: "AIzaSyB8dXwwDI3dpCFQfP7ke9YAPmSOiNIUnAE",
    authDomain: "thedojosite-8f07f.firebaseapp.com",
    projectId: "thedojosite-8f07f",
    storageBucket: "thedojosite-8f07f.appspot.com",
    messagingSenderId: "906213338256",
    appId: "1:906213338256:web:4ffce72f70bf4c911bfc15",
    measurementId: "G-G23VNLLR5E"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  
  //init services 
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //time stamp
  const timestamp= firebase.firestore.Timestamp

  export{ projectFirestore, projectAuth, timestamp, projectStorage}