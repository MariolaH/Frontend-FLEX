import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import request from "../services/api.request";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav2() {
  const [state] = useGlobalState();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsername = async () => {
      let config = {
        url: `/users/${state.currentUser?.user_id}/`,
        method: "get",
      };
      let response = await request(config);
      setUser(response.data);
    };
    getUsername();
  }, [state.currentUser?.user_id]);

  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    authService.logout();
    navigate("/home");
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="secondary"
          expand={expand}
          className="navTop mb-3"
        >
          <Container fluid className="justify-content-between">
            <Link to="/main">
              <button className="btn btn-outline-seondary btn-sm">
                <h2 className="navHeader">
                  FLEX
                </h2>
              </button>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-secondary"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2 className="mainHeader">FLEX</h2>
                  <h5 className="navSubheader"> Hello, {user?.username} </h5>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link
                    className="btn btn2 btn-outline-dark rounded-pill button btn-lg mb-3"
                    href="/main"
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button rounded-pill btn-lg mb-3"
                    href="/favorites"
                  >
                    FAVORITES
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button rounded-pill btn-lg mb-3"
                    // href="/workout/edit"
                    href="/exercises"
                  >
                    NEW WORKOUT
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark rounded-pill button btn-lg mb-3"
                    href="/about"
                  >
                    ABOUT
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark rounded-pill button btn-lg mb-3"
                    href="/userguide"
                  >
                    USER GUIDE
                  </Nav.Link>
                  <button
                    className="btn btn2 btn-outline-dark button rounded-pill btn-lg"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nav2;
