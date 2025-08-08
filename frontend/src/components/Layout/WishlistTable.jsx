import { FaTimes } from 'react-icons/fa';
import AddToCartButton from '../Common/AddToCartButton';

const wishlistItems = [
  {
    id: 1,
    name: 'Tray Table',
    color: 'Black',
    price: '$19.19',
    image: 'https://i.imgur.com/Zb7b7Pl.png', // Replace with your image paths
  },
  {
    id: 2,
    name: 'Sofa',
    color: 'Beige',
    price: '$345',
    image: 'https://i.imgur.com/zJhcCNR.png',
  },
  {
    id: 3,
    name: 'Bamboo basket',
    color: 'Beige',
    price: '$8.80',
    image: 'https://i.imgur.com/U0Xh3Zq.png',
  },
  {
    id: 4,
    name: 'Pillow',
    color: 'Beige',
    price: '$8.80',
    image: 'https://i.imgur.com/hq2wnNG.png',
  },
];

const WishlistTable = () => {
  return (
    <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Wishlist</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 dark:text-gray-400">
            <tr className="border-b">
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-800 dark:text-gray-200">
            {wishlistItems.map(item => (
              <tr key={item.id} className="border-b last:border-0">
                <td className="py-4 px-4 flex items-center gap-4">
                  <button className="text-gray-500 hover:text-red-500">
                    <FaTimes />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Color: {item.color}
                    </p>
                  </div>
                </td>

                <td className="py-4 px-4">{item.price}</td>

                <td className="py-4 px-4">
                  <AddToCartButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistTable;
