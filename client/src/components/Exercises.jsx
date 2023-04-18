import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL =
  "https://8000-mariolah-backendflex-x1j83bg0m41.ws-us94.gitpod.io/api/";

function Exercises() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const getExercise = async () => {
      let config = {
        url: "/exerciselist/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
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
