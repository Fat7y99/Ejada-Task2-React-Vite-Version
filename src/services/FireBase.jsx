import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1rqgLZ5bLV1-WPVDcCtHcLnSmhzV-PxY",
  authDomain: "car-dashboard-d6648.firebaseapp.com",
  projectId: "car-dashboard-d6648",
  storageBucket: "car-dashboard-d6648.appspot.com",
  messagingSenderId: "730557347676",
  appId: "1:730557347676:web:376be125f93eecf190f399",
  measurementId: "G-5JMFPN447Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a list of cities from your database

const db = getFirestore(app);

const getNames = async () => {
  const usersCol = collection(db, "users");

  const userSnapshot = await getDocs(usersCol);
  // console.log(userSnapshot);

  userSnapshot.docs.map((doc) => console.log(doc.data()));
};

export default getNames;
