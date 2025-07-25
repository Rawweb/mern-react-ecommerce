import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../Common/Breadcrumbs';
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import ProductAccordion from './ProductAccordion';
import { toast } from 'sonner';
import renderStars from './RenderStars';
import SimilarProducts from './SimilarProducts';

const selectedProduct = {
  name: 'Tray Table',
  price: 199.0,
  originalPrice: 400.0,
  description:
    'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
  rating: 4.5,
  reviews: 3,
  category: 'Furniture',
  sku: '1117',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'Red', 'Green', 'Blue'],
  images: [
    {
      url: 'https://picsum.photos/200/300/?random=15',
      altText: 'Tray Table Image 1',
    },
    {
      url: 'https://picsum.photos/200/300/?random=17',
      altText: 'Tray Table Image 2',
    },
    {
      url: 'https://picsum.photos/200/300/?random=19',
      altText: 'Tray Table Image 3',
    },
  ],
};

const similarProducts = [
  {
    _id: '1',
    name: 'Bamboo Basket',
    price: 24.99,
    rating: 4,
    image: [
      { url: 'https://picsum.photos/200/300?random=33', altText: 'Basket' },
    ],
  },
  {
    _id: '2',
    name: 'Wooden Stand',
    price: 99.99,
    rating: 3.3,
    image: [
      { url: 'https://picsum.photos/200/300?random=44', altText: 'Wood Stand' },
    ],
  },
  {
    _id: '3',
    name: 'Tray Table',
    price: 79.99,
    rating: 5,
    image: [
      { url: 'https://picsum.photos/200/300?random=55', altText: 'Tray Table' },
    ],
  },
  {
    _id: '4',
    name: 'Tray Table',
    price: 79.99,
    rating: 3.5,
    image: [
      { url: 'https://picsum.photos/200/300?random=56', altText: 'Tray Table' },
    ],
  },
  {
    _id: '5',
    name: 'Tray Table',
    price: 79.99,
    rating: 2.5,
    image: [
      { url: 'https://picsum.photos/200/300?random=45', altText: 'Tray Table' },
    ],
  },
  {
    _id: '6',
    name: 'Tray Table',
    price: 79.99,
    rating: 4,
    image: [
      { url: 'https://picsum.photos/200/300?random=65', altText: 'Tray Table' },
    ],
  },
];

