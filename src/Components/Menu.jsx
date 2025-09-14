// import { useNavigate } from "react-router-dom";

const Menu = () => {
  //   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header
      <header className="flex items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <button className="mr-4 text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="text-lg font-bold mx-auto">Menu</h1>
      </header> */}

      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        {/* Tiffin Plans */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tiffin Plans</h2>
          <div className="space-y-4">
            {/* Classic Tiffin */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
              <div className="flex-1">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Popular
                </span>
                <h3 className="font-bold text-lg mt-2">Classic Tiffin</h3>
                <p className="text-gray-600 text-sm mt-1">
                  A balanced meal with roti, sabzi, dal, and rice.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">
                    $12.99
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
              <img
                src="https://i.ibb.co/2k0yv7R/classic-tiffin.jpg"
                alt="Classic Tiffin"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>

            {/* Executive Tiffin */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg">Executive Tiffin</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Premium options with varied cuisines and desserts.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">
                    $15.99
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
              <img
                src="https://i.ibb.co/q9khHbD/executive-tiffin.jpg"
                alt="Executive Tiffin"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Individual Dishes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Individual Dishes</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Paneer Tikka */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Paneer Tikka</h3>
                <p className="text-gray-600 text-sm">Marinated paneer.</p>
                <span className="text-orange-500 font-bold mt-1 block">
                  $8.99
                </span>
              </div>
              <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            {/* Chicken Curry */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Chicken Curry</h3>
                <p className="text-gray-600 text-sm">Spicy & flavorful.</p>
                <span className="text-orange-500 font-bold mt-1 block">
                  $10.99
                </span>
              </div>
              <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            {/* Veg Biryani */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Veg Biryani</h3>
                <p className="text-gray-600 text-sm">Fragrant rice dish.</p>
                <span className="text-orange-500 font-bold mt-1 block">
                  $9.99
                </span>
              </div>
              <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation Bar */}
      {/* <nav className="flex justify-around bg-white shadow-md p-3 sticky bottom-0">
        <button className="flex flex-col items-center text-orange-500">
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18v18H3V3z"
            />
          </svg>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18v18H3V3z"
            />
          </svg>
          <span className="text-xs">Cart</span>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
            />
          </svg>
          <span className="text-xs">Profile</span>
        </button>
      </nav> */}
    </div>
  );
};

export default Menu;
