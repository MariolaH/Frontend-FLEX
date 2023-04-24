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
  };

  return (
    <div>
      <Nav />
      <Container className="select d-flex p-2">
        <Row className="row">
          <Col>
            <Card border="none" className="row">
              {favorite.length > 0 &&
                favorite.map((fav) => (
                  <h3>
                    <Card.Body>
                      <div class="d-flex mb-3">
                        <div class="me-auto p-2">
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
                        <div class="p-2">
                          <button
                            className="btn btn-outline-dark button btn-lg"
                            key={fav.id}
                            onClick={() => deleteItem(fav.id)}
                          >
                            DELETE
                          </button>
                          <Link to={`/workout/edit/${fav.id}`}>
                            <button
                              className="btn btn-outline-dark button btn-lg"
                              style={{ outline: "none" }}
                              key={fav.id}
                            >
                              MODIFY
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
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
