import { useEffect, useState } from "react";
import request from '../services/api.request';
import Nav from "./Nav";

function Muscles() {
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
        exercises: [],
      },
    };
    await request(config);
    setWorkoutName("");
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

      <h3>SELECT A EXERCISE</h3>
      {exercise
        .filter((e) => e.muscles.some((m) => m.name === selectMuscle))
        .map((exercise) => (
          <button key={exercise.id}>
            <p onClick={() => handleExerciseClick(exercise)}>
              {" "}
              {exercise.name}{" "}
            </p>{" "}
          </button>
        ))}

      {selectedExercises.map((exercise) => (
        <div key={exercise.id}>
          <button onClick={() => RemoveExercise(exercise.id)}>{exercise.name}</button>
        </div>
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
      </div>
    </>
  );
}

export default Muscles;
