import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'navbarOpen' : ''}`}>
      <button className="toggleButton" onClick={toggleNavbar}>
        ☰ Menu
      </button>
      <ul className={`navList ${isOpen ? 'show' : ''}`}>
        <li className="navItem">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link href="/movements">
            Movements
          </Link>
        </li>
        <li className="navItem">
          <Link href="/daily-workouts">
            Daily Workouts
          </Link>
        </li>
        <li className="navItem">
          <Link href="/participants">
            Participants
          </Link>
        </li>
        <li className="navItem">
          <Link href="/fanpage">
            Fan Page
          </Link>
        </li>
        <li className="navItem">
          <Link href="https://swancreate.com/?ff_landing=15" target='blank'>
            Scorecard
          </Link>
        </li>
        <li className="navItem">
          <Link href="https://swanscoring.com/app/Result?Event=51bce375-d562-48d3-baec-f0f53f0f978c" target='blank'>
            Leaderboard
          </Link>
        </li>
        <li className="navItem">
          <Link href="https://www.facebook.com/events/1306534329883073" target='blank'>
            Event FaceBook Page
          </Link>
        </li>
        <li className="navItem">
          <Link href="/registration">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
