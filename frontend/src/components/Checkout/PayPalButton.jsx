import React, { useEffect, useRef } from 'react';
import { toast } from 'sonner';

const PayPalButton = ({ totalAmount = 0, onSuccess }) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (!window.paypal) {
      toast.error('PayPal SDK not loaded');
      return;
    }

    if (paypalRef.current) {
      paypalRef.current.innerHTML = '';
    }

    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
        },

        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount.toFixed(2),
                },
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            toast.success(
              `Payment completed by ${details.payer.name.given_name}`
            );
            console.log('Payment Success:', details);

            // ✅ Trigger parent onSuccess handler
            if (onSuccess) {
              onSuccess(details);
            }
          });
        },

        onError: function (err) {
          toast.error('Payment failed. Please try again.');
          console.error('PayPal Error:', err);
        },
      })
      .render(paypalRef.current);
  }, [totalAmount]);

  return <div className="mt-6 w-full" ref={paypalRef} />;
};

export default PayPalButton;
