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
        <div id="top">
          <Row className="row">
            <Col xs={12} md={6}>
              <Card
                border="none"
                className="row"
                style={{ textAlign: "center" }}
              >
                <h1 className="h1View">{workoutName}</h1>
                <hr />

                {exercises?.map((exercise) => (
                  <div key={exercise?.id}>
                    <p className="exerciseName">{exercise.name}</p>
                    {/* In summary, this code loops through an array of exercises and
                  displays their names along with any recorded data that might
                  exist for each exercise. The recorded data is filtered so that
                  only elements that have values for the sets, reps, and weight
                  properties are displayed. */}
                    {exercise.recorded_data.map((e, index) => {
                      const date = moment(e.created_at);
                      const day = date.date();
                      const color = day % 2 === 0 ? "white" : "gray"; // Set the color based on the day
                      // Within the map function, we first check whether e.sets, e.reps,
                      // and e.weight properties of each element of the recorded_data array are
                      // not null or undefined using a logical AND operator (&&). If any of these
                      //  properties are missing, then the entire element is skipped.
                      return (
                        e.sets &&
                        e.reps && (
                          <p key={e.id} style={{ color }}>
                            Set: {e.sets} Reps: {e.reps} Weight: {e.weight} lbs{" "}
                            <br />
                            {moment(e.created_at).format("MMMM D, YYYY")}
                          </p>
                        )
                      );
                    })}
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
                        placeholder="Set"
                        name="sets"
                        type="number"
                        inputmode="numeric"
                        defaultValue={exercise.sets}
                        onChange={(event) =>
                          handleInputChange(event, exercise?.id)
                        }
                      />
                      <Form.Control
                        className="set"
                        size="sm"
                        placeholder="Reps"
                        name="reps"
                        type="number"
                        inputmode="numeric"
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
                        type="number"
                        inputmode="numeric"
                        defaultValue={exercise.weight}
                        onChange={(event) =>
                          handleInputChange(event, exercise?.id)
                        }
                      />
                    </InputGroup>
                    {"\u00A0"}
                    {"\u00A0"}
                    <hr />
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
        </div>
      </Container>
    </>
  );
}

export default View;
