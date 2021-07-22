import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABxUig2u2m9rgkWCOBMx2clon1hTpBZUk",
    authDomain: "netflix-clone-e4b0a.firebaseapp.com",
    projectId: "netflix-clone-e4b0a",
    storageBucket: "netflix-clone-e4b0a.appspot.com",
    messagingSenderId: "133540293170",
    appId: "1:133540293170:web:a2b792ab239900b36b6a2b"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth};
  export default db;