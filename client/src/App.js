import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Boardings from "./pages/Boardings";
import Owners from "./pages/Owners";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Boarding from "./pages/Boarding";
import Search from "./pages/Search";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boardings",
        element: <Boardings />,
      },
      {
        path: "/owners",
        element: <Owners />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/boardings/:id",
        element: <Boarding />,
      },
      {
        path: "/boardings/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
