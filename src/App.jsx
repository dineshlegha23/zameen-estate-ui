import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/properties",
          element: <ListPage />,
        },
        {
          path: "/properties/:id",
          element: <SinglePropertyPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
