import React from 'react';
import Hero from '../components/Layout/Hero';
import ShopCollectionSection from '../components/Products/ShopCollectionSection';
import NewArrivalsSection from '../components/Products/NewArrivalsSection';
import BestSellerSection from '../components/Products/BestSellerSection';
import FeaturesSection from '../components/Products/FeaturesSection';
import FeaturedCollectionSection from '../components/Products/FeaturedCollectionSection';
import ArticlesSection from '../components/Products/ArticlesSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCollectionSection />
      <NewArrivalsSection />
      <FeaturesSection />

      <FeaturedCollectionSection />
      <BestSellerSection />
      <ArticlesSection />
    </div>
  );
};

export default Home;
