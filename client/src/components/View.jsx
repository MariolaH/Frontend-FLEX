import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import request from "../services/api.request";
import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as moment from "moment";

function View() {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    const getWorkoutExercises = async () => {
      let config = {
        url: `/workout/${id}`,
        method: "get",
      };
      let response = await request(config);
      setWorkoutName(response.data.name);
      setExercises(response.data.exercises);
    };
    getWorkoutExercises();
  }, [id]);

  const handleSave = async (exercise) => {
    let config = {
      url: `/workout-exercises/`,
      method: "post",
      data: {
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        exercise: exercise.id,
        workout: id,
      },
    };
    let response = await request(config);
    let newExercises = [...exercises];
    let selectedExerciseIndex = exercises.findIndex(
      (e) => e.id === exercise.id
    );
    newExercises[selectedExerciseIndex] = {
      ...newExercises[selectedExerciseIndex],
      recorded_data: [
        ...newExercises[selectedExerciseIndex].recorded_data,
        response.data,
      ],
    };
    setExercises(newExercises);
    document.getElementsByName("sets")[selectedExerciseIndex].value = "";
    document.getElementsByName("reps")[selectedExerciseIndex].value = "";
    document.getElementsByName("weight")[selectedExerciseIndex].value = "";
  };

  const handleInputChange = (event, exerciseId) => {
    let newExercises = [...exercises];
    let selectedExerciseIndex = exercises.findIndex((e) => e.id === exerciseId);

    newExercises[selectedExerciseIndex] = {
      ...newExercises[selectedExerciseIndex],
      [event.target.name]: event.target.value,
    };
    setExercises(newExercises);
  };

  return (
    <>
      <Nav />
      <Container className="select">
        <Row className="row">
          <Col>
            <Card border="none" className="row" style={{ textAlign: "center" }}>
              <h1 className="h1View">{workoutName}</h1>

              {exercises?.map((exercise) => (
                <div key={exercise?.id}>
                  <p className="exerciseName">{exercise.name}</p>
                  <br />
                  {exercise.recorded_data.map((e) => (
                    <p key={e.id}>
                      Set: {e.sets} Reps: {e.reps} Weight: {e.weight} lbs <br />
                      {moment(e.created_at).format("MMMM D, YYYY")}
                    </p>
                  ))}

                  <InputGroup>
                    <button
                      key={exercise.id}
                      onClick={() => {
                        handleSave(exercise);
                      }}
                      className="btn btn7 btn-outline-light border-secordary"
                    >
                      +
                    </button>
                    <Form.Control
                      className="set"
                      size="sm"
                      placeholder="sets"
                      name="sets"
                      defaultValue={exercise.sets}
                      onChange={(event) =>
                        handleInputChange(event, exercise?.id)
                      }
                    />
                    <Form.Control
                      className="set"
                      size="sm"
                      placeholder="reps"
                      name="reps"
                      defaultValue={exercise.reps}
                      onChange={(event) =>
                        handleInputChange(event, exercise?.id)
                      }
                    />
                    <Form.Control
                      className="set"
                      size="sm"
                      placeholder="lbs"
                      name="weight"
                      defaultValue={exercise.weight}
                      onChange={(event) =>
                        handleInputChange(event, exercise?.id)
                      }
                    />
                  </InputGroup>
                  {"\u00A0"}
                  {"\u00A0"}
                </div>
              ))}

              {"\u00A0"}
              {"\u00A0"}
              <Link to="/favorites">
                <button className="btn btn4 btn-outline-dark rounded-pill button btn-sm">
                  FAVORITES
                </button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default View;
