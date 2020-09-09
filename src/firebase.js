import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
   var firebaseConfig = {
      apiKey: "AIzaSyDIAtlKUVPAVf91GrrWL1U8ztAm8mrZH24",
      authDomain: "taguara-digital-portfolio.firebaseapp.com",
      databaseURL: "https://taguara-digital-portfolio.firebaseio.com",
      projectId: "taguara-digital-portfolio",
      storageBucket: "taguara-digital-portfolio.appspot.com",
      messagingSenderId: "768996275583",
      appId: "1:768996275583:web:8988961fadae89602c164a"
  };

// Initialize Firebase
   const fb = firebase.initializeApp(firebaseConfig);
   export const db = fb.firestore()
