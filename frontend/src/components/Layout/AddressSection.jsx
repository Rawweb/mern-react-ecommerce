import { FiEdit2 } from 'react-icons/fi';

const AddressSection = () => {
  return (
    <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Address</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div className="border rounded-md p-4 bg-white dark:bg-gray-900 relative">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800 dark:text-white">Billing Address</h4>
            <button className="flex items-center gap-1 text-sm text-blue-500 hover:underline">
              <FiEdit2 className="inline-block" />
              Edit
            </button>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <p>Sofia Havertz</p>
            <p>+1 234 567 890</p>
            <p>345 Long Island, New York, United States</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="border rounded-md p-4 bg-white dark:bg-gray-900 relative">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800 dark:text-white">Shipping Address</h4>
            <button className="flex items-center gap-1 text-sm text-blue-500 hover:underline">
              <FiEdit2 className="inline-block" />
              Edit
            </button>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <p>Sofia Havertz</p>
            <p>+1 234 567 890</p>
            <p>345 Long Island, New York, United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
