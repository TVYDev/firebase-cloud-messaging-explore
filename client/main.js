import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCqTrHd-PAlG0p931dKSIRs0m3cXsMm7gg",
  authDomain: "fir-cloud-message-a0b45.firebaseapp.com",
  projectId: "fir-cloud-message-a0b45",
  storageBucket: "fir-cloud-message-a0b45.appspot.com",
  messagingSenderId: "640805060613",
  appId: "1:640805060613:web:9e1ed7fc96500f5c905c6c",
  measurementId: "G-1P7WT3RSJ2",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

/**
 * Get registration token
 * Once
 */
getToken(messaging, {
  vapidKey:
    "BIkJueJfA4vNl9GvuCQC4ZfFFtQxcyw1rzww9wODWjovbYSAhQDQveFwtjhDyBn2pvD2eJsqNVTghyitGVtEn5g",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Current Token", currentToken);
    } else {
      console.log("No registration token available");
    }
  })
  .catch((error) => {
    console.log("Error", error);
  });

/**
 * Receive message
 */
onMessage(messaging, (payload) => {
  console.log("Message received", payload);
});
