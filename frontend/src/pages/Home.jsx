import React from "react";
import Hero from "../components/Layout/Hero";
import ShopCollectionSection from "../components/Products/ShopCollectionSection";
import NewArrivalsSection from "../components/Products/NewArrivalsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCollectionSection />
      <NewArrivalsSection/>
    </div>
  );
};

export default Home;
