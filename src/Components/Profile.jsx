// import { useState } from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white-600 p-2">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              {/* <img
                className="w-16 h-16 rounded-full"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              /> */}
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🧑‍🍳
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Kunal Bhalla
                </h2>
                <p className="text-sm text-gray-500">
                  kunal7.bhalla@example.com
                </p>
              </div>
            </div>
            {/* <nav className="flex flex-col space-y-2">
              <a
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-100 rounded-xl transition-colors font-medium"
                href="#"
              >
                <span className="material-symbols-outlined">person</span>{" "}
                Profile
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-white  font-semibold rounded-xl"
                href="#"
              >
                <span className="material-symbols-outlined">receipt_long</span>{" "}
                Orders
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-gray-700  rounded-xl transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">home</span>{" "}
                Addresses
              </a>
              <a
                className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-xl transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">payment</span>{" "}
                Payment
              </a>
            </nav> */}
            <a
              className="flex items-center gap-3 px-4 py-3 text-white bg-orange-500 font-semibold rounded-xl"
              href="#"
            >
              <button className="material-symbols-outlined">Logout</button>
            </a>
          </div>
        </aside>

        {/* Main section */}
        <main className="col-span-12 lg:col-span-9 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Manage Addresses
          </h1>

          {/* Add New Address Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-600 transition flex items-center gap-2">
              Add New Address
            </button>
          </div>

          {/* Address List Template */}
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800 text-lg">
                    Home Address {i}
                  </p>
                  <p className="text-gray-600 text-sm">
                    123, Sample Street, City Name, State - 123456
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Contact: +91 987654321{i}
                  </p>
                </div>

                <div className="flex gap-2 mt-4 sm:mt-0">
                  <button className="bg-orange-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-orange-600 transition flex items-center gap-1">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-red-600 transition flex items-center gap-1">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
