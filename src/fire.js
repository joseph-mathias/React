import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA3XgPxrDEDsQ4OA8RGLgpITFpg0wD6uHI",
    authDomain: "login-53f47.firebaseapp.com",
    projectId: "login-53f47",
    storageBucket: "login-53f47.appspot.com",
    messagingSenderId: "590230715049",
    appId: "1:590230715049:web:85d745d4539a12db2d07b8"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;