/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/svgviewer-png-output.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Home");

  // auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(""); // store logged-in user id

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    const storedId = localStorage.getItem("id"); // assuming you saved user id at login

    if (token && storedName) {
      setIsLoggedIn(true);
      setUserName(storedName);
      setUserId(storedId);
    } else {
      setIsLoggedIn(false);
      setUserName("");
      setUserId("");
    }
  }, [location]);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Profile", href: `/profile/${userId}` },
  ];

  // highlight active item
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find((item) => item.href === currentPath);
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg">
      <div className="flex items-center px-4 py-2 justify-between">
        <Link to="/">
          <img src={logo} alt="DailyDabba Logo" className="h-15 w-60" />
        </Link>

        {/* ✅ Conditional rendering */}
        {!isLoggedIn ? (
          <button
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <button
            className="flex items-center gap-2 rounded-full bg-orange-500 text-white font-bold px-4 py-2"
            onClick={() => navigate(`/profile/${userId}`)}
          >
            <span className="rounded-full bg-white/20 w-8 h-8 flex items-center justify-center">
              {userName.charAt(0).toUpperCase()}
            </span>
            {userName.split(" ")[0]} {/* first name */}
          </button>
        )}
      </div>

      <div className="border-b border-zinc-200">
        <nav className="flex justify-around">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex flex-col items-center justify-center border-b-2 px-4 py-3 text-sm font-medium ${
                activeItem === item.name
                  ? "border-orange-500 text-orange-500 font-bold"
                  : "border-transparent text-zinc-500"
              }`}
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
