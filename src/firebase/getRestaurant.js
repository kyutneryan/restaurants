import { ref, onValue } from "firebase/database";
import { db } from ".";

export default async function getRestaurant(id) {
  const starCountRef = ref(db, `restaurants/${id - 1}`);

  return new Promise((resolve) => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
}
