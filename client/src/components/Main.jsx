import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Link to="/exercises" className="btn btn-outline-dark button btn-lg">
        NEW WORKOUT
      </Link>
      <Link to="/favorites" className="btn btn-outline-dark button btn-lg">
        FAVORITE
      </Link>
    </>
  );
}

export default Main;
