import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorite, setFavorite] = useState([]);
  const [state, dispatch] = useGlobalState();
  // const [remove, setRemove] = useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      let config = {
        url: "/workout/",
        method: "get",
      };
      let response = await request(config);
      setFavorite(response.data);
    };
    getFavorite();    
  }, []);
  
    const deleteItem = async (favId) => {
      let config = {
        url: `/workout/${favId}`,
        method: "delete",
      };
      let response = await request(config);
      setFavorite(favorite.filter(item => item.id !== favId))
    };

  return (
    <div>
      <Nav />
      {favorite.length > 0 &&
        favorite.map((fav) => (
          <h3>
            <Link
              to={`/workout/${fav.id}`}
              className="btn btn-outline-dark button btn-lg"
            >
              <div key={fav.id}>
                <button>{fav.name}</button>
              </div>
            </Link>
            <button onClick={() => deleteItem(fav.id)}>DELETE</button>
            <Link
              to={`/modify/${fav.id}`}
              className="btn btn-outline-dark button btn-lg"
            >
              <div key={fav.id}>
                <button>MODIFY</button>
              </div>
            </Link>
          </h3>
        ))}
    </div>
  );
}

export default Favorites;
