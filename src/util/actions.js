import { json } from "react-router-dom";

export const addToFavoritesAction = async ({ request }) => {
  const formData = await request.formData();
  const articleData = Object.fromEntries(formData);

  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites.json",
    {
      method: "POST",
      body: JSON.stringify(articleData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Unable to save favorite" }, { status: 500 });
  }

  console.log("sent");

  return null;
};
