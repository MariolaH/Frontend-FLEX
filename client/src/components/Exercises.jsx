import { useEffect, useState } from "react";
import request from "../services/api.request";

function Exercises() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const getExercise = async () => {
      let config = {
        url: "/exerciselist/",
        method: "get",
      };
      let response = await request(config);
      console.log(response);
      setExercise(response.data);
      console.log(response.data);
    };
    getExercise();
  }, []);

  return (
    <div>
      {exercise.map((g) => (
        <h3> {g.name} </h3>
      ))}
    </div>
  );
}

export default Exercises;