const ProductDetails = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Product' },
  ];

  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Blue', class: 'bg-blue-500' },
  ];

  const sizeLabels = {
    S: 'Small',
    M: 'Medium',
    L: 'Large',
    XL: 'Extra Large',
  };

  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[currentImageIndex].url);
    }
  }, [currentImageIndex]);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  const handleQuantityChange = action => {
    if (action === 'plus') {
      setQuantity(prev => prev + 1);
    } else if (action === 'minus' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select a size and color before adding to cart.', {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success(`${selectedProduct.name} added to cart successfully!`, {
        duration: 2000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(prev => !prev);
    toast.success(
      !isWishlisted ? 'Added to wishlist' : 'Removed from wishlist',
      { duration: 2000 }
    );
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <Breadcrumbs crumbs={breadcrumbItems} />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Main Product Image */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <div className="relative bg-gray-100 w-full h-[600px] flex items-center justify-center p-6 overflow-hidden">
            <div className="group w-full h-full flex items-center justify-center">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Main Product Image"
                  className="object-contain size-[400px] transition-all duration-300 group-hover:scale-110"
                />
              )}
            </div>
            <button
              type="button"
              onClick={handlePrevImage}
              disabled={currentImageIndex === 0}
              className={`absolute top-1/2 -translate-y-1/2 left-4 size-7 z-10 transition-opacity duration-300 flex items-center justify-center rounded-full
                ${
                  currentImageIndex === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-blue-500 cursor-pointer'
                }`}
              style={{
                pointerEvents: currentImageIndex === 0 ? 'none' : 'auto',
              }}
              tabIndex={currentImageIndex === 0 ? -1 : 0}
              aria-disabled={currentImageIndex === 0}
            >
              <IoArrowBackCircleOutline className="size-7" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              disabled={currentImageIndex === selectedProduct.images.length - 1}
              className={`absolute top-1/2 -translate-y-1/2 right-4 size-7 z-10 transition-opacity duration-300 flex items-center justify-center rounded-full
                ${
                  currentImageIndex === selectedProduct.images.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:text-blue-500 cursor-pointer'
                }`}
              style={{
                pointerEvents:
                  currentImageIndex === selectedProduct.images.length - 1
                    ? 'none'
                    : 'auto',
              }}
              tabIndex={
                currentImageIndex === selectedProduct.images.length - 1 ? -1 : 0
              }
              aria-disabled={
                currentImageIndex === selectedProduct.images.length - 1
              }
            >
              <IoArrowForwardCircleOutline className="size-7" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex w-full gap-1 ">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`lg:size-48 size-32 object-cover border hover:border-black cursor-pointer transition duration-300 ${
                  mainImage === image.url ? 'border-black' : 'border-gray-300'
                }`}
                onClick={() => {
                  setMainImage(image.url);
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            {renderStars(selectedProduct.rating)}
            <span className="text-gray-600 ml-2">
              {selectedProduct.reviews} Reviews
            </span>
          </div>

          <h1 className="text-3xl font-semibold">{selectedProduct.name}</h1>
          <p className="text-gray-500 mt-2 mb-4 font-medium">
            {selectedProduct.description}
          </p>

          <p className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-4">
            ${selectedProduct.price}{' '}
            {selectedProduct.originalPrice && (
              <span className="text-gray-500 line-through font-normal">
                ${selectedProduct.originalPrice}
              </span>
            )}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">Size:</h3>
            <p className="mb-2 text-lg font-medium">
              {sizeLabels[selectedSize] || ''}
            </p>
            <div className="flex items-center gap-2 mb-4">
              {selectedProduct.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? 'bg-black text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              Choose Color:
            </h3>
            <div>
              <p className="mb-2 text-lg font-medium">{selectedColor}</p>
              <div className="mb-4 space-x-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`size-10 rounded-full border ${color.class} ${
                      selectedColor === color.name
                        ? 'border-black'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch lg:items-center gap-4 mb-4">
            <div className="flex items-center justify-between gap-6 bg-gray-100 px-6 py-3 rounded-md">
              <button
                onClick={() => handleQuantityChange('minus')}
                className="text-2xl hover:text-blue-500"
              >
                -
              </button>
              <p className="text-2xl">{quantity}</p>
              <button
                onClick={() => handleQuantityChange('plus')}
                className="text-2xl hover:text-blue-500"
              >
                +
              </button>
            </div>

            <button
              onClick={handleWishlistToggle}
              className={`border border-gray-300 shadow-sm rounded-md px-6 py-3 w-full flex items-center justify-center gap-2 group transition duration-300 ${
                isWishlisted ? 'bg-blue-500' : 'hover:bg-gray-100'
              }`}
            >
              <FaRegHeart
                className={`size-6 transition duration-300 ${
                  isWishlisted ? 'text-white' : ''
                }`}
              />
              <p
                className={`font-semibold text-lg transition duration-300 ${
                  isWishlisted ? 'text-white' : ''
                }`}
              >
                {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
              </p>
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className={`bg-black text-white p-4 rounded w-full mb-4 ${
              isButtonDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'hover:bg-blue-500 transition duration-300'
            }`}
          >
            <p>Add to cart</p>
          </button>

          <table className="w-1/2 text-left mb-4">
            <tbody>
              <tr>
                <td className="text-gray-500 uppercase font-medium py-2">
                  sku
                </td>
                <td className="font-medium py-2">1117</td>
              </tr>
              <tr>
                <td className="text-gray-500 uppercase font-medium py-2">
                  Category
                </td>
                <td className="font-medium py-2">Furniture</td>
              </tr>
            </tbody>
          </table>

          <ProductAccordion />
        </div>
      </div>

      {/* Similar Products Section */}
      <SimilarProducts products={similarProducts} />
    </div>
  );
};

export default ProductDetails;
