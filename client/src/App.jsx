import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { Routes, Route } from "react-router-dom";
import Muscles from "./components/muscles";
import Main from "./components/Main";
import "./style/style.css";
import View from "./components/View";
import About from "./components/about";
import Instructions from "./components/instructions";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Favorites />} />
      <Route path="/login" element={<Muscles />} />
      <Route path="/exercises" element={<Muscles />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/workout/edit/:workoutId?" element={<Muscles />} />
      <Route path="/workout/:id" element={<View />} />
      <Route path="/about" element={<About />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  );
}

export default App;
