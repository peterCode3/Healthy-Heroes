import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import RegistrationForm from '../src/component/RegistrationParticpant';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';

const stripePromise = loadStripe('publish-key'); 


const registration = () => {
  return (
    <Elements stripe={stripePromise}>
      <Header />
      <RegistrationForm />
      <Footer />
    </Elements>

  );
};

export default registration;
