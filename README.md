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

## (2) Send message to devices subscribed to a topic

- On `client` app
  - Like above steps, we need to get registration token and sent to our server
- On `server` app
  - Use the registration token for subscribe to a topic (one-time process)
    - (NOTE) We can also unsubscribe a registration token from a topic
  - Then we send the message using the topic
    - (NOTE) We can send to multiple topics by using `condition`

## (3) Send message to a list of registration token

- On `client` app
  - Like above steps, we need to get registration token and sent to our server
- On `server` app
  - Use the list of registration token, and send message use multicast

### Limitation

- You can subscribe or unsubscribe up to 1,000 devices in a single request. If you provide an array with over 1,000 registration tokens, the request will fail with a messaging/invalid-argument error.
- Topic messages are optimized for throughput rather than latency. For fast, secure delivery to single devices or small groups of devices, target messages to registration tokens, not topics.