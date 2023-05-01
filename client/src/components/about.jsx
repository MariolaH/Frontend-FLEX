// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />
      <Container className="select">
        <Row className="row">
          <Col xs={12} md={6}>
            <br />
            <p>
              Welcome to our app designed to assist you in creating customized
              workouts based on your desired muscle groups. With our
              user-friendly interface, you can effortlessly select a variety of
              exercises to incorporate into your workout, with the flexibility
              to choose as many muscle groups and exercises as desired.
            </p>
            <p>
              Once you have created your workout, you can save and access all
              workouts within the favorites section for future reference. Our
              app also allows for easy modification and deletion of your
              workouts as your fitness journey progresses. Additionally, you
              have the option to add specific sets, reps, and weights to each
              exercise in your workout.
            </p>
            <p>
              Our app keeps track of your past workout data, allowing you to
              refer back to your previous sets, reps, and weights to monitor
              your progress. We hope you enjoy using our app to achieve your
              fitness goals. Thank you for choosing our app.
            </p>

            <ul>
              <h5 className="about" style={{ textAlign: "center" }}>
                Instructions for Creating and Modifying Workouts:
              </h5>
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
              <h5 className="about" style={{ textAlign: "center" }}>
                Instructions for Modifying an Existing Workout:
              </h5>
              <li className="aboutLi">
                Choose the muscle group associated with the existing workout you
                wish to modify.
              </li>
              <li className="aboutLi">
                Select the exercises you want to add or remove from the workout.
              </li>
              <li className="aboutLi">
                To delete an exercise, click on the unwanted exercise to remove
                it from the workout.
              </li>
              <li className="aboutLi">Save the modified workout.</li>
            </ul>
            <ul>
              <h5 className="about" style={{ textAlign: "center" }}>
                Instructions for Inputting Sets, Reps, and Weight:
              </h5>
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
              <h5 className="about" style={{ textAlign: "center" }}>
                Instructions for Deleting a Workout:
              </h5>
              <li className="aboutLi">
                Click the "delete" button associated with the workout you wish
                to remove.
              </li>
              <li className="aboutLi">
                The workout will be permanently deleted, and cannot be recovered
                once it has been deleted.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
