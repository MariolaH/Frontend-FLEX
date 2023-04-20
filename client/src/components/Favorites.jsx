import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from '../services/api.request';
import { Link } from "react-router-dom";


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

    //   const getRemove = async () => {
    //   let config = {
    //     url: "/workout/",
    //     method: "delete",
    //     // data: {
    //     //   name: workoutName,
    //     //   exercises: [],
    //     // },
    //   };
    //   let response = await request(config);
    //   setRemove(response.data);
    //   console.log(response.data);
    // };
    // getRemove();
  }, []);

  return (
    <div>
      <Nav />
      {favorite.map((g) => (
        <h3>
          <Link to="/view" className="btn btn-outline-dark button btn-lg">
            <button>{g.name}</button>{" "}
          </Link>
        </h3>
      ))}{" "}
    </div>
  );
}

export default Favorites;

