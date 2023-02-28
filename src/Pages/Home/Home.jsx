import React from "react";
import Hero from "../../Components/Hero";
import HotSales from "../../Components/Hot Sales/HotSales";
import Products from "../../Components/Products/Products";
import Viewed from "../../Components/Recenly Viewed/Viewed";

const Home = () => {
  return (
    <div className="m-4">
      <Hero />
      <HotSales />
      <Viewed />
      <Products />
    </div>
  );
};

export default Home;
