const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


require('dotenv').config()

const serviceAccount = JSON.parse(process.env.FIREBASE)

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db