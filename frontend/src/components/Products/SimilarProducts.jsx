// components/Products/SimilarProducts.jsx

import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineArrowRight, MdOutlineArrowLeft } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import renderStars from './RenderStars';
import { Link } from 'react-router-dom';
import WishlistButton from '../Common/WishlistButton';

const SimilarProducts = ({ products = [] }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleMouseDown = e => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = e => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = direction => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 250);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollWidth - leftScroll > container.clientWidth + 1;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-6 px-6">
        <h2 className="text-2xl font-semibold">Similar Products</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`${
              canScrollLeft
                ? 'hover:scale-110 hover:text-blue-500 active:scale-125'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <MdOutlineArrowLeft className="size-7" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`${
              canScrollRight
                ? 'hover:scale-110 hover:text-blue-500 active:scale-125'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            <MdOutlineArrowRight className="size-7" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-6 overflow-x-scroll px-6 scrollbar-blue pb-6 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {products.map(product => (
          <div key={product._id} className="w-[260px] flex-shrink-0">
            <div className="bg-sec p-4 group relative overflow-hidden rounded-lg">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image[0].url}
                  alt={product.image[0].altText}
                  draggable={false}
                  className="object-contain w-full h-60 group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <WishlistButton productId={product._id} />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
