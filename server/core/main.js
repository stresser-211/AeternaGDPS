const admin = require('firebase-admin');
const service_account = require('./service_account_key.json');

admin.initializeApp({
	credential: admin.credential.cert(service_account),
	db_URL: "https://aeterna-211-default-rtdb.europe-west1.firebasedatabase.app/"
});

const db = admin.firestore();

