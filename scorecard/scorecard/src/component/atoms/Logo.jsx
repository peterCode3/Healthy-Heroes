// components/Logo.js
import React from 'react';

const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
