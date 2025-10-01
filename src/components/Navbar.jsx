import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Logo />
      <nav>
        <ul className="flex gap-16">
          <li>
            <a
              href="#"
              className="border-b-3 border-primary py-1 duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b-3 border-primary py-1 duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b-3 border-primary py-1 duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b-3 border-primary py-1 duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;