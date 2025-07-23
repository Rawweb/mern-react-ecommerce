import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineArrowRight, MdOutlineArrowLeft } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import renderStars from './RenderStars';
import { Link } from 'react-router-dom';
// import pImage from '../../assets/p-image.png';
// import pImage1 from '../../assets/p-image1.png';
// import pImage2 from '../../assets/p-image2.png';
// import pImage3 from '../../assets/p-image3.png';
// import pImage4 from '../../assets/p-image4.png';
// import pImage5 from '../../assets/p-image5.png';
// import pImage6 from '../../assets/p-image6.png';
// import pImage7 from '../../assets/p-image7.png';

const NewArrivalsSection = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: '1',
      name: 'ShelfStand',
      new: true,
      price: 55.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=1',
          altText: 'ShelfStand Image',
        },
      ],
      rating: 4.5,
    },
    {
      _id: '2',
      name: 'Cloth Stand',
      new: false,
      price: 224.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=2',
          altText: 'Cloth Stand Image',
        },
      ],
      rating: 3,
    },
    {
      _id: '3',
      name: 'Bamboo Basket',
      new: false,
      price: 24.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=3',
          altText: 'Stylish Jacket Image',
        },
      ],
      rating: 4,
    },
    {
      _id: '4',
      name: 'Console PS4 + Pad',
      new: true,
      price: 512.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=4',
          altText: 'Bamboo Basket Image',
        },
      ],
      rating: 5,
    },
    {
      _id: '5',
      name: 'Wireless Headphone',
      new: false,
      price: 65.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=5',
          altText: 'Wireless Headphone Image',
        },
      ],
      rating: 4.5,
    },
    {
      _id: '6',
      name: 'Living Room Chair',
      new: false,
      price: 120.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=6',
          altText: 'Living Room Chai Image',
        },
      ],
      rating: 3.5,
    },
    {
      _id: '7',
      name: 'Beiege Table Lamp',
      new: false,
      price: 98.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=7',
          altText: 'Beiege Table Lamp Image',
        },
      ],
      rating: 2,
    },
    {
      _id: '8',
      name: 'Towel Pack',
      new: false,
      price: 52.99,
      image: [
        {
          url: 'https://picsum.photos/200/300/?random=8',
          altText: 'Towel Pack Image',
        },
      ],
      rating: 3.7,
    },
  ];

  const handleMouseDown = e => {
    e.preventDefault(); // stop browser from dragging images/links
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = e => {
    if (!isDragging) return;

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // Adjust the multiplier for speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = direction => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateScrollButtons, 250); // delay to let scroll finish
  };

  //   Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth - leftScroll > container.clientWidth + 1;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
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
    <section className=" mt-10 ">
      <div className="container mx-auto p-6 relative">
        {/* Top Head */}
        <div className="flex justify-between items-center">
          <div className="text-3xl md:text-4xl font-semibold">
            <h1>New Arrival</h1>
          </div>
          {/* Scroll Buttons */}
          <div className="absolute right-0 top-7 flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`${
                canScrollLeft
                  ? 'hover:scale-110  hover:text-blue-500 active:scale-125 transition-transform duration-200'
                  : 'text-gray-400 cursor-not-allowed'
              }`}
            >
              <MdOutlineArrowLeft className="size-10" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`${
                canScrollRight
                  ? 'hover:scale-110 hover:text-blue-500 active:scale-125 transition-transform duration-200'
                  : 'text-gray-400 cursor-not-allowed'
              }`}
            >
              <MdOutlineArrowRight className="size-10" />
            </button>
          </div>
        </div>

        {/* Product List */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 mt-6 overflow-x-scroll scrollbar-blue pb-6 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {newArrivals.map(product => (
            <div key={product._id} className="w-[280px] flex-shrink-0">
              {/* Product Card */}
              <div className="h-auto overflow-hidden flex flex-col relative bg-sec p-6 transition-all group duration-300">
                {/* Badge and Heart */}
                <div className="flex justify-between items-center">
                  <h3
                    className={`py-1 px-2 rounded-md text-sm absolute top-4 left-4 ${
                      product.new ? 'bg-blue-500 text-white shadow-md' : ''
                    }`}
                  >
                    {product.new && 'New'}
                  </h3>
                  <button className="absolute top-4 -right-10 group-hover:right-4 group-hover:opacity-100 transition-all duration-300 z-10 bg-white p-2 rounded-full shadow-md">
                    <FaRegHeart className="size-5" />
                  </button>
                </div>

                {/* Product Image */}
                <Link to={`/product/${product._id}`} className="flex-grow">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image[0]?.url}
                      alt={product.image[0]?.url}
                      draggable={false}
                      className="py-8 object-contain size-72 transition-transform duration-500 group-hover:scale-110 rounded-lg"
                    />
                  </div>
                </Link>

                {/* Add to Cart */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 z-10 w-full px-6">
                  <button className="bg-black text-white py-2 px-4 rounded-lg w-full font-medium tracking-wide hover:bg-blue-500 transition duration-300">
                    <p>Add to cart</p>
                  </button>
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
      </div>
    </section>
  );
};

export default NewArrivalsSection;
