import React, { useState } from 'react';
import { toast } from 'sonner';

const AddToCartButton = ({ product, className = '' }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      toast.success(`${product.name} added to cart successfully!`, {
        duration: 2000,
      });
      setIsAdding(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded-lg w-full font-medium tracking-wide transition duration-300 ${
        isAdding
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-blue-500 dark:hover:bg-blue-600'
      } ${className}`}
    >
      {isAdding ? 'Adding...' : 'Add to cart'}
    </button>
  );
};

export default AddToCartButton;
