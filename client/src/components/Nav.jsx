import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <Container fluid>
        <div>
          <header>
            <button
              className="btn btn-outline-dark button btn-lg"
              onClick={handleMenuToggle}
            >
              ☰
            </button>
          </header>
          {menuOpen && (
            <nav>
              <ul>
                <li>
                  <Link
                    className="btn btn-outline-dark button btn-lg"
                    to="/main"
                    onClick={handleMenuToggle}
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    className="btn btn-outline-dark button btn-lg"
                    to="/favorites"
                    onClick={handleMenuToggle}
                  >
                    FAVORITES
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-outline-dark button btn-lg"
                    to="/workout/edit"
                    onClick={handleMenuToggle}
                  >
                    NEW WORKOUT
                  </Link>
                </li>

                <Link
                  className="btn btn-outline-dark button btn-lg"
                  to="/home"
                  onClick={handleMenuToggle}
                >
                  LOG OUT
                </Link>
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
}





export default Nav;
