import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import AuthService from "../services/auth.service";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <button onClick={handleMenuToggle}>☰</button>
      </header>
      {menuOpen && (
        <nav>
          <ul>
            <li>
              <Link to="/main" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/favorites" onClick={handleMenuToggle}>
                FAVORITES
              </Link>
            </li>
            <li>
              <Link to="/workout/edit" onClick={handleMenuToggle}>
                NEW WORKOUT
              </Link>
            </li>

            <Link to="/home" onClick={handleMenuToggle}>
              LOG OUT
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Nav;
