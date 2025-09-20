import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Login from "./Components/Login";
import Profile from "./Components/profile";

function App() {
  const location = useLocation();

  // Don't show Navbar on login route
  const hideNavbar =
    location.pathname === "/login"; /*|| location.pathname === "/profile"*/

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
