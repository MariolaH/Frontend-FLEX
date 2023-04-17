import Home from "./components/Home";
import Login from "./components/Login";
// import Nav from "./components/Nav";
import Favorites from './components/Favorites'
import { Routes, Route } from "react-router-dom";
import Muscles from './components/muscles'

function App() {
  return (
    // <>
    // <Nav />
    //   <h1>Hello</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Favorites />} />
      <Route path="/login" element={<Muscles />} />
    </Routes>
    // </>
  );
}

export default App;
