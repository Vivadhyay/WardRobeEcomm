import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KJZqESA230IiLeuHOr2utmaTZ7VKrCrQamuM5Sv0XhPkDdZH5ELexTtpOoO0WG0o5PF4w6bbI5AaRZS5w8pxY7o00M8ffqB6B";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='WardRobe Collection'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/dZd.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;