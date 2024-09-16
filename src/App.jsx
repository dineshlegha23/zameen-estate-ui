import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, ProtectedLayout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ResgisterPage from "./pages/ResgisterPage";
import UpdateUser from "./pages/UpdateUser";

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
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <ResgisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/user/update",
          element: <UpdateUser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
