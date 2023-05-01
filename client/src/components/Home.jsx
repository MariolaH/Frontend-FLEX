import Login from "./Login";
import Register from "./Register";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Container className="select" style={{ textAlign: "center" }}>
        <Row className="row">
          <Col>
            <img
              className="img"
              style={{ alignSelf: "center" }}
              src="./image/newLogo.png"
              alt="Logo"
            />
            <h2 className="mainHeader">FLEX</h2>
            <Card border="none" className="row">
              <Card.Body>
                <Login />
              </Card.Body>
              <Card.Body>
                <Register />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
