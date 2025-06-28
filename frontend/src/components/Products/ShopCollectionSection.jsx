import React from "react";
import livingRoom from "../../assets/shop-collection.png";
import bedroom from "../../assets/shop-collection2.png";
import kitchen from "../../assets/shop-collection3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ShopCollectionSection = () => {
  return (
    <section className=" mt-10">
      <div className="container mx-auto p-6">
        {/* Top Head */}
        <div className="md:flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl  font-semibold w-full mb-5 tracking-wide">
            Simply Unique <span className="text-gray-500">/</span> <br />
            Simply Better <span className="text-gray-500">.</span>
          </h1>
          <p className="text-gray-600">
            {" "}
            <span className="font-semibold text-black lg:text-2xl">
              3legant
            </span>{" "}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.{" "}
          </p>
        </div>

        {/* Low Head */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-4 md:grid-rows-2">
          {/* Living Room */}
          <div className="md:col-span-2 md:row-span-2 relative">
            <div className="absolute lg:left-14 lg:top-20 md:left-10 md:top-10 lg:space-y-2 left-14 top-12 md:space-y-0">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg">
                Living Room
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm hover:text-blue-500 transition duration-300 md:border-b-2 border-b  border-b-black hover:border-b-blue-500 lg:text-xl"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6 " />
              </Link>
            </div>
            <img
              src={livingRoom}
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bedroom */}
          <div className="md:col-span-2 relative">
            <div className="absolute lg:left-14 lg:top-20 md:left-10 md:top-10 lg:space-y-2 left-8 bottom-20 md:space-y-0">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg">
                Bedroom
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm hover:text-blue-500 transition duration-300 md:border-b-2 border-b  border-b-black hover:border-b-blue-500 lg:text-xl"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6 " />
              </Link>
            </div>
            <img
              src={bedroom}
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Kitchen */}
          <div className="md:col-span-2 relative">
            <div className="absolute lg:left-14 lg:top-20 md:left-10 md:top-10 lg:space-y-2 left-8 bottom-20 md:space-y-0">
              <h1 className="lg:text-3xl md:text-xl font-semibold text-lg">
                Kitchen
              </h1>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 text-sm hover:text-blue-500 transition duration-300 md:border-b-2 border-b  border-b-black hover:border-b-blue-500 lg:text-xl"
              >
                Shop Now
                <BsArrowRight className="h-4 w-4 md:h-6 md:w-6 " />
              </Link>
            </div>
            <img
              src={kitchen}
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollectionSection;
