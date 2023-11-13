// components/Logo.js
import React from 'react';

const Image = ({ path, logoclass }) => {
  return (
    <div className={logoclass}>
      <img src={path} alt="Logo" />
    </div>
  );
};

export default Image;
