import React from 'react';
import { MdClose } from 'react-icons/md';
import CartItems from '../Cart/CartItems';
import { Link, useNavigate } from 'react-router-dom';

const CartDrawer = ({ cartDrawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

const handleCheckout = () => {
  toggleCartDrawer();
  navigate('/checkout');
};


  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        cartDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <button onClick={toggleCartDrawer}>
          <MdClose className="h-6 w-6 hover:text-blue-500 transition duration-300" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        {/* Cart Items */}
        <CartItems />
      </div>

      {/* Checkout Button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300">
          Checkout
        </button>
        <div className=" tracking-tighter pb-3 text-black mt-4 text-center  shadow-sm">
          <Link
            to="/cart"
            className="hover:text-blue-500 border-b border-gray-900 hover:border-blue-500 "
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
