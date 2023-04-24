import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Nav2() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2 className="mainHeader">FLEX</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button btn-lg mb-3"
                    href="/main"
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button btn-lg mb-3"
                    href="/favorites"
                  >
                    FAVORITES
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button btn-lg mb-3"
                    href="/workout/edit"
                  >
                    NEW WORKOUT
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn2 btn-outline-dark button btn-lg"
                    href="/home"
                  >
                    LOG OUT
                  </Nav.Link>
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
