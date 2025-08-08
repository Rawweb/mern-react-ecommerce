import React, { useState, useEffect } from 'react';
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb';
import useCart from '../../hooks/useCart';
import { RiDeleteBin3Line, RiCoupon4Line } from 'react-icons/ri';
import { toast, Toaster } from 'sonner';
import PayPalButton from '../Checkout/PayPalButton';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [step, setStep] = useState(1); // 1 = Cart, 2 = Checkout, 3 = Complete
  const { cartProducts, updateQuantity, removeItem, cartTotal } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponStatus, setCouponStatus] = useState(null); // 'success' | 'error' | null
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    street: '',
    country: '',
    city: '',
    state: '',
    zip: '',
  });

  const isFormComplete = Object.values(formData).every(
    field => field.trim() !== ''
  );

  const validCoupons = {
    SAVE10: 0.1, // 10% discount
    WELCOME5: 0.05, // 5%
  };

  const handleApplyCoupon = e => {
    e.preventDefault();

    const upperCode = coupon.trim().toUpperCase();
    if (validCoupons[upperCode]) {
      const discountRate = validCoupons[upperCode];
      setDiscount(cartTotal * discountRate);
      setCouponStatus('success');
      setCoupon(''); //  Clear input field

      //   toast.success('Coupon applied!');
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-semibold text-green-700">Coupon applied!</span>
          <span>
            You saved <b>${(cartTotal * discountRate).toFixed(2)}</b>
          </span>
        </div>
      );
    } else {
      setDiscount(0);
      setCouponStatus('error');
      toast.error(' Invalid coupon code. Please try again.');
    }
  };

  useEffect(() => {
    if (couponStatus === 'success') {
      const upperCode = coupon.trim().toUpperCase();
      const discountRate = validCoupons[upperCode];
      setDiscount(cartTotal * discountRate);
    }
  }, [cartTotal]);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto min-h-screen p-6">
        <div className="flex justify-center mt-10">
          <h1 className="text-5xl font-medium mb-5 dark:text-white">Cart</h1>
        </div>
        {/* Step Indicator */}
        <div className="flex items-center justify-center mt-8 mb-10">
          <div className="flex items-center gap-4 sm:gap-10">
            {[
              { label: 'Shopping cart', number: 1 },
              { label: 'Checkout details', number: 2 },
              { label: 'Order complete', number: 3 },
            ].map(({ label, number }) => {
              const isCompleted = step > number;
              const isCurrent = step === number;
              const isFinalStep = number === 3 && step === 3;

              return (
                <div
                  key={number}
                  className={`flex items-center gap-2 pb-2 sm:pb-4 ${
                    isCompleted || isFinalStep ? 'border-b border-gray-700' : ''
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm dark:text-white ${
                      isCompleted || isFinalStep
                        ? 'bg-green-500 text-white dark:bg-green-500'
                        : isCurrent
                        ? 'bg-black text-white dark:text-black'
                        : 'bg-gray-200 text-gray-400 dark:text-gray-300 dark:bg-gray-400'
                    }`}
                  >
                    {number}
                  </div>

                  {/* Step Label */}
                  <span
                    className={`text-sm md:text-base dark:text-white ${
                      isCompleted || isFinalStep
                        ? 'text-green-600 font-medium hidden sm:inline'
                        : isCurrent
                        ? 'text-black font-medium inline'
                        : 'text-gray-400 hidden sm:inline dark:text-gray-400'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            {/* 1 - Shoping Cart */}
            <div>
              {/* Cart Items */}
              <div className="flex flex-col lg:flex-row gap-10  py-10">
                {/* LEFT: Cart Items Table */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-6 dark:text-white">
                    Your Cart
                  </h2>
                  <div className="overflow-x-auto">
                    {/* Desktop: Table */}
                    <div className="hidden md:block">
                      <table className="min-w-full table-auto text-left text-sm">
                        <thead className="border-b border-gray-300 text-gray-500 dark:text-gray-200 uppercase tracking-wide">
                          <tr>
                            <th className="py-3">Product</th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {cartProducts.map(product => (
                            <tr key={product.productId} className="align-top">
                              <td className="py-4">
                                <div className="flex items-start gap-4">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-12 h-16 object-cover rounded dark:border dark:border-gray-100"
                                  />
                                  <div className="space-y-1">
                                    <h3 className="font-medium text-gray-900 dark:text-white">
                                      {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs dark:text-gray-200">
                                      Color: {product.color}
                                    </p>
                                    <button
                                      onClick={() =>
                                        removeItem(product.productId)
                                      }
                                      className="text-xs text-gray-400 mt-1 hover:text-red-500 flex items-center gap-1"
                                    >
                                      <RiDeleteBin3Line className="text-sm" />{' '}
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </td>

                              <td className="py-4">
                                <div className="flex w-24 items-center justify-between border rounded-md px-2 py-1">
                                  <button
                                    onClick={() =>
                                      updateQuantity(product.productId, -1)
                                    }
                                    className="text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 hover:text-black font-semibold text-lg"
                                  >
                                    −
                                  </button>
                                  <span className="px-2 dark:text-white">
                                    {product.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(product.productId, 1)
                                    }
                                    className="text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 hover:text-black font-semibold text-lg"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>

                              <td className="py-4 text-gray-700 dark:text-gray-200">
                                ${product.price.toFixed(2)}
                              </td>
                              <td className="py-4 font-semibold text-gray-900 dark:text-gray-200">
                                ${(product.quantity * product.price).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile: Cards */}
                    <div className="md:hidden space-y-6">
                      {cartProducts.map(product => (
                        <div
                          key={product.productId}
                          className="flex items-start justify-between gap-5 border-b pb-4"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-24 object-cover rounded dark:border dark:border-gray-300"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">
                                  Color: {product.color}
                                </p>

                                <div className="mt-3 inline-flex items-center border rounded px-2 py-1 gap-3">
                                  <button
                                    onClick={() =>
                                      updateQuantity(product.productId, -1)
                                    }
                                    className="text-gray-500 hover:text-black dark:hover:text-white"
                                  >
                                    −
                                  </button>
                                  <span className="text-sm dark:text-white">
                                    {product.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(product.productId, 1)
                                    }
                                    className="text-gray-500 hover:text-black dark:hover:text-white"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center flex-col">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                  ${product.price.toFixed(2)}
                                </p>

                                <button
                                  onClick={() => removeItem(product.productId)}
                                  className="text-gray-400 hover:text-red-500"
                                  title="Remove"
                                >
                                  &times;
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Cart Summary */}
                <div className="w-full lg:w-[22rem] border border-gray-200 rounded-lg p-6 shadow-md h-fit">
                  <h1 className="text-lg font-semibold text-gray-600 dark:text-gray-200 mb-4 uppercase">
                    Cart Summary
                  </h1>

                  {/* Shipping Option */}
                  <div className="space-y-3">
                    {/* Free Shipping */}
                    <div
                      onClick={() => {
                        setShipping(0);
                        toast.success('Free Shipping selected');
                      }}
                      className={`flex justify-between items-center border px-4 py-3 rounded-md shadow-sm cursor-pointer transition ${
                        shipping === 0
                          ? 'bg-gray-100 border-blue-500 '
                          : 'bg-white border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value="0"
                          checked={shipping === 0}
                          onChange={() => {}}
                          className="mr-2 size-4 accent-blue-500"
                        />
                        <span className="text-sm text-gray-800">
                          Free Shipping
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        $0.00
                      </span>
                    </div>

                    {/* Express Shipping */}
                    <div
                      onClick={() => {
                        setShipping(15);
                        toast.success('Express Shipping selected');
                      }}
                      className={`flex justify-between items-center border px-4 py-3 rounded-md shadow-sm cursor-pointer transition ${
                        shipping === 15
                          ? 'bg-gray-100 border-blue-500'
                          : 'bg-white border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value="15"
                          checked={shipping === 15}
                          onChange={() => {}}
                          className="mr-2 size-4 accent-blue-500"
                        />
                        <span className="text-sm text-gray-800">
                          Express Shipping
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        $15.00
                      </span>
                    </div>

                    {/* Pick Up */}
                    <div
                      onClick={() => {
                        setShipping(21);
                        toast.success('Pick Up selected');
                      }}
                      className={`flex justify-between items-center border px-4 py-3 rounded-md shadow-sm cursor-pointer transition ${
                        shipping === 21
                          ? 'bg-gray-100 border-blue-500'
                          : 'bg-white border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value="21"
                          checked={shipping === 21}
                          onChange={() => {}}
                          className="mr-2 size-4 accent-blue-500"
                        />
                        <span className="text-sm text-gray-800">Pick Up</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        $21.00
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="my-6" />

                  {/* Totals */}
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between text-gray-600 dark:text-gray-200">
                      <p>Subtotal</p>
                      <p>${cartTotal.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between font-bold text-gray-900 text-base">
                      <p>Total</p>
                      <p>${(cartTotal - discount + shipping).toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      toast.info('Proceeding to checkout...');
                      setStep(2);
                    }}
                    disabled={cartProducts.length === 0}
                    className={`w-full bg-black text-white py-3 mt-6 rounded-md font-semibold transition duration-300 dark:border ${
                      cartProducts.length === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-600'
                    }`}
                  >
                    Checkout
                  </button>
                </div>
              </div>

              {/* COUPON SECTION */}
              <div className="mt-10 border border-gray-200 rounded-lg p-6 max-w-2xl shadow-sm">
                <h2 className="text-lg font-medium text-gray-800 mb-4 dark:text-white">
                  Have a coupon?
                </h2>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  Add your code for an instant cart discount
                </p>
                <form
                  onSubmit={handleApplyCoupon}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6"
                >
                  <div className="relative w-full">
                    <RiCoupon4Line className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    <input
                      type="text"
                      value={coupon}
                      onChange={e => {
                        setCoupon(e.target.value);
                        setCouponStatus(null); // ✅ clears success/error message when user types
                      }}
                      placeholder="Coupon Code"
                      className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!coupon}
                    className={`px-6 py-3 rounded-md font-semibold text-sm transition duration-300 dark:border ${
                      coupon
                        ? 'bg-black text-white hover:bg-blue-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className=" pb-4 ">
              <button
                onClick={() => setStep(1)}
                className="text-sm text-black dark:text-white border px-2 py-3 rounded shadow-sm transition duration-300 font-semibold hover:text-blue-500 dark:hover:text-blue-400 uppercase"
              >
                Back to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  py-10">
              {/* LEFT: Form Sections */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="border rounded-lg p-6 shadow-sm ">
                  <h2 className="text-lg font-semibold mb-4 dark:text-white">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="input-style"
                      value={formData.firstName}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="input-style"
                      value={formData.lastName}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="input-style sm:col-span-2"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="input-style sm:col-span-2"
                      value={formData.email}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="border rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 dark:text-white">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="street"
                      placeholder="Street Address"
                      className="input-style sm:col-span-2"
                      value={formData.street}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <select
                      name="country"
                      className="input-style"
                      value={formData.country}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Country</option>
                      <option value="AR">Argentina</option>
                      <option value="AU">Australia</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BE">Belgium</option>
                      <option value="BR">Brazil</option>
                      <option value="CA">Canada</option>
                      <option value="CN">China</option>
                      <option value="EG">Egypt</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="IN">India</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="KE">Kenya</option>
                      <option value="MX">Mexico</option>
                      <option value="NL">Netherlands</option>
                      <option value="NG">Nigeria</option>
                      <option value="PK">Pakistan</option>
                      <option value="PH">Philippines</option>
                      <option value="RU">Russia</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="ZA">South Africa</option>
                      <option value="KR">South Korea</option>
                      <option value="ES">Spain</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                    </select>
                    <input
                      type="text"
                      name="city"
                      placeholder="Town / City"
                      className="input-style"
                      value={formData.city}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      className="input-style"
                      value={formData.state}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="Zip Code"
                      className="input-style"
                      value={formData.zip}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border rounded-lg p-6 shadow-sm dark:text-white">
                  <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 border px-4 py-3 rounded hover:bg-gray-50 dark:hover:text-black">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-blue-500"
                      />
                      Pay with Stripe
                    </label>
                    <label className="flex items-center gap-2 border px-4 py-3 rounded dark:hover:text-black hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                        className="accent-blue-500"
                      />
                      Pay with PayPal
                    </label>
                  </div>
                </div>

                {/* Payment Actions */}
                {paymentMethod === 'card' && (
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Stripe (Coming Soon)
                  </button>
                )}

                {paymentMethod === 'paypal' && (
                  <>
                    <div
                      className={
                        isFormComplete ? '' : 'pointer-events-none opacity-50'
                      }
                    >
                      <PayPalButton
                        amount={cartTotal - discount + shipping}
                        onSuccess={details => {
                          setStep(3);
                          toast.success(
                            `Thanks ${details.payer.name.given_name}, your payment was successful!`
                          );
                        }}
                        onError={err => {
                          console.error('PayPal error:', err);
                          toast.error('Something went wrong with PayPal.');
                        }}
                      />
                    </div>

                    {!isFormComplete && (
                      <p className="text-sm text-red-500 font-medium mt-2">
                        Please fill in all fields before proceeding to payment.
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* RIGHT: Order Summary */}
              <div className="border rounded-lg p-6 shadow-sm space-y-6 h-fit dark:text-white">
                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                {cartProducts.map(product => (
                  <div
                    key={product.productId}
                    className="flex items-center gap-4 text-sm border-b pb-4"
                  >
                    <img
                      src={product.image}
                      className="w-14 h-14 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-gray-500 text-xs dark:text-gray-300">
                        Color: {product.color}
                      </p>
                      <p className="text-gray-700 text-xs dark:text-gray-400">
                        Qty: {product.quantity}
                      </p>
                    </div>
                    <div className="font-semibold text-sm">
                      ${(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600 dark:text-gray-200">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-200">
                    <span>Shipping</span>
                    <span>{shipping > 0 ? `$${shipping}` : 'Free'}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon</span>
                      <span>−${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-base text-gray-900 pt-2">
                    <span>Total</span>
                    <span>${(cartTotal - discount + shipping).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex justify-center items-center min-h-[70vh] px-4">
            <div className="w-full max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 dark:text-green-400 text-center mb-6">
                Thank You for your Order!
              </h2>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 sm:p-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Order ID: 1234
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Order Date: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    Estimated Delivery:{' '}
                    {new Date(Date.now() + 7 * 86400000).toLocaleDateString()}
                  </p>
                </div>

                {/* Order Items */}
                <div className="space-y-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                  {cartProducts.map(product => (
                    <div
                      key={product.productId}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded object-cover border dark:border-gray-600"
                        />
                        <div className="text-sm">
                          <h4 className="font-semibold text-gray-800 dark:text-white">
                            {product.name}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400">
                            {product.color} | M
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${Number(product.price).toFixed(2)}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Qty: {product.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment & Delivery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                      Payment
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">
                      {paymentMethod}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                      Delivery
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Main St
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Anytown, USA, 12345
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-10 text-center">
                  <button
                    onClick={() => {
                      setStep(1);
                      navigate('/shop');
                    }}
                    className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-blue-600 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
