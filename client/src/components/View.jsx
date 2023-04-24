import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import request from "../services/api.request";
import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  return (
    <>
      <Nav />
      <Container className="select">
        <Row className="row">
          <Col>
            <Card border="none" className="row" style={{ textAlign: "center" }}>
              <h1>{workoutName}</h1>

              {exercises?.map((exercise) => (
                <p key={exercise.id}>{exercise.name}</p>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default View;
