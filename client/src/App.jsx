import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
      // <Nav />
    //   <h1>Hello</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    // </>
  );
}

export default App;
