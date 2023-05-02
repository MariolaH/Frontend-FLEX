// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useRef } from "react"; 

function About() {

  const ref = useRef(null);

const handleClick = () => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
  window.scrollTo(0, 0);
};


  return (
    <>
      <Nav />
      <Container className="select" style={{ textAlign: "center" }}>
        <Row className="row">
          <Col xs={12} md={6}>
            <img
              className="img"
              style={{ alignSelf: "center" }}
              src="./image/newLogo.png"
              alt="Logo"
            />
            <h1 className="mainHeader">FLEX</h1>
            <br />
            <p className="aboutWelcome">
              Welcome, <span style={{ color: "rgb(241, 135, 6)" }}>FLEX </span>
              was designed to assist you in creating customized workouts based
              on your desired muscle groups. With our user-friendly interface,
              you can effortlessly select a variety of exercises to incorporate
              into your workout, with the{" "}
              <span style={{ color: "rgb(241, 135, 6)" }}>FLEX</span>
              ibility to choose as many muscle groups and exercises as desired.
            </p>
            <br />
            <p className="aboutWelcome">
              Once you have created your workout, you can name, save and access all
              workouts within the favorites section for future reference. Our
              app also allows for easy modification and deletion of your
              workouts as your fitness journey progresses. Additionally, you
              have the option to add specific sets, reps, and weights to each
              exercise in your workout.
            </p>
            <br />
            <p className="aboutWelcome">
              Our app keeps track of your past workout data, allowing you to
              refer back to your previous sets, reps, and weights to monitor
              your progress. We hope you enjoy using our app to achieve your
              fitness goals. Thank you for choosing{" "}
              <span style={{ color: "rgb(241, 135, 6)" }}>FLEX.</span>
            </p>
            <br />
            <Link to="/userguide">
              <button
                onClick={handleClick}
                className="btn btn4 btn-outline-dark rounded-pill button btn-sm"
              >
                USER GUIDE
              </button>
            </Link>
            <br />
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </>
  );
}

export default About;
