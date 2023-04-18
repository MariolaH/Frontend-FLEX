import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";


const BASE_URL =
  "https://8000-mariolah-backendflex-x1j83bg0m41.ws-us94.gitpod.io/api/";

function Muscles() {

    const [muscle, setMuscle] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [selectMuscle, setSelectMuscle] = useState("");

    useEffect(() => {
      const getMuscle = async () => {
        let config = {
          url: "/musclegroup/",
          baseURL: BASE_URL,
          method: "get",
        };
        let response = await axios.request(config);
    
        setMuscle(response.data);
       
      }
      getMuscle();
    }, []);


      useEffect(() => {
        const getExercise = async () => {
          if (selectMuscle !== "") {
          let config = {
            url: "/exerciselist/",
            baseURL: BASE_URL,
            method: "get",
          };
          let response = await axios.request(config);
          setExercise(response.data);
          }
        };
        getExercise();
      }, [selectMuscle]);

      const handleMuscleGroupClick = (muscle) => {
        setSelectMuscle(muscle);
      };
   

  return (
    <>
      <Nav />
      {muscle.map((muscle) => (
        <button
          key={muscle.id}
          onClick={() => handleMuscleGroupClick(muscle.name)}
        >
          {" "}
          <h3> {muscle.name} </h3>{" "}
        </button>
      ))}

     
      {exercise.map((exercise) => (
        <p> {exercise.name} </p>
      ))}
    </>
  );
}

export default Muscles;
