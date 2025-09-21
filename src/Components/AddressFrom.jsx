import { useState } from "react";
import axios from "axios";

export default function AddressForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      setMessage(error.response?.data?.message || "Error submitting address");
    }
  };

  return (
    <div className="max-w-md mx-auto  p-2 border rounded shadow">
      <h2 className="text-xl font-bold mb-10">Delivery Address</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  );
}
