import { useEffect, useState } from "react";
import Nav from "./Nav";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import toast, { Toaster } from "react-hot-toast";

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
    setFavorite(favorite.filter((item) => item.id !== favId));
      toast("YOUR WORKOUT HAS BEEN DELETED!", {
        style: {
          borderRadius: "50px",
          background: "#333",
          color: "#fff",
        },
      });
  };

  return (
    <div>
      <Toaster />
      <Nav />
      <Container className="select d-flex p-2">
        <Row className="row">
          <Col>
            <Card border="none" className="row">
              <h2 className="mainFavs" style={{ textAlign: "center" }}>
                WORKOUTS
              </h2>
              {favorite.length > 0 &&
                favorite.map((fav) => (
                  <h3>
                    <Card.Body>
                      <div className="mb-3" style={{ textAlign: "center" }}>
                        <div className="me-auto p-2">
                          <Link to={`/workout/${fav.id}`}>
                            {" "}
                            <button
                              className="btn btn-outline-dark button btn-lg"
                              key={fav.id}
                            >
                              {fav.name}
                            </button>
                          </Link>{" "}
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn2 btn-outline-dark button btn-sm me-2"
                            key={fav.id}
                            onClick={() => deleteItem(fav.id)}
                          >
                            DELETE
                          </button>
                          <Link to={`/workout/edit/${fav.id}`}>
                            <button
                              className="btn btn-outline-light button btn-sm ms-2"
                              style={{ outline: "none" }}
                              key={fav.id}
                            >
                              MODIFY
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                    <hr className="bg-secondary m-1" />
                  </h3>
                ))}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
