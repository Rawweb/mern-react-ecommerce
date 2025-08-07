import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import renderStars from './RenderStars';
import WishlistButton from '../Common/WishlistButton';
import AddToCartButton from '../Common/AddToCartButton';
import { toast } from 'sonner';

const ProductGrid = ({ products, viewMode }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlistToggle = productId => {
    const wasWishlisted = wishlist.includes(productId);

    setWishlist(prev =>
      wasWishlisted ? prev.filter(id => id !== productId) : [...prev, productId]
    );

    toast.success(wasWishlisted ? 'Removed from wishlist' : 'Added to wishlist', {
      duration: 2000,
    });
  };

  return (
    <div
      className={`grid gap-6 ${
        viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'grid-cols-1 sm:grid-cols-2'
      }`}
    >
      {products.map(product => {
        const isWishlisted = wishlist.includes(product._id);

        return (
          <div key={product._id} className="w-full">
            {viewMode === 'grid' ? (
              <>
                {/* GRID VIEW */}
                <div className="h-[350px] overflow-hidden flex flex-col relative bg-sec p-6 transition-all group duration-300 dark:bg-gray-800">
                  <div className="flex justify-between items-center">
                    <h3
                      className={`py-1 px-2 rounded-md text-sm absolute top-4 left-4 ${
                        product.new ? 'bg-blue-500 text-white shadow-md' : ''
                      }`}
                    >
                      {product.new && 'New'}
                    </h3>
                    <WishlistButton productId={product._id} />
                  </div>

                  <div className="flex-grow">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image?.[0]?.url}
                        alt={product.image?.[0]?.altText || product.name}
                        className="p-6 object-contain size-72 transition-transform duration-500 group-hover:scale-110 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 z-10 w-full px-6">
                    <AddToCartButton product={product} />
                  </div>
                </div>

                <Link to={`/product/${product._id}`}>
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center">{renderStars(product.rating)}</div>
                    <h4 className="font-semibold text-lg dark:text-white">{product.name}</h4>
                    <p className="text-gray-500 font-medium dark:text-gray-300">
                      $ {product.price}
                    </p>
                  </div>
                </Link>
              </>
            ) : (
              <>
                {/* LIST VIEW */}
                <div className="flex gap-4 flex-col sm:flex-row items-center">
                  <div className="bg-sec p-6 transition-all w-full h-72 duration-300 dark:bg-gray-800">
                    <Link
                      to={`/product/${product._id}`}
                      className="w-full sm:w-48 group"
                    >
                      <img
                        src={product.image?.[0]?.url}
                        alt={product.image?.[0]?.altText || product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                  </div>

                  <div className="w-full relative">
                    <div className="flex items-center mb-2">{renderStars(product.rating)}</div>
                    <h4 className="lg:text-lg font-semibold mb-2 dark:text-white">
                      {product.name}
                    </h4>
                    <p className="font-semibold mb-2 text-sm lg:text-base dark:text-white">
                      ${product.price}{' '}
                      {product.originalPrice && (
                        <span className="text-gray-500 dark:text-gray-400 line-through font-normal">
                          ${product.originalPrice}
                        </span>
                      )}
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mb-2 text-sm lg:text-base">
                      {product.description}
                    </p>

                    <AddToCartButton product={product} className="text-sm" />

                    <button
                      onClick={() => handleWishlistToggle(product._id)}
                      className={`text-sm mt-2 w-full flex items-center justify-center gap-1 group transition duration-300 ${
                        isWishlisted ? 'text-blue-500' : 'hover:text-gray-500 dark:hover:text-gray-300'
                      }`}
                    >
                      <FaRegHeart
                        className={`size-4 transition duration-300 ${
                          isWishlisted ? 'text-blue-500' : ''
                        }`}
                      />
                      <p
                        className={`font-medium transition duration-300 ${
                          isWishlisted ? 'text-blue-500' : 'dark:text-gray-200'
                        }`}
                      >
                        {isWishlisted ? 'Added to Wishlist' : 'Wishlist'}
                      </p>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
