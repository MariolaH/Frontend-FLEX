import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request';

function Favorites() {
  const [favorite, setFavorite] = useState([]);
  const [state, dispatch] = useGlobalState();
  console.log(state);

  useEffect(() => {
    const getFavorite = async () => {
      let config = {
        url: "/workout/",
        method: "get",
      };
      let response = await request(config);
      // console.log(response);
      setFavorite(response.data);
      console.log(response.data);
    };
    getFavorite();
  }, []);

  return (
    <div>
      <Nav />
      {favorite.map((g) => (
        <h3>{g.name}</h3>
      ))}
    </div>
  );
}

export default Favorites;
