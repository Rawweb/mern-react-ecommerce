import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaMoneyCheckAlt, FaPhoneVolume } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <section className=" mt-10">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-sec w-full h-64 p-10 flex flex-col gap-4 items-start justify-center">
            <MdLocalShipping className="text-4xl" />
            <div>
              <h3 className="font-semibold md:text-xl">Free Shipping</h3>
              <p className="text-gray-500 md:text-lg">Orders over $200</p>
            </div>
          </div>

          <div className="bg-sec w-full h-64 p-10 flex flex-col gap-4 items-start justify-center">
            <FaMoneyCheckAlt className="text-4xl " />
            <div>
              <h3 className="font-semibold md:text-xl">Money Back</h3>
              <p className="text-gray-500 md:text-lg">30 days guarantee</p>
            </div>
          </div>

          <div className="bg-sec w-full h-64 p-10 flex flex-col gap-4 items-start justify-center">
            <MdLock className="text-4xl " />
            <div>
              <h3 className="font-semibold md:text-xl">Secure Payment</h3>
              <p className="text-gray-500 md:text-lg">Secure by Stripe</p>
            </div>
          </div>

          <div className="bg-sec w-full h-64 p-10 flex flex-col gap-4 items-start justify-center">
            <FaPhoneVolume className="text-4xl -rotate-45" />
            <div>
              <h3 className="font-semibold md:text-xl">24/7 Support</h3>
              <p className="text-gray-500 md:text-lg">Online 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
