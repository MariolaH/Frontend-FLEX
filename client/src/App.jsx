import Home from "./components/Home";
import Login from "./components/Login";
import Favorites from './components/Favorites'
import { Routes, Route } from "react-router-dom";
import Muscles from './components/muscles'
import Main from "./components/Main";
import "./style/style.css"

function App() {
  return (
    // <>
    // <Nav />
    //   <h1>Hello</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Favorites />} />
      <Route path="/login" element={<Muscles />} />
      <Route path="/exercises" element={<Muscles />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/new" element={<Muscles />} />
    </Routes>
    // </>
  );
}

export default App;
