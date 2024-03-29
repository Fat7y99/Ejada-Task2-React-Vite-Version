import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
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

export const addCarsData = async () => {
  const Cars = [
    {
      carName: "Mini Cooper",
      passenger: 4,
      pricePerDay: 200,
      type: "Manual",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-1.svg?alt=media&token=3b665cc8-8279-4b44-93de-e08a22284649",
      isLiked: 0,
    },

    {
      carName: "Porshe 718 Cayman S",
      passenger: 6,
      pricePerDay: 300,
      type: "Automatic",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-2.svg?alt=media&token=6dbcf5f4-38c4-41af-9783-e5cec9c95147",
      isLiked: 0,
    },
    {
      carName: "Porshe 718 Cayman S",
      passenger: 5,
      pricePerDay: 400,
      type: "Manual",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-3.svg?alt=media&token=07631824-860c-4d72-b29c-b9683ff5c694",
      isLiked: 0,
    },
    {
      carName: "Porshe 718 Cayman S",
      passenger: 4,
      pricePerDay: 500,
      type: "Automatic",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-4.svg?alt=media&token=228195cd-ca1a-49e4-995e-fc5225464399",
      isLiked: 0,
    },
    {
      carName: "Porshe 718 Cayman S",
      passenger: 6,
      pricePerDay: 550,
      type: "Manual",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-5.svg?alt=media&token=ef716f61-aaa8-41ee-a492-ad8bf8294ec9",
      isLiked: 0,
    },
  ];

  const carsCollection = collection(db, "cars");
  Cars.map((car) => addDoc(carsCollection, car));
};

export const fetchCars = async () => {
  const carsCollection = collection(db, "cars");
  const carsData = await getDocs(carsCollection);
  const Cars = [];
  carsData.docs.map((car) => {
    Cars.push({ carId: car.id, ...car.data() });
  });
  // console.log(Cars);
  return Cars;
};

export const likeCar = async (id) => {
  const docRef = doc(db, "cars", id);
  updateDoc(docRef, { isLiked: 1 }).then(() => console.log("Yesss"));
};

export const disLikeCar = async (id) => {
  const docRef = doc(db, "cars", id);
  updateDoc(docRef, { isLiked: 0 }).then(() => console.log("Yesss"));
};

// export const addCar = async (id) => {
//   const favsCollection = collection(db, "favs");

//   setDoc(favsCollection, { id });
// };
