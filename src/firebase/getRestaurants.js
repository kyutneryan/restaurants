import { ref, onValue } from "firebase/database";
import { db } from ".";

export default async function getRestaurants() {
  const starCountRef = ref(db, "restaurants");

  return new Promise((resolve) => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
}
