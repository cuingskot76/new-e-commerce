import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
