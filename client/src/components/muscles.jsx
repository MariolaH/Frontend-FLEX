import { useEffect, useState } from "react";
import request from "../services/api.request";
import Nav from "./Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Muscles(props) {
  const { workoutId } = useParams();
  console.log("ID FROM URL", workoutId);

  const [muscle, setMuscle] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [selectMuscle, setSelectMuscle] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  // const [disabled, setDisabled] = useState(false);

  // Initial GET requests for Exercises/Muscle Groups
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

  useEffect(() => {
    const getWorkoutExercises = async () => {
      let config = {
        url: `/workout/${workoutId}`,
        method: "get",
      };
      let response = await request(config);
      setWorkoutName(response.data.name);
      setSelectedExercises(response.data.exercises);
    };

    if (workoutId) {
      getWorkoutExercises();
    } else {
      setSelectedExercises([]);
      setWorkoutName("");
      setSelectMuscle("");
    }
  }, [workoutId]);

  const handleSaveWorkout = async () => {
    console.log(selectedExercises);
    let config = {
      url: workoutId ? `/workout/${workoutId}/` : "/workout/",
      method: workoutId ? "patch" : "post",
      data: {
        name: workoutName,
        exercises: selectedExercises.map((e) => e.id),
      },
    };
    await request(config);
    toast("SAVED!", {
      icon: "👏",
      style: {
        borderRadius: "50px",
        background: "#333",
        color: "#fff",
      },
    });
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
      <Toaster />
      <Container className="select rounded-2xl">
        <Row className="row">
          <Col>
            <Card border="none" className="row">
              {"\u00A0"}
              <h5 className="selectMuscle" style={{ textAlign: "center" }}>
                SELECT A MUSCLE GROUP
              </h5>
              {/* <Card.Body></Card.Body> */}

              {muscle.map((musc) => (
                <button
                  className="btn btn-outline-dark button btn-lg mb-2"
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
              <Card border="none" className="row">
                <Card.Body>
                  <h5 style={{ textAlign: "center" }}>SELECT AN EXERCISE</h5>
                </Card.Body>
                {"\u00A0"}
                {exercise
                  .filter((e) => e.muscles.some((m) => m.name === selectMuscle))
                  .map((exercise) => (
                    <button
                      className={`btn btn-outline-dark button btn-lg mb-2 ${
                        selectedExercises.find((ex) => ex.id === exercise.id)
                          ? "active"
                          : ""
                      }`}
                      size="lg"
                      key={exercise.id}
                      onClick={() => handleExerciseClick(exercise)}
                      // disabled={disabled}
                    >
                      <p>{exercise.name}</p>
                    </button>
                  ))}
              </Card>
            )}
            {"\u00A0"}
            {selectMuscle && (
              <>
                <Card.Body>
                  <h5 style={{ textAlign: "center" }}>SELECTED EXERCISES</h5>
                </Card.Body>
              </>
            )}
            {selectedExercises.map((exercise) => (
              <Card key={exercise.id} border="none" className="row">
                <button
                  className="btn btn-outline-dark button btn-lg mb-2"
                  onClick={() => RemoveExercise(exercise.id)}
                >
                  {exercise.name}
                </button>
              </Card>
            ))}
            {"\u00A0"}
            {selectMuscle && !props.name && (
              <Card border="none" className="row">
                <Card.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      className="input"
                      placeholder="Name"
                      aria-label="Workout Name"
                      aria-describedby="basic-addon2"
                      value={workoutName}
                      onChange={handleWorkoutNameChange}
                    />
                    <button
                      className="btn btn-outline-dark button btn-lg"
                      id="button-addon2"
                      onClick={handleSaveWorkout}
                    >
                      SAVE
                    </button>
                  </InputGroup>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Muscles;
