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
import ArticlePage from "./pages/Article";

// components

// loaders/actions
import { initArticlesLoader, searchBarArticlesLoader } from "./util/loaders";

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
              index: true,
              element: <ArticlesPage />,
              loader: searchBarArticlesLoader,
              shouldRevalidate: ({ currentUrl, nextUrl }) => {
                const oldQuery = currentUrl.searchParams.get("query");
                const newQuery = nextUrl.searchParams.get("query");

                return oldQuery !== newQuery;
              },
            },
            { index: ":articleId", element: <ArticlePage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
