import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import request from "../services/api.request";
import Muscles from "./muscles";

function Modify() {
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
      <h1>{workoutName}</h1>
      {exercises?.map((exercise) => (
        <p key={exercise.id}>{exercise.name}</p>
      ))}
      <Muscles name={workoutName} />
      <button>UPDATE WORKOUT</button>
    </>
  );
}

export default Modify;
