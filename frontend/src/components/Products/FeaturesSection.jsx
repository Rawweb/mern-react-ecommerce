import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { FaMoneyCheckAlt, FaPhoneVolume } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

const FeaturesSection = () => {
  return (
    <section className="pt-10 dark:bg-gray-900">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-sec dark:bg-gray-800 w-full h-64 p-10 flex flex-col gap-4 items-start justify-center hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-500 group">
            <MdLocalShipping className="text-4xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300" />
            <div>
              <h3 className="font-semibold md:text-xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300">
                Free Shipping
              </h3>
              <p className="text-gray-500 dark:text-gray-300 md:text-lg group-hover:text-white transition-all duration-300">
                Orders over $200
              </p>
            </div>
          </div>

          <div className="bg-sec dark:bg-gray-800 w-full h-64 p-10 flex flex-col gap-4 items-start justify-center group hover:bg-blue-500 dark:hover:bg-blue-600 transition duration-500">
            <FaMoneyCheckAlt className="text-4xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300" />
            <div>
              <h3 className="font-semibold md:text-xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300">
                Money Back
              </h3>
              <p className="text-gray-500 dark:text-gray-300 md:text-lg group-hover:text-white transition-all duration-300">
                30 days guarantee
              </p>
            </div>
          </div>

          <div className="bg-sec dark:bg-gray-800 w-full h-64 p-10 flex flex-col gap-4 items-start justify-center group hover:bg-blue-500 dark:hover:bg-blue-600 transition duration-500">
            <MdLock className="text-4xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300" />
            <div>
              <h3 className="font-semibold md:text-xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300">
                Secure Payment
              </h3>
              <p className="text-gray-500 dark:text-gray-300 md:text-lg group-hover:text-white transition-all duration-300">
                Secure by Stripe
              </p>
            </div>
          </div>

          <div className="bg-sec dark:bg-gray-800 w-full h-64 p-10 flex flex-col gap-4 items-start justify-center group hover:bg-blue-500 dark:hover:bg-blue-600 transition duration-500">
            <FaPhoneVolume className="text-4xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300 -rotate-45" />
            <div>
              <h3 className="font-semibold md:text-xl text-gray-900 dark:text-white group-hover:text-white transition-all duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-500 dark:text-gray-300 md:text-lg group-hover:text-white transition-all duration-300">
                Online 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
