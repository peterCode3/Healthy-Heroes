// components/Logo.js
import Link from 'next/link';
import React from 'react';

const Image = ({ logo, logoclass, href }) => {
  return (
    <div className={logoclass}>
      <Link href={href}>
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Image;
