import { ref, update } from "firebase/database";
import { db } from "./index";

export default function updateRestaurant(restaurantId, data) {
  const updates = {};

  if (data.rate) {
    updates[`restaurants/${restaurantId - 1}/rate`] = data.rate;
  }

  if (data.feedback) {
    updates[`restaurants/${restaurantId - 1}/feedback`] = data.feedback;
  }

  return update(ref(db), updates);
}
