import { useEffect, useState } from "react";
import axios from "axios";


const BASE_URL =
  "https://8000-mariolah-backendflex-x1j83bg0m41.ws-us94.gitpod.io/api/";

function Muscles() {

    const [muscle, setMuscle] = useState([]);

    useEffect(() => {
      const getMuscle = async () => {
        let config = {
          url: "/musclegroup/",
          baseURL: BASE_URL,
          method: "get",
        };
        let response = await axios.request(config);
        console.log(response);
        setMuscle(response.data);
        console.log(response.data);
      }
      getMuscle();
    }, []);
   

  return (
    <div>
      {muscle.map((g) => <h3> {g.name} </h3>)}
    </div>
  );
}

export default Muscles;
