import React from 'react';
import livingRoom from '../../assets/shop-collection.png';
import bedroom from '../../assets/shop-collection2.png';
import kitchen from '../../assets/shop-collection3.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ShopCollectionSection = () => {
  return (
    <section className="pt-10 dark:bg-gray-900">
      <div className="container mx-auto p-6">
        {/* Top Head */}
        <div className="md:flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold w-full mb-5 tracking-wide text-black dark:text-white">
            Simply Unique{' '}
            <span className="text-gray-500 dark:text-gray-400">/</span> <br />
            Simply Better{' '}
            <span className="text-gray-500 dark:text-gray-400">.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-black dark:text-white lg:text-2xl">
              3legant
            </span>{' '}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </p>
        </div>

        {/* Low Head */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-4 md:grid-rows-2">
          {/* Living Room */}
          <div className="md:col-span-2 md:row-span-2 relative bg-gray-100 dark:bg-gray-800">
            <div className="absolute lg:left-14 lg:top-20 md:left-10 md:top-10 left-14 top-12 lg:space-y-2 md:space-y-0">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg text-black dark:text-white">
                Living Room
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm lg:text-xl hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 md:border-b-2 border-b border-b-black dark:border-b-white hover:border-b-blue-500 dark:hover:border-b-blue-400"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6" />
              </Link>
            </div>
            <img
              src={livingRoom}
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bedroom */}
          <div className="md:col-span-2 flex p-4 items-end bg-gray-100 dark:bg-gray-800">
            <div className="w-1/2 pb-5">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg text-black dark:text-white">
                Bedroom
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm lg:text-xl hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 md:border-b-2 border-b border-b-black dark:border-b-white hover:border-b-blue-500 dark:hover:border-b-blue-400"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6" />
              </Link>
            </div>
            <img
              src={bedroom}
              alt="Bedroom"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>

          {/* Kitchen */}
          <div className="md:col-span-2 flex p-4 items-end bg-gray-100 dark:bg-gray-800">
            <div className="w-1/2 pb-5">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg text-black dark:text-white">
                Kitchen
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm lg:text-xl hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 md:border-b-2 border-b border-b-black dark:border-b-white hover:border-b-blue-500 dark:hover:border-b-blue-400"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6" />
              </Link>
            </div>
            <img
              src={kitchen}
              alt="Bedroom"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollectionSection;
