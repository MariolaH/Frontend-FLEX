import Login from "./Login";
import Register from "./Register";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Muscles from "./muscles";


function Home() {
  return (
    <>
      <img
        src="./image/Logo.png"
        className="homePagePic"
        alt="Mariola Hullings"
      />
      <Container className="select">
        <Row className="row">
          <Col>
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
