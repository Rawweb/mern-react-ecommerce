import React, { useState } from 'react';
import { toast } from 'sonner';

const AddToCartButton = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      toast.success(`${product.name} added to cart successfully!`, {
        duration: 2000,
      });
      setIsAdding(false);
    }, 1000); // Simulated delay
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`bg-black text-white py-2 px-4 rounded-lg w-full font-medium tracking-wide transition duration-300 ${
        isAdding ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
      }`}
    >
      {isAdding ? 'Adding...' : 'Add to cart'}
    </button>
  );
};

export default AddToCartButton;
