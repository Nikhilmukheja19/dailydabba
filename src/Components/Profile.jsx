/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("id");

    navigate("/login");
  };
  console.log(addresses);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://dailydabbabackend-3.onrender.com/address/getaddress/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setAddresses(res.data);
      } catch (err) {
        console.error("Error fetching addresses:", err.response?.data || err);
      }
    };
    fetchAddresses();
  }, [id]);
  const handledelete = async (orderid) => {
    try {
      const token = localStorage.getItem("token");

      // Call delete API
      const res = await axios.delete(
        `https://dailydabbabackend-3.onrender.com/address/deleteaddress/${orderid}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Delete Response:", res.data);

      // Update frontend immediately
      setAddresses((prev) => prev.filter((address) => address._id !== orderid));
    } catch (err) {
      console.error("Error deleting address:", err.response?.data || err);
    }
  };

  return (
    <div className="min-h-screen bg-white-600 p-2">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🧑‍🍳
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {localStorage.getItem("userName") || "User"}
                </h2>
                <p className="text-sm text-gray-500">
                  {localStorage.getItem("email")}
                </p>
              </div>
            </div>
            <button
              className="flex items-center gap-3 px-4 py-3 text-white bg-orange-500 font-semibold rounded-xl material-symbols-outlined"
              onClick={handlelogout}
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main Section */}
        <main className="col-span-12 lg:col-span-9 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Manage Addresses
          </h1>

          <div className="flex justify-end mb-4">
            <button
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-600 transition flex items-center gap-2"
              onClick={() => navigate("/addressform")}
            >
              Add New Address
            </button>
          </div>

          {/* Render Addresses */}
          <div className="space-y-4">
            {addresses.length > 0 ? (
              addresses.map((addr, i) => (
                <div
                  key={addr._id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-800 text-lg">
                      {addr.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {addr.street}, {addr.city}, {addr.state} - {addr.zip}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Contact: {addr.phone}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 sm:mt-0">
                    <button className="bg-orange-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-orange-600 transition flex items-center gap-1">
                      Edit
                    </button>
                    <button
                      onClick={() => handledelete(addr._id)}
                      className="bg-red-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-red-600 transition flex items-center gap-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No addresses found</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
