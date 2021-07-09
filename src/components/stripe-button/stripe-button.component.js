import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	
	const priceForStripe = price*100;
	const publishableKey = 'pk_test_51JBIjNSB7QeA7tFwkRSgJqmLPLOAjkcCQJ2no3vEOytGph5P8hUX3rlQLgNbCzBSgiivj41PHpucJJabunADNwHT00qvqNpj19'
	
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgShare.com/i/CUz.svg'
			decription={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			/>
		);
}

export default StripeCheckoutButton;