import React from "react";
import ProductGrid from "./ProductGrid";
import pImage from "../../assets/p-image.png";
import pImage1 from "../../assets/p-image1.png";
import pImage2 from "../../assets/p-image2.png";
import pImage3 from "../../assets/p-image3.png";
import pImage4 from "../../assets/p-image4.png";
import pImage5 from "../../assets/p-image5.png";
import pImage6 from "../../assets/p-image6.png";
import pImage7 from "../../assets/p-image7.png";

const BestSellerSection = () => {
  const placeholderProducts = [
    {
      _id: "1",
      name: "ShelfStand",
      new: true,
      price: 55.99,
      image: pImage,
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Cloth Stand",
      new: false,
      price: 224.99,
      image: pImage1,
      rating: 3,
    },
    {
      _id: "3",
      name: "Bamboo Basket",
      new: false,
      price: 24.99,
      image: pImage2,
      rating: 4,
    },
    {
      _id: "4",
      name: "Console PS4 + Pad",
      new: true,
      price: 512.99,
      image: pImage3,
      rating: 5,
    },
    {
      _id: "5",
      name: "Wireless Headphone",
      new: false,
      price: 65.99,
      image: pImage4,
      rating: 4.5,
    },
    {
      _id: "6",
      name: "Living Room Chair",
      new: false,
      price: 120.99,
      image: pImage5,
      rating: 3.5,
    },
    {
      _id: "7",
      name: "Beiege Table Lamp",
      new: false,
      price: 98.99,
      image: pImage6,
      rating: 5,
    },

    {
      _id: "9",
      name: "Towel Pack",
      new: false,
      price: 52.99,
      image: pImage7,
      rating: 3.5,
    },
  ];

  return (
    <section className="container mx-auto p-6 mt-10">
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold mb-6"> Best Seller</h3>
      </div>
      <ProductGrid products={placeholderProducts} />
    </section>
  );
};

export default BestSellerSection;
