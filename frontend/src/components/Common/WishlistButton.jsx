import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { toast } from 'sonner';

const WishlistButton = ({ productId, className = '', size = 5 }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(prev => !prev);
    toast.success(
      !wishlisted ? 'Added to Wishlist' : 'Removed from Wishlist',
      { duration: 2000 }
    );
  };

  const Icon = wishlisted ? FaHeart : FaRegHeart;

  return (
    <button
      onClick={toggleWishlist}
      aria-label="Toggle Wishlist"
      className={`absolute top-4 -right-10 group-hover:right-4 group-hover:opacity-100 transition-all duration-300 z-10 bg-white p-2 rounded-full shadow-md ${className}`}
    >
      <Icon className={`text-black size-${size}`} />
    </button>
  );
};

export default WishlistButton;
