importScripts(
  "https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCqTrHd-PAlG0p931dKSIRs0m3cXsMm7gg",
  authDomain: "fir-cloud-message-a0b45.firebaseapp.com",
  projectId: "fir-cloud-message-a0b45",
  storageBucket: "fir-cloud-message-a0b45.appspot.com",
  messagingSenderId: "640805060613",
  appId: "1:640805060613:web:9e1ed7fc96500f5c905c6c",
  measurementId: "G-1P7WT3RSJ2",
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

/**
 * Receive message in background
 */
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message received", payload);
});
