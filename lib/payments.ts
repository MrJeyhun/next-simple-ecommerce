import { loadStripe } from '@stripe/stripe-js';

import { InitiateCheckoutProps } from './payments.type';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY as string);

export async function initiateCheckout({ lineItems }: InitiateCheckoutProps) {
    const stripe = await stripePromise;

    await stripe?.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
    });
}
