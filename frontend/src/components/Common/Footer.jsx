import React from 'react';
import fImage from '../../assets/footer-image.png';
import fImage1 from '../../assets/footer-image1.png';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuFacebook, LuInstagram, LuMessageCircle } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10">
      {/* Top Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-sec ">
        {/* Left Image - Hidden on small screens */}
        <div className="hidden md:flex justify-center ">
          <img
            src={fImage}
            alt="Footer Image"
            className="xl:size-96 lg:size-56 md:size-48 object-cover"
          />
        </div>

        {/* Newsletter Center Section - Full width on mobile */}
        <div className="basis-full lg:basis-2/4 flex flex-col items-center text-center gap-6 px-4 py-8">
          <div>
            <h1 className="xl:text-5xl lg:text-4xl text-2xl font-semibold lg:mb-2">
              Join Our Newsletter
            </h1>
            <p className="lg:text-lg text-md text-gray-700">
              Sign up for deals, new products and promotions
            </p>
          </div>

          {/* Form */}
          <form className="flex items-center justify-between border-b border-gray-300 py-3 w-full max-w-md shadow-sm">
            <MdOutlineMailOutline className="text-gray-600 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow bg-transparent outline-none text-sm px-2 text-gray-700"
            />
            <Link
              type="submit"
              className="text-sm text-gray-700 hover:text-blue-500 font-medium  transition duration-300"
            >
              Subscribe
            </Link>
          </form>
        </div>

        {/* Right Image - Hidden on small screens */}
        <div className="hidden md:flex justify-center">
          <img
            src={fImage1}
            alt="Footer Image"
            className="xl:size-96 lg:size-56 md:size-48 object-cover"
          />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-gray-500 lg:text-lg">
        <div className="container mx-auto p-6">
          {/* Top */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b  border-gray-500 py-6 mt-10">
            {/* Logo */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Link to={"/"} className="text-xl font-semibold text-white border-b border-gray-500 pb-6 md:border-b-0 md:pb-0">3legant.</Link>
              <p className="text-gray-500 md:border-l border-gray-500 md:pl-4">
                Gift & Decorations Store
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 mt-10 md:mt-0">
              <Link to={"/"} className="hover:text-gray-200 transition duration-300">
                Home
              </Link>
              <Link to={"/shop"} className="hover:text-gray-200 transition duration-300">
                Shop
              </Link>
              <Link className="hover:text-gray-200 transition duration-300">
                Product
              </Link>
              <Link className="hover:text-gray-200 transition duration-300">
                Blog
              </Link>
              <Link className="hover:text-gray-200 transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between py-4 mb-10 text-sm">
            <div
              className="flex flex-col-reverse md:flex-row items-center gap-4 text-center
            "
            >
              <p>
                Copyright © {new Date().getFullYear()}, 3legant. All rights
                reserved.
              </p>
              <div className="space-x-4">
                <Link className="font-semibold text-gray-400 hover:text-gray-50 transition duration-300">
                  Privacy Policy
                </Link>
                <Link className="font-semibold text-gray-400 hover:text-gray-50 transition duration-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center md:gap-4 mt-5 md:mt-0 gap-10">
              <Link>
                <LuInstagram className="size-6 hover:text-gray-200 transition duration-300" />
              </Link>
              <Link>
                <LuFacebook className="size-6 hover:text-gray-200 transition duration-300" />
              </Link>
              <Link>
                <MdOutlineMailOutline className="size-6 hover:text-gray-200 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
