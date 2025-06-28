import React from "react";
import featuredImage from "../../assets/featured-image.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeaturedCollectionSection = () => {
  return (
    <section className="mt-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center bg-sec">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <img
            src={featuredImage}
            alt="Featured Image"
            className="w-full h-full object-cover "
          />
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left ">
          <h2 className="xl:text-2xl lg:text-lg text-l font-semibold text-blue-500 mb-3 uppercase">
            Sale up to 35% off
          </h2>
          <h2 className="xl:text-5xl lg:text-4xl text-3xl sm:text-l font-semibold mb-6">
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className="xl:text-2xl lg:text-lg text-l sm:text-l text-gray-600 mb-6">
            It’s more affordable than ever to give every room in your
            home a stylish makeover
          </p>
          <div className="inline-block border-b-2 border-black hover:border-blue-500">
            <Link
              to="/collections/all"
              className=" xl:text-xl lg:text-lg sm:text-l text-l text-black inline-flex items-center gap-3 hover:text-blue-500 transition-all duration-300"
            >
              Shop Now
              <span>
                <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollectionSection;
