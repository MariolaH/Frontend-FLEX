// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Instructions() {
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
              <ul>
                <h3 className="about" style={{ textAlign: "center" }}>
                  Instructions for Creating and Modifying Workouts:
                </h3>
                <li className="aboutLi">
                  Begin by selecting the desired muscle group for the workout.
                </li>
                <li className="aboutLi">
                  Choose the specific exercises you wish to include in the
                  workout.
                </li>
                <li className="aboutLi">
                  To remove an exercise from the workout, simply click on the
                  exercise and it will be deleted.
                </li>
                <li className="aboutLi">
                  Give the workout a name that accurately reflects its contents.
                </li>
                <li className="aboutLi">Save the completed workout.</li>
              </ul>

              <ul>
                <h3 className="about" style={{ textAlign: "center" }}>
                  Instructions for Modifying an Existing Workout:
                </h3>
                <li className="aboutLi">
                  Choose the muscle group associated with the existing workout
                  you wish to modify.
                </li>
                <li className="aboutLi">
                  Select the exercises you want to add or remove from the
                  workout.
                </li>
                <li className="aboutLi">
                  To delete an exercise, click on the unwanted exercise to
                  remove it from the workout.
                </li>
                <li className="aboutLi">Save the modified workout.</li>
              </ul>
              <ul>
                <h3 className="about" style={{ textAlign: "center" }}>
                  Instructions for Inputting Sets, Reps, and Weight:
                </h3>
                <li className="aboutLi">
                  Enter the numeric data for sets, reps, and weight into the
                  appropriate fields.
                </li>
                <li className="aboutLi">
                  Click the "+" button to save the inputted data.
                </li>
                <li className="aboutLi">
                  You may add as many sets, reps, and weight values as needed.
                </li>
              </ul>
              <ul>
                <h3 className="about" style={{ textAlign: "center" }}>
                  Instructions for Deleting a Workout:
                </h3>
                <li className="aboutLi">
                  Click the "delete" button associated with the workout you wish
                  to remove.
                </li>
                <li className="aboutLi">
                  The workout will be permanently deleted, and cannot be
                  recovered once it has been deleted.
                </li>
              </ul>
              <br />
              <Link to="/exercises">
                <button className="btn btn4 btn-outline-dark rounded-pill button btn-sm">
                  START YOUR FIRST WORKOUT
                </button>
              </Link>
            </Col>
          </Row>
          <br />
          <br />
      </Container>
    </>
  );
}

export default Instructions;
