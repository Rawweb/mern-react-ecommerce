import React, { useState } from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartItems = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      name: 'Tray Table',
      color: 'Red',
      price: 29.99,
      quantity: 1,
      image: 'https://picsum.photos/200?random=1',
    },
    {
      productId: 2,
      name: 'Tray Lamp',
      color: 'Blue',
      price: 19.99,
      quantity: 2,
      image: 'https://picsum.photos/200?random=2',
    },
    {
      productId: 3,
      name: 'Bamboo Basket',
      color: 'Green',
      price: 39.99,
      quantity: 5,
      image: 'https://picsum.photos/200?random=3',
    },
  ]);

  const updateQuantity = (productId, change) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change), // prevent < 1
            }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartProducts((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  };

 return (
  <div className="flex flex-col justify-between gap-8">
    <div>
      {cartProducts.map((product) => (
        <div key={product.productId} className="border-b">
          <div className="flex justify-between mb-2">
            <div className="flex items-start gap-4 p-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover rounded"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.color}</p>
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
            <div className="flex flex-col items-end gap-2">
              <h3 className="font-semibold">
                ${Number(product.price * product.quantity).toFixed(2)}
              </h3>
              <button
                onClick={() => removeItem(product.productId)}
                className="h-5 w-5 hover:text-red-500 transition duration-300"
              >
                <RiDeleteBin3Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Totals */}
    <div className="p-4 border-b mt-10">
      <div className="flex justify-between mb-2">
        <p className="text-gray-700 font-medium">Subtotal</p>
        <h3 className="font-semibold text-gray-700">
          $
          {cartProducts
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
      <div className="flex justify-between">
        <p className="text-black font-bold text-xl">Total</p>
        <h3 className="font-bold text-lg">
          $
          {cartProducts
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
    </div>
  </div>
);

};

export default CartItems;
