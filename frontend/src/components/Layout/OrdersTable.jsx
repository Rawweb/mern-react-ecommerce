const OrdersTable = () => {
  const orders = [
    { id: '#3456_768', date: 'October 17, 2023', status: 'Delivered', price: '$1234.00' },
    { id: '#3456_980', date: 'October 11, 2023', status: 'Delivered', price: '$345.00' },
    { id: '#3456_120', date: 'August 24, 2023', status: 'Delivered', price: '$2345.00' },
    { id: '#3456_030', date: 'August 12, 2023', status: 'Delivered', price: '$845.00' },
  ];

  return (
    <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Orders</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b text-gray-500 dark:text-gray-400">
              <th className="py-3 px-4 font-medium">Number ID</th>
              <th className="py-3 px-4 font-medium">Dates</th>
              <th className="py-3 px-4 font-medium">Status</th>
              <th className="py-3 px-4 font-medium">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            {orders.map((order, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4 px-4">{order.id}</td>
                <td className="py-4 px-4">{order.date}</td>
                <td className="py-4 px-4">{order.status}</td>
                <td className="py-4 px-4">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
