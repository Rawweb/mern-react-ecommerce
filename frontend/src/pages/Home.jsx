import React from 'react';
import Hero from '../components/Layout/Hero';
import ShopCollectionSection from '../components/Products/ShopCollectionSection';
import NewArrivalsSection from '../components/Products/NewArrivalsSection';
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
      <ArticlesSection />
    </div>
  );
};

export default Home;
