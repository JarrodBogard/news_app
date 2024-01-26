import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/Root";

// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

// components

import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
