import React, { useState } from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';
import useCart from '../../hooks/useCart';

const CartItems = () => {
  const { cartProducts, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <div className="flex flex-col justify-between gap-8">
      <div>
        {cartProducts.map(product => (
          <div
            key={product.productId}
            className="border-b p-4 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-start gap-4 text-sm md:text-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded border border-gray-700 dark:border dark:border-gray-100"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Color: {product.color}
                  </p>
                  <div className="flex items-center justify-between border-2 px-2 rounded dark:border-gray-700">
                    <button
                      onClick={() => updateQuantity(product.productId, -1)}
                      className="text-gray-600 text-xl hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      -
                    </button>
                    <p className="text-gray-600 dark:text-gray-300">
                      {product.quantity}
                    </p>
                    <button
                      onClick={() => updateQuantity(product.productId, 1)}
                      className="text-gray-600 text-xl hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price and Delete */}
              <div className="flex flex-col items-end gap-2 text-sm md:text-lg">
                <h3 className="font-semibold dark:text-white">
                  ${Number(product.price * product.quantity).toFixed(2)}
                </h3>
                <button
                  onClick={() => removeItem(product.productId)}
                  className="h-5 w-5 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                >
                  <RiDeleteBin3Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-b mt-10 p-4 dark:border-gray-700">
        <div className="flex justify-between mb-2">
          <p className="text-gray-700 font-medium dark:text-gray-300">
            Subtotal
          </p>
          <h3 className="font-semibold text-gray-700 dark:text-white">
            ${cartTotal.toFixed(2)}
          </h3>
        </div>
        <div className="flex justify-between">
          <p className="text-black font-bold text-xl dark:text-white">Total</p>
          <h3 className="font-bold text-lg dark:text-white">
            ${cartTotal.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
