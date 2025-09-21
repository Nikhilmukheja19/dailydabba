import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    navigate(-1);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/address",
        formData
      );
      setMessage(res.data.message);
      setFormData({
        name: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 p-6">
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
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center text-orange-600 mb-6"
        >
          Delivery Address 🚚
        </motion.h2>

        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-center text-green-600 font-medium"
          >
            {message}
          </motion.div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "John Doe",
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "tel",
              placeholder: "+91 1234567890",
            },
            {
              label: "Street Address",
              name: "street",
              type: "text",
              placeholder: "123 Street Name",
            },
            { label: "City", name: "city", type: "text", placeholder: "City" },
            {
              label: "State",
              name: "state",
              type: "text",
              placeholder: "State",
            },
            {
              label: "ZIP Code",
              name: "zip",
              type: "text",
              placeholder: "123456",
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm text-zinc-600 mb-1">
                {field.label}
              </label>
              <motion.input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                whileFocus={{ scale: 1.02, borderColor: "#F97316" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          ))}

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold shadow-md flex justify-center items-center transition"
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
            ) : (
              "Submit"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
