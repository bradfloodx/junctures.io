const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
// firebase.database.enableLogging(true);

export {
	firebase,
	database
};
