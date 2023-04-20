import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";

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
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/new" onClick={handleMenuToggle}>
                New Workout
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <main>
      </main>
    </div>

  );
}


export default Nav;
