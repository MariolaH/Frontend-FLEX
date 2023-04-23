import { useEffect, useState } from "react";
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

 useEffect(() => {
   const updateExercises = async () => {
     let config = {
       url: `/workout/${id}`,
       method: "get",
     };
     let response = await request(config);
     setExercises(response.data.exercises);
   };
   updateExercises();
 }, [selectedExercises, id]);


  const modifyItem = async () => {
    console.log(selectedExercises);
    let config = {
      url: `/workout/${id}/`,
      method: "patch",
      data: {
        exercises: [...exercises, ...selectedExercises].map((e) => e.id),
      },
    };
    await request(config);
    setSelectMuscle("");
    setExercises([...exercises, ...selectedExercises]);
    setSelectedExercises([]);
  };


  return (
    <>
      <Muscles name={workoutName} />
      <h1>{workoutName}</h1>
      {exercises?.map((exercise) => (
        <p key={exercise.id}>{exercise.name}</p>
      ))}
      {/* <button onClick={() => modifyItem()}> 
        UPDATE WORKOUT
      </button> */}
      <button onClick={modifyItem}>Update Workout</button>
    </>
  );
}

export default Modify;
