const admin = require("firebase-admin");
const serviceAccount = require("./real-service-account.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const registrationToken =
  "ejbYBTdAZ7M10dR-h4248d:APA91bEqPr2KxCmFA50vNDp5ILx4UYrocGIV9rDJbbuXWH5QQ3At16HpWGyzTUDK2j5JMkBORmeZEETnx3f9MLFgvQu8SrDqBHenx-s8oUny7IunL3mAUAQzwWgCWdE24q_iwQOWXR8_";
const registrationToken2 =
  "di07whAzSpFXeFHycopIba:APA91bEmgb1qQfdhlhGUivaIZpaOsAscxvHVVc95vRrb26wK0Pvwyr-M9WOHqQG8A_T24Bh-eTdCboBVDUQod8sL4mVfBb5RNhaDooDnLa4eG51DmPhDB7IhU2FmuzAlyjncz2dNDq3b";
/**
 * (1) Send by using a registration token
 */
// const message = {
//   data: {
//     score: "850",
//     time: "2:45",
//   },
//   token: registrationToken,
// };

// admin
//   .messaging(app)
//   .send(message)
//   .then((res) => {
//     console.log("Success", res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

/**
 * (2) Send by a topic
 */
// const topic = "football";

// admin
//   .messaging(app)
//   .unsubscribeFromTopic([registrationToken, registrationToken2], topic)
//   .then((res) => {
//     console.log("Successfuly unsubscribed to topic", res);
//   })
//   .catch((err) => {
//     console.log("Error unsubscribed to topic", err);
//   });

// admin
//   .messaging(app)
//   .subscribeToTopic(registrationToken2, topic)
//   .then((res) => {
//     console.log("Successfuly subscribed to topic", res);
//   })
//   .catch((err) => {
//     console.log("Error subscribed to topic", err);
//   });

// const message2 = {
//   data: {
//     score: "900",
//     time: "3:12",
//   },
//   topic: topic,
// };

// admin
//   .messaging(app)
//   .send(message2)
//   .then((res) => {
//     console.log("Topic Message Success", res);
//   })
//   .catch((err) => {
//     console.log("Topic Message Error", err);
//   });

/**
 * (3) Send message to list of registration tokens
 */
const message3 = {
  data: {
    score: "900",
    time: "3:12",
  },
  tokens: [registrationToken, registrationToken2],
};

admin
  .messaging(app)
  .sendEachForMulticast(message3)
  .then((res) => {
    console.log("List RT Message Success", res);
  })
  .catch((err) => {
    console.log("List RT Message Error", err);
  });
