import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const BASE_URL =
  "https://8000-mariolah-backendflex-x1j83bg0m41.ws-us94.gitpod.io/api/";

function Muscles() {
  const [muscle, setMuscle] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [selectMuscle, setSelectMuscle] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    const getMuscle = async () => {
      let config = {
        url: "/musclegroup/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);

      setMuscle(response.data);
    };
    getMuscle();

    const getExercise = async () => {
      let config = {
        url: "/exerciselist/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
      setExercise(response.data);
    };
    getExercise();
  }, []);

  // async function handleSaveWorkout() {
  //   let config = {
  //     url: "/workout/",
  //     baseURL: BASE_URL,
  //     method: "post",
  //     data: {
  //       name: nameRef.current.value,
  //       biography: bioRef.current.value,
  //       img: imgUrlRef.current.value,
  //     },
  //   };
  //   let response = await axios.request(config);
  //   setArtist([response.data, ...artist]);
  // }

  const handleMuscleGroupClick = (muscle) => {
    setSelectMuscle(muscle);
  };

  const handleExerciseClick = (exercise) => {
    setSelectedExercises((prevExercises) => [
      ...prevExercises,
      { name: exercise.name, id: exercise.id },
    ]);
  };

    const handleSaveWorkout = async () => {
      const workout = { name: workoutName, exercises: selectedExercises };
      await axios.post("/workout/");
      setWorkoutName("");
      setSelectedExercises([]);
    };

    const handleWorkoutNameChange = (event) => {
      setWorkoutName(event.target.value);
    };

  return (
    <>
      <Nav />
      <h4>SELECT A MUSCLE GROUP(S)</h4>

      {muscle.map((muscle) => (
        <button
          key={muscle.id}
          onClick={() => handleMuscleGroupClick(muscle.name)}
        >
          {" "}
          <p> {muscle.name} </p>{" "}
        </button>
      ))}

      
      <h3>Selected exercises:</h3>
      {exercise
        .filter((e) => e.muscles.some((m) => m.name === selectMuscle))
        .map((exercise) => (
          <button>
            <p key={exercise.id} onClick={() => handleExerciseClick(exercise)}>
              {" "}
              {exercise.name}{" "}
            </p>{" "}
          </button>
        ))}
      <div>
        <label htmlFor="workout-name">Workout Name:</label>
        <input
          type="text"
          id="workout-name"
          name="workout-name"
          value={workoutName}
          onChange={handleWorkoutNameChange}
          />
        <button onClick={handleSaveWorkout}>Save Workout</button>
        {selectedExercises.map((exercise) => (
          <div key={exercise.id}>
            <p>{exercise.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Muscles;
