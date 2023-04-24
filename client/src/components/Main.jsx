import { Link } from "react-router-dom";


function Main() {


  return (
    <>
      <Link to="/exercises">
        <button className="btn btn-outline-dark button btn-lg">
          {" "}
          NEW WORKOUT{" "}
        </button>
      </Link>

      <Link to="/favorites">
        <button className="btn btn-outline-dark button btn-lg">
          {" "}
          FAVORITE{" "}
        </button>
      </Link>
    </>
  );
}

export default Main;
