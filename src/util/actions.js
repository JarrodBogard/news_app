import { json, redirect } from "react-router-dom";

export const addToSavedAction = async ({ request }) => {
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

  return null;
};

export const deleteFromSavedAction = async ({ request }) => {
  console.log("fired delete");
  const formData = await request.formData();
  const id = formData.get("id");

  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${id}.json`,
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
