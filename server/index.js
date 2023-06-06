const admin = require("firebase-admin");
const serviceAccount = require("./real-service-account.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const registrationToken =
  "ejbYBTdAZ7M10dR-h4248d:APA91bEqPr2KxCmFA50vNDp5ILx4UYrocGIV9rDJbbuXWH5QQ3At16HpWGyzTUDK2j5JMkBORmeZEETnx3f9MLFgvQu8SrDqBHenx-s8oUny7IunL3mAUAQzwWgCWdE24q_iwQOWXR8_";

const message = {
  data: {
    score: "850",
    time: "2:45",
  },
  token: registrationToken,
};

admin
  .messaging(app)
  .send(message)
  .then((res) => {
    console.log("Success", res);
  })
  .catch((err) => {
    console.log("Error", err);
  });
