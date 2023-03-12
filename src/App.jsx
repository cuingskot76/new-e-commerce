import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
import AllProductsSales from "./Components/Hot Sales/AllProductsSales";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/sale-product",
    element: (
      <div>
        <Navbar />
        <AllProductsSales />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
