import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { RiMenuFoldLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { SiInstagram, SiFacebook, SiGoogle } from 'react-icons/si';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import DarkModeToggle from './DarkkModeToggle';

const Navbar = () => {
  const [cartDrawerOpen, setcartDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const drawerRef = useRef();

  const toggleCartDrawer = () => setcartDrawerOpen(!cartDrawerOpen);
  const toggleNavDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isNavDrawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsNavDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavDrawerOpen]);

  return (
    <section className="shadow-sm dark:bg-gray-900">
      <nav className="container mx-auto flex justify-between items-center p-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold dark:text-white">
          <Link to="/">3legant.</Link>
        </div>

        {/* Navigation */}
        <div className="space-x-6 hidden md:flex">
          {['/home', '/shop', '/products', '/contact-us'].map(path => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `font-medium uppercase transition duration-300 ${
                  isActive
                    ? 'text-blue-500 border-b border-blue-500'
                    : 'text-gray-900 dark:text-white hover:text-blue-500'
                }`
              }
            >
              {path.replace('/', '').replace('-', ' ')}
            </NavLink>
          ))}
        </div>

        {/* Icons & Actions */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          <Link to="/profile">
            <HiOutlineUserCircle className="h-6 w-6 hover:text-blue-500 transition duration-300 dark:text-white" />
          </Link>

          <button onClick={toggleCartDrawer} className="relative group">
            <LiaShoppingBagSolid className="h-6 w-6 group-hover:text-blue-500 transition duration-300 dark:text-white" />
            <span className="absolute -top-2 -right-2 bg-black text-white dark:bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
              2
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden block">
            <RiMenuFoldLine className="w-6 h-6 hover:text-blue-500 transition duration-300 dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Overlays */}
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

      {isNavDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isNavDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 text-xl dark:text-white">
            <Link className="font-semibold">3legant.</Link>
            <button onClick={toggleNavDrawer}>
              <MdClose className="h-6 w-6 text-gray-700 dark:text-white hover:text-blue-500 transition duration-300" />
            </button>
          </div>

          <div className="mt-6 p-6">
            <SearchBar />
          </div>

          <div className="flex flex-col p-6 mt-4 gap-4 text-sm dark:text-white">
            {['/home', '/shop', '/products', '/contact-us'].map(path => (
              <Link
                key={path}
                to={path}
                onClick={toggleNavDrawer}
                className="border-b dark:border-gray-700 pb-5 uppercase hover:text-blue-500 transition duration-300 shadow-sm font-medium"
              >
                {path.replace('/', '').replace('-', ' ')}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20">
          {['Cart', 'Wishlist'].map(label => (
            <div
              key={label}
              className="flex justify-between items-center p-6 border-b shadow-sm text-sm dark:text-white dark:border-gray-700"
            >
              <Link
                to="#"
                onClick={toggleNavDrawer}
                className="font-medium hover:text-blue-500"
              >
                {label}
              </Link>
              <button
                onClick={toggleNavDrawer}
                className="flex items-center group"
              >
                {label === 'Cart' ? (
                  <LiaShoppingBagSolid className="h-5 w-5 group-hover:text-blue-500 transition" />
                ) : (
                  <FaRegHeart className="h-5 w-5 group-hover:text-blue-500 transition" />
                )}
                <span className="bg-black dark:bg-blue-500 ml-1 text-white rounded-full w-4 h-4 flex items-center justify-center group-hover:bg-blue-600 transition" />
              </button>
            </div>
          ))}

          <div className="mt-4 p-6">
            <button
              onClick={toggleNavDrawer}
              className="bg-black dark:bg-blue-500 text-white py-4 px-6 rounded-md w-full hover:bg-blue-600 transition duration-300"
            >
              <Link to="/login">Sign In</Link>
            </button>

            <div className="flex mt-4 items-center gap-6 dark:text-white">
              {[SiInstagram, SiFacebook, SiGoogle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={toggleNavDrawer}
                  className="hover:text-blue-500 transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
