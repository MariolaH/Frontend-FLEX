import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <>
      <Container className="select">
        <Row className="row">
          <Col>
            <Card border="none" className="row">
              <Card.Body>
                <Link to="/exercises">
                  <button className="btn btn-outline-dark button btn-lg">
                    {" "}
                    NEW WORKOUT{" "}
                  </button>
                </Link>

                <Link to="/favorites">
                  <button className="btn btn-outline-dark button btn-lg">
                    {" "}
                    FAVORITE{" "}
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
