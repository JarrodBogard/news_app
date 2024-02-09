import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./components/layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ArticlesPage from "./pages/Articles";

// components

// loaders/actions
import {
  initArticlesLoader,
  searchArticlesLoader,
  savedArticlesLoader,
} from "./util/loaders";
import { addToSavedAction, deleteFromSavedAction } from "./util/actions";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: initArticlesLoader,
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
              loader: searchArticlesLoader,
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
        {
          path: "saved",
          element: <ArticlesPage />,
          loader: savedArticlesLoader,
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
