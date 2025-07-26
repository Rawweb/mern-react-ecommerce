import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import renderStars from './RenderStars';
import WishlistButton from '../Common/WishlistButton';
import AddToCartButton from '../Common/AddToCartButton';


const ProductGrid = ({ products, viewMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product._id} className="w-full">
          {/* Product Card */}
          <div className="h-[350px] overflow-hidden flex flex-col relative bg-sec p-6 transition-all group duration-300">
            {/* Badge and Heart */}
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

            {/* Product Image */}
            <Link to={`/product/${product._id}`} className="flex-grow">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={product.image?.[0]?.url}
                  alt={product.image?.[0]?.altText || product.name}
                  className="p-6 object-contain size-72 transition-transform duration-500 group-hover:scale-110 rounded-lg"
                />
              </div>
            </Link>

            {/* Add to Cart */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 z-10 w-full px-6">
              <AddToCartButton product={product} />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col mt-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <Link to={`/product/${product._id}`}>
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <p className="text-gray-500 font-medium">$ {product.price}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
