import { json, redirect } from "react-router-dom";

export const addToSavedAction = async ({ request }) => {
  console.log("fired add action");
  const formData = await request.formData();
  const articleData = Object.fromEntries(formData);
  const userId = articleData.userId;

  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${userId}.json`,
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
  console.log("fired delete action");
  const formData = await request.formData();
  const id = formData.get("id");
  const userId = formData.get("userId");

  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${userId}/${id}.json`,
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

  return redirect("/saved");
};
