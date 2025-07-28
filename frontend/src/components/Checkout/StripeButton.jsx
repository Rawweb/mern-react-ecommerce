import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'sonner';

// Replace this with your real key
const stripePromise = loadStripe(
  'pk_test_51Rpei8R6iexmC19BkQbOXXpwunDQ26asusscVap5MO3oPFitkLxTEU2ur5PK7L3r72tkleeQjPHWSHxHkuPk3ju500gA3KUOXJ'
);

const StripeButton = ({ amount = 0 }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      lineItems: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Order from Store',
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (result.error) {
      toast.error(result.error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
    >
      Pay with Stripe
    </button>
  );
};

export default StripeButton;
