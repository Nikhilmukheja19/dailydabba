import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
