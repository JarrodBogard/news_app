import { json } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
let uid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
});

export const addToSavedAction = async ({ request }) => {
  const formData = await request.formData();
  const articleData = Object.fromEntries(formData);
  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${uid}.json`,
    {
      method: "POST",
      body: JSON.stringify(articleData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Unable to save favorite" }, { status: 500 });
  }
  return null;
};

export const deleteFromSavedAction = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id");

  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${uid}/${id}.json`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Unable to perform request." },
      { status: response.status }
    );
  }
  return null;
};
