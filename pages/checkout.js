import { stripePromise } from "../utils/stripe";

export default function CheckoutPage() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_test_id_for_your_product', quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/cancel',
    });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Checkout?</h2>
      <button onClick={handleCheckout} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        Pay Now with Stripe
      </button>
    </div>
  );
}
