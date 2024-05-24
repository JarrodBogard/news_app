import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./components/layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ArticlesPage from "./pages/Articles";

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
          shouldRevalidate: () => false, // consider formMethod === "delete"
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

                return currentPath !== newPath; // consider formMethod === "delete"
              },
            },
          ],
        },
        { path: "add", action: addToSavedAction },
        { path: "delete", action: deleteFromSavedAction },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
        {
          path: "saved", // "/saved"
          element: <ArticlesPage />,
          loader: savedDataLoader,
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
