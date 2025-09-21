import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // loader for submit
  const [checkingAuth, setCheckingAuth] = useState(true); // loader for token check
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Check token validity on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCheckingAuth(false);
        return;
      }

      try {
        const res = await axios.get(
          "https://dailydabbabackend-3.onrender.com/auth/verify",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.data.valid) {
          navigate("/"); // already logged in
        } else {
          localStorage.removeItem("token");
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        localStorage.removeItem("token");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and Password are required!");
      setLoading(false);
      return;
    }
    if (!isLogin && !formData.name) {
      setError("Full Name is required for Sign Up!");
      setLoading(false);
      return;
    }

    const url = isLogin
      ? "https://dailydabbabackend-3.onrender.com/auth/login"
      : "https://dailydabbabackend-3.onrender.com/auth/register";

    try {
      const res = await axios.post(url, formData);

      if (isLogin) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        }
      } else {
        setSuccess("Account created successfully! Please log in.");
        setIsLogin(true);
        setFormData({ name: "", email: "", password: "" });
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Server error, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    // full screen loader while checking token
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50">
        <svg
          className="animate-spin h-10 w-10 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md relative"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700"
        >
          ✕
        </button>

        {/* Heading */}
        <motion.h2
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-center text-zinc-800 mb-6"
        >
          {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
        </motion.h2>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-600 text-sm text-center">
            {success}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm text-zinc-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-zinc-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold shadow-md transition flex justify-center items-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : isLogin ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center text-zinc-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setSuccess("");
            }}
            className="text-orange-600 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
