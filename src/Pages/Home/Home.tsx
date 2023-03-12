import React from "react";
import Hero from "../../Components/Hero";
import HotSales from "../../Components/Hot Sales/HotSales";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import Viewed from "../../Components/Recenly Viewed/Viewed";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="m-4">
        <HotSales />
        <LatestProducts />
        <Viewed />
      </div>
    </>
  );
};

export default Home;
