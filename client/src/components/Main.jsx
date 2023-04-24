import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <>
      <Container className="select" style={{ textAlign: "center" }}>
        <Row className="row">
          <Col>
            <img
              className="img"
              style={{ alignSelf: "center" }}
              src="./image/Logo.png"
              alt="Logo"
            />
            <h2 className="mainHeader">FLEX</h2>
            <Card border="none" className="row">
              <Card.Body className="mainButtons">
                <Link to="/exercises">
                  <button className="btn btn4 btn-outline-dark button btn-lg">
                    {" "}
                    NEW WORKOUT{" "}
                  </button>
                </Link>

                <Link to="/favorites">
                  <button className="btn btn4 btn-outline-dark button btn-lg">
                    {" "}
                    FAVORITES{" "}
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
