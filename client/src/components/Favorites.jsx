import { useEffect, useState } from "react";
import Nav from "./Nav";
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
    await request(config);
    setFavorite(favorite.filter((item) => item.id !== favId));
    toast(" WORKOUT DELETED! ", {
      style: {
        background: "#f18706",
        color: "Black",
        padding: "15px",
        border: "10px solid #f18706",
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
                  <h3 key={fav.id}>
                    <Card.Body>
                      <div className="mb-3" style={{ textAlign: "center" }}>
                        <div className="me-auto p-2">
                          <Link to={`/workout/${fav.id}`} href="#top">
                            {" "}
                            <button className="btn btn3 btn-outline-dark button rounded-pill btn-sm">
                              {fav.name}
                            </button>
                          </Link>{" "}
                        </div>
                        <div className="p-2">
                          <button
                            className="btn btn4 btn-outline-dark button rounded-pill btn-sm me-2"
                            key={fav.id}
                            onClick={() => deleteItem(fav.id)}
                          >
                            DELETE
                          </button>
                          <Link to={`/workout/edit/${fav.id}`}>
                            <button
                              className="btn btn3 btn-outline-dark button rounded-pill btn-sm ms-2"
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
