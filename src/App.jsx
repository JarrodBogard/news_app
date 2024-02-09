import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

// layouts
import RootLayout from "./components/layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ArticlesPage from "./pages/Articles";

// components

// loaders/actions
import { initArticlesLoader, searchBarArticlesLoader } from "./util/loaders";
import { addToFavoritesAction } from "./util/actions";

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
              loader: searchBarArticlesLoader,
              shouldRevalidate: ({ currentUrl, nextUrl }) => {
                const currentPath = currentUrl.pathname;
                const newPath = nextUrl.pathname;

                return currentPath !== newPath;
              },
            },
            // { path: ":articleId", element: <ArticlePage /> },
          ],
        },
        { path: "add", action: addToFavoritesAction },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
