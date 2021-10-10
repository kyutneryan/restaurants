import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCG2zPt_7-bfIS7ohOMJA3Tg-YQQEQkSt8",
  authDomain: "restaurants-5c8b1.firebaseapp.com",
  databaseURL: "https://restaurants-5c8b1-default-rtdb.firebaseio.com",
  projectId: "restaurants-5c8b1",
  storageBucket: "restaurants-5c8b1.appspot.com",
  messagingSenderId: "311683107093",
  appId: "1:311683107093:web:bfd8a84bc44232aa67411c",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
