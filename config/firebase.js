var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBGVFow_S-12dxMwSlIUt_9sV7hW1iMgD4",
    authDomain: "bc-22-events-register.firebaseapp.com",
    databaseURL: "https://bc-22-events-register.firebaseio.com",
    projectId: "bc-22-events-register",
    storageBucket: "bc-22-events-register.appspot.com",
    messagingSenderId: "489636464688"
  };


module.exports = firebase.initializeApp(config);