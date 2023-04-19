import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request';

function Favorites() {
  const [favorite, setFavorite] = useState([]);
  const [state, dispatch] = useGlobalState();
const [remove, setRemove]=useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      let config = {
        url: "/workout/",
        method: "get",
      };
      let response = await request(config);
      setFavorite(response.data);
      console.log(response.data);
    };
    getFavorite();

      const getRemove = async () => {
      let config = {
        url: "/workout/",
        method: "delete",
        // data: {
        //   name: workoutName,
        //   exercises: [],
        // },
      };
      let response = await request(config);
      setRemove(response.data);
      console.log(response.data);
    };
    getRemove();
  }, []);

  const Remove = (favorite) => {
    setRemove(favorite);
  };

  return (
    <div>
      <Nav />
      {favorite.map((g) => (
        <h3>
          {g.name} 
          <button>Modify</button>
          <button onClick={() => Remove(favorite)}>
            Delete
          </button>
        </h3>
      ))}{" "}
    </div>
  );
}

export default Favorites;
