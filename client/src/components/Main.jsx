import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <Container className="select d-flex justify-content-center align-items-center">
      <Row className="row">
        <Col md={8} className="d-flex flex-column align-items-center">
          <img className="img" src="./image/newLogo.png" alt="Logo" />
          <h2 className="mainHeader mt-3">FLEX</h2>
          <Card border="none" className="row">
            <Card.Body className="mainButtons d-flex flex-row">
              <Link to="/exercises" className="flex-fill me-2">
                <button className="btn btn4 btn-outline-dark button rounded-pill btn-lg">
                  NEW WORKOUT
                </button>
              </Link>

              <Link to="/favorites" className="flex-fill ms-2">
                <button className="btn btn4 btn-outline-dark rounded-pill button btn-lg">
                  FAVORITES
                </button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
