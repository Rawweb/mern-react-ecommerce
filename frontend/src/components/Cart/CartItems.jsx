import React, { useState } from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';
import useCart from '../../hooks/useCart';

const CartItems = () => {
  const { cartProducts, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <div className="flex flex-col justify-between gap-8">
      <div>
        {cartProducts.map(product => (
          <div key={product.productId} className="border-b p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-start gap-4 text-sm md:text-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    Color: {product.color}
                  </p>
                  <div className="flex items-center justify-between border-2 px-2 rounded">
                    <button
                      onClick={() => updateQuantity(product.productId, -1)}
                      className="text-gray-600 text-xl hover:text-blue-500"
                    >
                      -
                    </button>
                    <p className="text-gray-600">{product.quantity}</p>
                    <button
                      onClick={() => updateQuantity(product.productId, 1)}
                      className="text-gray-600 text-xl hover:text-blue-500"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price and Delete */}
              <div className="flex flex-col items-end gap-2 text-sm md:text-lg">
                <h3 className="font-semibold">
                  ${Number(product.price * product.quantity).toFixed(2)}
                </h3>
                <button
                  onClick={() => removeItem(product.productId)}
                  className="h-5 w-5 hover:text-red-500"
                >
                  <RiDeleteBin3Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className=" border-b mt-10 p-4">
        <div className="flex justify-between mb-2">
          <p className="text-gray-700 font-medium">Subtotal</p>
          <h3 className="font-semibold text-gray-700">
            ${cartTotal.toFixed(2)}
          </h3>
        </div>
        <div className="flex justify-between">
          <p className="text-black font-bold text-xl">Total</p>
          <h3 className="font-bold text-lg">${cartTotal.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
