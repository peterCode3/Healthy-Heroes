import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import RegistrationForm from '../src/component/RegistrationParticpant';

const stripePromise = loadStripe('pk_live_51NFK1lAUwwYwXNftfTEpYcmnzo59cl23Af7PgYGpl9ym02mlIi1RAxC998e4DREUxKkQAKt882MW2gWmV1rRze9J00v2JM4blr'); 


const registration = () => {
  return (
    <Elements stripe={stripePromise}>
      <RegistrationForm />
    </Elements>
  );
};

export default registration;
