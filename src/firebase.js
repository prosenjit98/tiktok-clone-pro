import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDnAvOBZeb8cd-ugU1jqjV5TjXMOsypvqE",
  authDomain: "tiktok-clone-pro.firebaseapp.com",
  databaseURL: "https://tiktok-clone-pro.firebaseio.com",
  projectId: "tiktok-clone-pro",
  storageBucket: "tiktok-clone-pro.appspot.com",
  messagingSenderId: "57281933687",
  appId: "1:57281933687:web:7ae8d4de09bcbff7317172",
  measurementId: "G-6175CD2C6D"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

export default db;