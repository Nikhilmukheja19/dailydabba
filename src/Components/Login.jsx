import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
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

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm text-zinc-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-zinc-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center text-zinc-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-600 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
