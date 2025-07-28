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
import StripeButton from '../Checkout/StripeButton';

const Cart = () => {
  const [step, setStep] = useState(1); // 1 = Cart, 2 = Checkout, 3 = Complete
  const { cartProducts, updateQuantity, removeItem, cartTotal } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponStatus, setCouponStatus] = useState(null); // 'success' | 'error' | null
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('paypal');

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
    <div className="container mx-auto min-h-screen p-6">
      <div className="flex justify-center mt-10">
        <h1 className="text-5xl font-medium mb-5">Cart</h1>
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

            return (
              <div
                key={number}
                className={`flex items-center gap-2 pb-2 sm:pb-4 ${
                  isCurrent || isCompleted ? 'border-b border-gray-700' : ''
                }`}
              >
                {/* Step Circle */}
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {number}
                </div>

                {/* Step Label */}
                <span
                  className={`text-sm md:text-base ${
                    isCompleted
                      ? 'text-green-600 font-medium hidden sm:inline'
                      : isCurrent
                      ? 'text-black font-medium inline'
                      : 'text-gray-400 hidden sm:inline'
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
            <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-16 py-10">
              {/* LEFT: Cart Items Table */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto text-left text-sm">
                    <thead className="border-b border-gray-300 text-gray-500 uppercase tracking-wide">
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
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-medium text-gray-900">
                                  {product.name}
                                </h3>
                                <p className="text-gray-500 text-xs">
                                  Color: {product.color}
                                </p>
                                <button
                                  onClick={() => removeItem(product.productId)}
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
                                className="text-gray-600 hover:text-black font-semibold text-lg"
                              >
                                −
                              </button>
                              <span className="px-2">{product.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(product.productId, 1)
                                }
                                className="text-gray-600 hover:text-black font-semibold text-lg"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="py-4 text-gray-700">
                            ${product.price.toFixed(2)}
                          </td>
                          <td className="py-4 font-semibold text-gray-900">
                            ${(product.quantity * product.price).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* RIGHT: Cart Summary */}
              <div className="w-full lg:w-[22rem] border border-gray-200 rounded-lg p-6 shadow-md h-fit">
                <h1 className="text-lg font-semibold text-gray-600 mb-4 uppercase">
                  Cart Summary
                </h1>

                {/* Shipping Option */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 shadow-sm">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="0"
                        checked={shipping === 0}
                        onChange={() => {
                          setShipping(0);
                          toast.success(' Free Shipping selected');
                        }}
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

                  <div className="flex justify-between items-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 shadow-sm">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="15"
                        checked={shipping === 15}
                        onChange={() => {
                          setShipping(15);
                          toast.success(' Express Shipping selected');
                        }}
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

                  <div className="flex justify-between items-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 shadow-sm">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="21"
                        checked={shipping === 21}
                        onChange={() => {
                          setShipping(21);
                          toast.success(' Pick Up selected');
                        }}
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
                  <div className="flex justify-between text-gray-600">
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
                    setStep(2);
                    toast.info('Proceeding to checkout...');
                  }}
                  className="w-full bg-black text-white py-3 mt-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>

            {/* COUPON SECTION */}
            <div className="mt-10 border border-gray-200 rounded-lg p-6 max-w-2xl shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Have a coupon?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
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
                  className={`px-6 py-3 rounded-md font-semibold text-sm transition duration-300 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 lg:px-16 py-10">
          {/* LEFT: Form Sections */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="input-style"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="input-style sm:col-span-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-style sm:col-span-2"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  className="input-style sm:col-span-2"
                />
                <select className="input-style">
                  <option>Country</option>
                </select>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="input-style"
                />
              </div>
              <div className="mt-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Use a different billing address (optional)
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-2 border px-4 py-3 rounded hover:bg-gray-50">
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
                <label className="flex items-center gap-2 border px-4 py-3 rounded hover:bg-gray-50">
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
              // <StripeRedirectButton amount={cartTotal - discount + shipping} />
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Stripe (Coming Soon)
              </button>
            )}

            {paymentMethod === 'paypal' && (
              <PayPalButton
                totalAmount={cartTotal - discount + shipping}
                onSuccess={details => {
                  setStep(3);
                  toast.success(
                    `Thanks ${details.payer.name.given_name}, your payment was successful!`
                  );
                }}
              />
            )}
          </div>

          {/* RIGHT: Order Summary (Reuse from step 1) */}
          <div className="border rounded-lg p-6 shadow-sm space-y-6 h-fit">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            {/* You can reuse the map for cartProducts like in step 1 */}
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
                  <p className="text-gray-500 text-xs">
                    Color: {product.color}
                  </p>
                  <p className="text-gray-700 text-xs">
                    Qty: {product.quantity}
                  </p>
                </div>
                <div className="font-semibold text-sm">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="border-t pt-4 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
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
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
          <div className="w-full max-w-3xl h-full bg-white border border-gray-200 rounded-xl shadow-sm py-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Thank you! 🎉
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Your order has been received
            </p>

            {/* Product Thumbnails */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {cartProducts.map((product, idx) => (
                <div key={product.productId} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded object-cover border"
                  />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {product.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Info */}
            <div className="text-sm text-left space-y-2 mx-auto max-w-md mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Order code:</span>
                <span className="font-medium text-gray-800">
                  #0123_{Math.floor(Math.random() * 100000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium text-gray-800">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium text-gray-800">
                  ${(cartTotal - discount + shipping).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment method:</span>
                <span className="font-medium text-gray-800 capitalize">
                  {paymentMethod}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Purchase history
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
