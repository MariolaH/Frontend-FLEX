import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Link to="/exercises" className="btn btn-outline-dark button btn-lg">
        <button> NEW WORKOUT </button>
      </Link>
     
      <Link to="/favorites" className="btn btn-outline-dark button btn-lg">
        <button> FAVORITE </button>
      </Link>
    </>
  );
}

export default Main;
