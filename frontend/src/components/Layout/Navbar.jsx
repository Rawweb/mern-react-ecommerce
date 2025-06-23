import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { RiMenuFoldLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { SiInstagram, SiFacebook, SiGoogle } from 'react-icons/si';
import SearchBar from './SearchBar';
import { LuSearch } from 'react-icons/lu';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [cartDrawerOpen, setcartDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setcartDrawerOpen(!cartDrawerOpen);
  };

  const toggleNavDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsNavDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavDrawerOpen]);

  return (
    <div className=" shadow-sm">
      <nav className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <Link to="/">3legant.</Link>
        </div>

        {/* Center: Navigation */}
        <div className="space-x-6 hidden md:flex">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-sm font-medium uppercase transition duration-300 ${
                isActive
                  ? 'text-blue-500 border-b border-blue-500'
                  : 'text-gray-900 hover:text-blue-500'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-sm font-medium uppercase transition duration-300 ${
                isActive
                  ? 'text-blue-500 border-b border-blue-500'
                  : 'text-gray-900 hover:text-blue-500'
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm font-medium uppercase transition duration-300 ${
                isActive
                  ? 'text-blue-500 border-b border-blue-500'
                  : 'text-gray-900 hover:text-blue-500'
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `text-sm font-medium uppercase transition duration-300 ${
                isActive
                  ? 'text-blue-500 border-b border-blue-500'
                  : 'text-gray-900 hover:text-blue-500'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <HiOutlineUserCircle className="h-5 w-5 hover:text-blue-500 transition duration-300" />
          </Link>

          {/* Cart Button */}
          <button onClick={toggleCartDrawer} className="relative group">
            <LiaShoppingBagSolid className="h-5 w-5 group-hover:text-blue-500 transition duration-300" />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-blue-500 transition duration-300">
              2
            </span>
          </button>

          {/* Search Button */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Menu Button */}
          <button onClick={toggleNavDrawer} className="md:hidden block">
            <RiMenuFoldLine className="w-5 h-5 hover:text-blue-500 transition duration-300" />
          </button>
        </div>
      </nav>

      {/* Cart */}
      {/* Overlay */}
      {cartDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCartDrawer}
        />
      )}
      <CartDrawer
        cartDrawerOpen={cartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />

      {/* Overlay */}
      {isNavDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavDrawer}
        />
      )}
      {/* Mobile Navigation */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isNavDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top */}
        <div className="mb-20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 text-xl">
            <Link className="font-semibold">3legant.</Link>
            <button onClick={toggleNavDrawer}>
              <MdClose className="h-6 w-6 text-gray-700 hover:text-blue-500 transition duration-300" />
            </button>
          </div>

          {/* Search Bar*/}
          <div className="mt-6 p-6">
            <SearchBar />
          </div>

          {/* Links */}
          <div className="flex flex-col p-6 mt-4 gap-4 text-sm">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="border-b pb-5 uppercase hover:text-blue-500 transition duration-300 shadow-sm font-medium
          "
            >
              Home
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="border-b pb-5 uppercase hover:text-blue-500 transition duration-300 shadow-sm font-medium
          "
            >
              Shop
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="border-b pb-5 uppercase hover:text-blue-500 transition duration-300 shadow-sm font-medium
          "
            >
              Product
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="border-b pb-5 uppercase hover:text-blue-500 transition duration-300 shadow-sm font-medium
          "
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20">
          <div className="flex justify-between items-center p-6 border-b shadow-sm text-sm">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="font-medium hover:text-blue-500"
            >
              Cart
            </Link>
            <button
              onClick={toggleNavDrawer}
              className="flex justify-center items-center relative group"
            >
              <LiaShoppingBagSolid className="h-5 w-5 group-hover:text-blue-500 transition duration-300" />
              <span className="bg-black ml-1 text-white rounded-full w-4 h-4 flex items-center justify-center group-hover:bg-blue-500 transition duration-300">
                2
              </span>
            </button>
          </div>

          <div className="flex justify-between items-center p-6 border-b shadow-sm text-sm">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className=" font-medium hover:text-blue-500"
            >
              Wishlist
            </Link>
            <button
              onClick={toggleNavDrawer}
              className="flex justify-center items-center relative group"
            >
              <FaRegHeart className="h-5 w-5 group-hover:text-blue-500 transition duration-300" />
              <span className="bg-black ml-1 text-white rounded-full w-4 h-4 flex items-center justify-center group-hover:bg-blue-500 transition duration-300">
                2
              </span>
            </button>
          </div>
          <div className="mt-4 p-6">
            <button
              onClick={toggleNavDrawer}
              className="bg-black text-white py-4 px-6 rounded-md w-full hover:bg-blue-500 transition duration-300"
            >
              <Link to="/login">Sign In</Link>
            </button>

            <div className="flex mt-4 items-center gap-6">
              <a
                href="#"
                onClick={toggleNavDrawer}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                onClick={toggleNavDrawer}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                onClick={toggleNavDrawer}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <SiGoogle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
