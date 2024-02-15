import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

// layouts
import RootLayout from "./components/layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ArticlesPage from "./pages/Articles";
import SavedArticlesPage from "./pages/SavedArticles";

// components
import ErrorBoundary from "./components/UI/ErrorBoundary";
import Signup from "./components/UI/Signup";
import Login from "./components/UI/Login";

// loaders/actions
import {
  initDataLoader,
  searchDataLoader,
  savedDataLoader,
} from "./util/loaders";
import { addToSavedAction, deleteFromSavedAction } from "./util/actions";

import "./index.css";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        setUserId(uid);
      } else {
        setUserId(null);
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: initDataLoader,
          shouldRevalidate: () => false,
        },
        { path: "about", element: <AboutPage /> },
        {
          path: "articles",
          children: [
            {
              // index: true
              path: ":category",
              element: <ArticlesPage />,
              loader: searchDataLoader,
              shouldRevalidate: ({ currentUrl, nextUrl }) => {
                const currentPath = currentUrl.pathname;
                const newPath = nextUrl.pathname;

                return currentPath !== newPath;
              },
            },
          ],
        },
        { path: "add", action: addToSavedAction },
        { path: "delete", action: deleteFromSavedAction },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
        {
          path: "saved",
          element: <SavedArticlesPage />,
          loader: () => savedDataLoader(userId),
          shouldRevalidate: ({ formMethod }) => {
            return formMethod === "delete";
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
