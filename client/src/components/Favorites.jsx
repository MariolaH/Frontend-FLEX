import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

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
    //     <Card style={{ width: "18rem" }}>
    //       <ListGroup variant="flush">
    //         {favorite.length > 0 &&
    //           favorite.map((fav) => (
    //             <React.Fragment key={fav.id}>
    //               <ListGroup.Item>
    //                 <Link
    //                   to={`/workout/${fav.id}`}
    //                   className="btn btn-outline-dark button btn-lg"
    //                 >
    //                   {fav.name}
    //                 </Link>
    //               </ListGroup.Item>
    //               <ListGroup.Item>
    //                 <button onClick={() => deleteItem(fav.id)}>DELETE</button>

    //                 <Link
    //                   to={`/modify/${fav.id}`}
    //                   className="btn btn-outline-dark button btn-lg"
    //                 >
    //                   MODIFY
    //                 </Link>
    //               </ListGroup.Item>
    //             </React.Fragment>
    //           ))}
    //       </ListGroup>
    //     </Card>
    //   );
    // }

    <div>
      <Nav />
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          {favorite.length > 0 &&
            favorite.map((fav) => (
              <h3>
                <ListGroup.Item>
                  <Link
                    to={`/workout/${fav.id}`}
                    // className="btn btn-outline-dark button btn-lg"
                  >
                    <button
                      className="btn btn-outline-dark button btn-lg"
                      key={fav.id}
                    >
                      {fav.name}
                    </button>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button
                    className="btn btn-outline-dark button btn-lg"
                    key={fav.id}
                    onClick={() => deleteItem(fav.id)}
                  >
                    DELETE
                  </button>

                  <Link
                    to={`/modify/${fav.id}`}
                    // className="btn btn-outline-dark button btn-lg"
                  >
                    <button
                      className="btn btn-outline-dark button btn-lg"
                      style={{ outline: "none" }}
                      key={fav.id}
                    >
                      MODIFY
                    </button>
                  </Link>
                </ListGroup.Item>
              </h3>
            ))}
        </ListGroup>
      </Card>
    </div>
  );
}



//     <div>
//       <Nav />   
//  {favorite.length > 0 &&
//         favorite.map((fav) => (
//           <h3>
//             <Card>
//               <Card.Body>
//                 <Link
//                   to={`/workout/${fav.id}`}
//                   className="btn btn-outline-dark button btn-lg"
//                 >
//                   <button key={fav.id}>{fav.name}</button>
//                 </Link>
//               </Card.Body>
//               <Card.Body>
//                 <button key={fav.id} onClick={() => deleteItem(fav.id)}>
//                   DELETE
//                 </button>
//               </Card.Body>{" "}
//               <Card.Body>
//                 <Link
//                   to={`/modify/${fav.id}`}
//                   className="btn btn-outline-dark button btn-lg"
//                 >
//                   <button key={fav.id}>MODIFY</button>
//                 </Link>
//               </Card.Body>
//             </Card>
//           </h3>
//         ))}
//     </div>
//   );
// }

export default Favorites;
