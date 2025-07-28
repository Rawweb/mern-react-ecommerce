import { useState } from 'react';

const useCart = () => {
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
      quantity: 1,
      image: 'https://picsum.photos/200?random=2',
    },
    {
      productId: 3,
      name: 'Bamboo Basket',
      color: 'Green',
      price: 39.99,
      quantity: 1,
      image: 'https://picsum.photos/200?random=3',
    },
  ]);

  const updateQuantity = (productId, change) => {
    setCartProducts(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = productId => {
    setCartProducts(prev => prev.filter(item => item.productId !== productId));
  };

  const cartTotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return {
    cartProducts,
    updateQuantity,
    removeItem,
    cartTotal,
  };
};

export default useCart;
