import { useEffect, useState } from "react";
import request from "../services/api.request";
import Nav from "./Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


function Muscles(props) {
  const [muscle, setMuscle] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [selectMuscle, setSelectMuscle] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  // const [remove, setRemove]=useState([])

  useEffect(() => {
    const getMuscle = async () => {
      let config = {
        url: "/musclegroup/",
        method: "get",
      };
      let response = await request(config);
      setMuscle(response.data);
    };
    getMuscle();

    const getExercise = async () => {
      let config = {
        url: "/exerciselist/",
        method: "get",
      };
      let response = await request(config);
      setExercise(response.data);
    };
    getExercise();
  }, []);

  const handleSaveWorkout = async () => {
    console.log(selectedExercises);
    let config = {
      url: "/workout/",
      method: "post",
      data: {
        name: workoutName,
        exercises: selectedExercises.map((e) => e.id),
      },
    };
    await request(config);
    setWorkoutName("");
    setSelectMuscle("");
    setSelectedExercises([]);
  };

  const handleMuscleGroupClick = (muscle) => {
    setSelectMuscle(muscle);
  };

  const handleExerciseClick = (exercise) => {
    setSelectedExercises((prevExercises) => [
      ...prevExercises,
      {
        name: exercise.name,
        id: exercise.id,
        muscles: [{ name: selectMuscle }],
      },
    ]);
  };

  const RemoveExercise = (remove) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.filter((exercise) => exercise.id !== remove)
    );
  };

  const handleWorkoutNameChange = (event) => {
    setWorkoutName(event.target.value);
  };

  return (
    <>
      <Nav />
      <Container className="select">
        <Row className="row">
          <Col>
            <Card border="light" className="row">
              {"\u00A0"}
              <h5>SELECT A MUSCLE GROUP</h5>
              {/* <Card.Body></Card.Body> */}

              {muscle.map((musc) => (
                <button
                  className="btn btn-outline-dark button btn-lg"
                  key={musc.id}
                  onClick={() => handleMuscleGroupClick(musc.name)}
                >
                  {" "}
                  <p> {musc.name} </p>{" "}
                </button>
              ))}
            </Card>
            {"\u00A0"}
            {selectMuscle && (
              <Card border="light" className="row">
                <Card.Body>
                  <h5>SELECT AN EXERCISE</h5>
                </Card.Body>

                {exercise
                  .filter((e) => e.muscles.some((m) => m.name === selectMuscle))
                  .map((exercise) => (
                    <button
                      className="btn btn-outline-dark button btn-lg"
                      size="lg"
                      key={exercise.id}
                      onClick={() => handleExerciseClick(exercise)}
                    >
                      <p>{exercise.name}</p>
                    </button>
                  ))}
              </Card>
            )}
            {"\u00A0"}
            {selectedExercises.map((exercise) => (
              <Card key={exercise.id} border="light" className="row">
                <button
                  className="btn btn-outline-dark button btn-lg"
                  onClick={() => RemoveExercise(exercise.id)}
                >
                  {exercise.name}
                </button>
              </Card>
            ))}
            <Card border="light" className="row">
              {selectMuscle && !props.name && (
                <Card.Body>
                  {/* <label htmlFor="workout-name"></label>
                <InputGroup id="inputGroup-sizing-sm">
                <input
                className="input"
                type="text"
                id="workout-name"
                name="workout-name"
                placeholder="Enter Workout Name"
                value={workoutName}
                onChange={handleWorkoutNameChange}
                />
                
                <button
                id="button-addon1"
                className="btn btn-outline-dark button btn-lg"
                onClick={handleSaveWorkout}
                >
                    Save Workout
                  </button>
                </InputGroup> */}

                  <InputGroup className="mb-3">
                    <Form.Control
                      className="input"
                      placeholder="Name Workout"
                      aria-label="Workout Name"
                      aria-describedby="basic-addon2"
                      value={workoutName}
                      onChange={handleWorkoutNameChange}
                    />
                    <button
                      className="btn btn-outline-dark button btn-lg"
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={handleSaveWorkout}
                    >
                      SAVE
                    </button>
                  </InputGroup>
                </Card.Body>
              )}
            </Card>
            {/* <Col>1 of 3</Col> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Muscles;
