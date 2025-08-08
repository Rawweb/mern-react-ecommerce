import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import OrdersTable from '../components/Layout/OrdersTable';
import AddressSection from '../components/Layout/AddressSection';
import WishlistTable from '../components/Layout/WishlistTable';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUser,
  FiMapPin,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
} from 'react-icons/fi';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <>
            {/* Account Details */}
            <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Display name"
                  className="input-style"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-style"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This will be how your name will be displayed in the account
                section and in reviews.
              </p>
            </div>

            {/* Password Section */}
            <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Password
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="password"
                  placeholder="Old password"
                  className="input-style"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="input-style"
                />
                <input
                  type="password"
                  placeholder="Repeat new password"
                  className="input-style"
                />
              </div>

              <button className="bg-black dark:bg-blue-600 text-white font-semibold py-3 px-6 mt-6 rounded hover:bg-blue-700 transition">
                Save changes
              </button>
            </div>
          </>
        );

      case 'address':
        return <AddressSection />;

      case 'orders':
        return <OrdersTable />;

      case 'wishlist':
        return <WishlistTable />;

      default:
        return null;
    }
  };

  const navItems = [
    { key: 'account', label: 'Account', icon: <FiUser /> },
    { key: 'address', label: 'Address', icon: <FiMapPin /> },
    { key: 'orders', label: 'Orders', icon: <FiShoppingBag /> },
    { key: 'wishlist', label: 'Wishlist', icon: <FiHeart /> },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 py-10">
      <div className="container mx-auto px-5">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          My Account
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center lg:text-left">
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="Profile"
              className="mx-auto w-20 h-20 rounded-full mb-2"
            />
            <h2 className="font-semibold dark:text-white mb-6">
              Kingsley Chibuikem
            </h2>
            <nav className="space-y-2 text-sm font-medium">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`block rounded-md w-full text-left px-2 py-2 transition ${
                    activeTab === item.key
                      ? 'border-b-2 border-gray-700 text-black dark:text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </button>
              ))}
              <button className="block w-full text-left text-red-500 hover:text-red-700 mt-4">
                Log Out
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-3 space-y-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
