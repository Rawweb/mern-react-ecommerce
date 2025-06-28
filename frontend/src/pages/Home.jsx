import React from "react";
import Hero from "../components/Layout/Hero";
import ShopCollectionSection from "../components/Products/ShopCollectionSection";
import NewArrivalsSection from "../components/Products/NewArrivalsSection";
import BestSeller from "../components/Products/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCollectionSection />
      <NewArrivalsSection/>
      <BestSeller/>   
    </div>
  );
};

export default Home;
