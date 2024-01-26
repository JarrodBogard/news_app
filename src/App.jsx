import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ArticlesPage from "./pages/Articles";

// components

// loaders/actions
import { articlesLoader } from "./util/loaders";

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: articlesLoader },
        { path: "about", element: <AboutPage /> },
        {
          path: "articles",
          children: [{ index: true, element: <ArticlesPage /> }],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
