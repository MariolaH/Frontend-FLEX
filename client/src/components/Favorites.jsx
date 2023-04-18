import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const BASE_URL =
  "https://8000-mariolah-backendflex-x1j83bg0m41.ws-us94.gitpod.io/api/";

function Favorites() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const getFavorite = async () => {
      let config = {
        url: "/workout/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
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
        <h3>
          {g.name}
        </h3>
      ))}
    </div>
  );
}

export default Favorites;
