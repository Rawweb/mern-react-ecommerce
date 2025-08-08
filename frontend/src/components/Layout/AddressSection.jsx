import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

const AddressSection = () => {
  const [isEditingBilling, setIsEditingBilling] = useState(false);
  const [isEditingShipping, setIsEditingShipping] = useState(false);

  const [billingAddress, setBillingAddress] = useState({
    name: 'Sofia Havertz',
    phone: '+1 234 567 890',
    address: '345 Long Island, New York, United States',
  });

  const [shippingAddress, setShippingAddress] = useState({
    name: 'Sofia Havertz',
    phone: '+1 234 567 890',
    address: '345 Long Island, New York, United States',
  });

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'billing') {
      setBillingAddress(prev => ({ ...prev, [name]: value }));
    } else {
      setShippingAddress(prev => ({ ...prev, [name]: value }));
    }
  };

  const renderAddressForm = (type, data, onSave, onCancel) => (
    <>
      <input
        name="name"
        value={data.name}
        onChange={e => handleInputChange(e, type)}
        className="input-style"
        placeholder="Full Name"
      />
      <input
        name="phone"
        value={data.phone}
        onChange={e => handleInputChange(e, type)}
        className="input-style"
        placeholder="Phone"
      />
      <textarea
        name="address"
        value={data.address}
        onChange={e => handleInputChange(e, type)}
        className="input-style"
        placeholder="Full Address"
        rows={3}
      />
      <div className="flex gap-3 mt-2">
        <button
          onClick={onSave}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </>
  );

  return (
    <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Address</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address */}
        <div className="border rounded-md p-4 bg-white dark:bg-gray-900 relative">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800 dark:text-white">Billing Address</h4>
            {!isEditingBilling && (
              <button
                onClick={() => setIsEditingBilling(true)}
                className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
              >
                <FiEdit2 className="inline-block" />
                Edit
              </button>
            )}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {isEditingBilling ? (
              renderAddressForm(
                'billing',
                billingAddress,
                () => setIsEditingBilling(false),
                () => setIsEditingBilling(false)
              )
            ) : (
              <>
                <p>{billingAddress.name}</p>
                <p>{billingAddress.phone}</p>
                <p>{billingAddress.address}</p>
              </>
            )}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="border rounded-md p-4 bg-white dark:bg-gray-900 relative">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800 dark:text-white">Shipping Address</h4>
            {!isEditingShipping && (
              <button
                onClick={() => setIsEditingShipping(true)}
                className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
              >
                <FiEdit2 className="inline-block" />
                Edit
              </button>
            )}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {isEditingShipping ? (
              renderAddressForm(
                'shipping',
                shippingAddress,
                () => setIsEditingShipping(false),
                () => setIsEditingShipping(false)
              )
            ) : (
              <>
                <p>{shippingAddress.name}</p>
                <p>{shippingAddress.phone}</p>
                <p>{shippingAddress.address}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
