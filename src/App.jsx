import "../src/index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Layout, ProtectedLayout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ResgisterPage from "./pages/ResgisterPage";
import UpdateUser from "./pages/UpdateUser";
import NewPostPage from "./pages/NewPostPage";
import {
  listPageLoader,
  singlePageLoader,
  userPostsLoader,
} from "../utils/loaders";

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
          loader: listPageLoader,
        },
        {
          path: "/properties/:id",
          element: <SinglePropertyPage />,
          loader: singlePageLoader,
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
          loader: userPostsLoader,
          errorElement: (
            <p className="text-2xl text-red-400">Please login first</p>
          ),
        },
        {
          path: "/user/update",
          element: <UpdateUser />,
        },
        {
          path: "/add/post",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
