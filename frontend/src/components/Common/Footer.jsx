import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuFacebook, LuInstagram } from 'react-icons/lu';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcStripe,
  FaCcApplePay,
  FaCcPaypal,
  FaCcAmex,
} from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-black text-white lg:text-lg">
        <div className="container mx-auto p-6">
          {/* Top */}
          <div className="w-full border-b border-gray-500 py-10">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Logo + Socials */}
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-2xl font-semibold text-white hover:text-gray-300"
                >
                  3legant.
                </Link>
                <p className="text-gray-400 text-sm">
                  More than just a game. <br />
                  It’s a lifestyle.
                </p>
                {/* Social Icons */}
                <div className="flex gap-5 mt-2">
                  <a
                    href="https://www.instagram.com/krawfile?igsh=MWRjMDUxZ2ttMTVqZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuInstagram className="size-6 text-gray-500 hover:text-gray-200 transition duration-300" />
                  </a>

                  <a
                    href="https://m.facebook.com/rawimagix/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuFacebook className="size-6 text-gray-500 hover:text-gray-200 transition duration-300" />
                  </a>
                  <a
                    href="mailto:rawfile.webdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailOutline className="size-6 text-gray-500 hover:text-gray-200 transition duration-300" />
                  </a>
                </div>
              </div>

              {/* Page Links */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-semibold">Page</h3>
                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                  <Link to="/" className="hover:text-gray-200">
                    Home
                  </Link>
                  <Link to="/shop" className="hover:text-gray-200">
                    Shop
                  </Link>
                  <Link to="/product" className="hover:text-gray-200">
                    Product
                  </Link>
                  <Link to="/blog" className="hover:text-gray-200">
                    Blog
                  </Link>
                  <Link to="/contact-us" className="hover:text-gray-200">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Info Links */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-semibold">Info</h3>
                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                  <Link to="/shipping-policy" className="hover:text-gray-200">
                    Shipping Policy
                  </Link>
                  <Link to="/return-refund" className="hover:text-gray-200">
                    Return & Refund
                  </Link>
                  <Link to="/support" className="hover:text-gray-200">
                    Support
                  </Link>
                  <Link to="/faq" className="hover:text-gray-200">
                    FAQ's
                  </Link>
                </div>
              </div>

              {/* Office Info */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-semibold">Office</h3>
                <div className="text-gray-400 text-sm">
                  <p>Address: 123 Main Street, New York</p>
                  <p>Phone: +1 123-456-7890</p>
                  <p>Email: 6oG2E@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 text-sm text-gray-400">
            {/* Left: Copyright & Policies */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
              <p className="text-xs md:text-sm text-gray-400">
                © {new Date().getFullYear()} 3legant. All rights reserved.
              </p>
              <div className="flex gap-1 flex-wrap justify-center">
                <Link className="hover:text-gray-200 transition duration-300">
                  Privacy Policy
                </Link>
                <Link className="hover:text-gray-200 transition duration-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Right: Payment Icons */}
            <div className="flex justify-center gap-2">
              <FaCcVisa className="size-8 sm:size-9 hover:text-gray-300 transition" />
              <FaCcMastercard className="size-8 sm:size-9 hover:text-gray-300 transition" />
              <FaCcStripe className="size-8 sm:size-9 hover:text-gray-300 transition" />
              <FaCcPaypal className="size-8 sm:size-9 hover:text-gray-300 transition" />
              <FaCcApplePay className="size-8 sm:size-9 hover:text-gray-300 transition" />
              <FaCcAmex className="size-8 sm:size-9 hover:text-gray-300 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
