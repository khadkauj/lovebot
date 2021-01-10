import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnlengfKctoyS1Yqicr1zIskgZZ_6QNzM",
    authDomain: "lovebot-bbba8.firebaseapp.com",
    projectId: "lovebot-bbba8",
    storageBucket: "lovebot-bbba8.appspot.com",
    messagingSenderId: "903884868412",
    appId: "1:903884868412:web:26253c02920efad96a2c39",
    measurementId: "G-DHHTBMZ9E2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore()

  const storage = firebase.storage()
  
  const auth = firebase.auth()
  
  const provider = new firebase.auth.GoogleAuthProvider()

  export {database, auth, provider, storage} 