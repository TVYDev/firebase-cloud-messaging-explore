# ☁️ Firebase Cloud Messaging

## To get started:

- Create a a project in Firebase Console
- Create a directory for client and server app (`client`, `server`)
- On `client` app:
  - Install firebase `yarn add firebase`
  - In `main.js`
    - Initialize firebase app with credentials object from console
    - Initialize firebase cloud messaging
- On `server` app:
  - Install firebase-admin `yarn add firebase-admin`
  - Initialize firebase app with service account

## To send message

### (1) Send message to a single device with registration token

- On `client` app
  - in `main.js`
    - call function `getToken()` to get the registration token
    - ideally, send the retrieved registration token to our server for storing
    - define event `onMessage()` to receive message in foreground (while tab of the site is focused)
  - in `firebase-messaging-sw.js`
    - use `importScripts` with Compat edition of the scripts
    - initialize the firebase app
    - define event `onBackgroundMessage()` to receive message in background (when tab of the site is not focused)
- On `server` app
  - in `index.js`
    - use above retrieved registration token to send the message to them

🧪 >> To Test

- Run `client` project
- Run `node index.js` on `server` project to send test message
