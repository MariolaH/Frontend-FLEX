import { useEffect, useState } from "react";
import request from "../services/api.request";
import Nav from "./Nav";

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
      <h1>CREATE A NEW WORKOUT</h1>
      <h4>SELECT A MUSCLE GROUP</h4>

      {muscle.map((musc) => (
        <button key={musc.id} onClick={() => handleMuscleGroupClick(musc.name)}>
          {" "}
          <p> {musc.name} </p>{" "}
        </button>
      ))}

      {selectMuscle && (
        <div>
          <h3>SELECT AN EXERCISE</h3>
          {exercise
            .filter((e) => e.muscles.some((m) => m.name === selectMuscle))
            .map((exercise) => (
              <button key={exercise.id}>
                <p onClick={() => handleExerciseClick(exercise)}>
                  {exercise.name}
                </p>
              </button>
            ))}
        </div>
      )}

      {selectedExercises.map((exercise) => (
        <div key={exercise.id}>
          <button onClick={() => RemoveExercise(exercise.id)}>
            {exercise.name}
          </button>
        </div>
      ))}
      {selectMuscle && !props.name && (
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
      )}
    </>
  );
}

export default Muscles;
