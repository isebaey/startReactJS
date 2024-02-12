import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
