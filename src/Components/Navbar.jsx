/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/svgviewer-png-output.png";

function Navbar() {
  const location = useLocation(); // to detect current path
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Home");

  // Update active item when location changes
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = menuItems.find((item) => item.href === currentPath);
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [location]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    {
      name: "Contact",
      href: "https://wa.me/917717387848?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services",
    },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg">
      <div className="flex items-center px-4 py-2 justify-between">
        <Link to="/">
          <img src={logo} alt="DailyDabba Logo" className="h-15 w-60 " />
        </Link>
        <button
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
      <div className="border-b border-zinc-200">
        <nav className="flex justify-around">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex flex-col items-center justify-center border-b-2 px-4 py-3  text-sm font-medium ${
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
