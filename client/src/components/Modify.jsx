import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import request from "../services/api.request";
import Muscles from "./muscles";

function Modify() {
  const { id } = useParams();
  const [selectMuscle, setSelectMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);

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

  const modifyItem = async () => {
    let config = {
      url: `/workout/${id}/`,
      method: "patch",
      data: {
        exercises: selectedExercises.map((e) => e.id),
      },
    };
    await request(config);
    setSelectMuscle("");
    setSelectedExercises([]);
  };

  return (
    <>
      <Muscles name={workoutName} />
      <h1>{workoutName}</h1>
      {exercises?.map((exercise) => (
        <p key={exercise.id}>{exercise.name}</p>
        ))}
        <button onClick={() => modifyItem()}>UPDATE WORKOUT</button>

    </>
  );
}

export default Modify;
