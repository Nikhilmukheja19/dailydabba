// import { useNavigate } from "react-router-dom";

const Menu = () => {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {/* <header className="flex items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <button className="mr-4 text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="text-lg font-bold mx-auto">Menu</h1>
      </header> */}

      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        {/* Thali Plans */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Thali Plans</h2>
          <div className="space-y-4">
            {/* Daily Thali */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
              <div className="flex-1">
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Daily
                </span>
                <h3 className="font-bold text-lg mt-2">Daily Thali</h3>
                <p className="text-gray-600 text-sm mt-1">
                  A wholesome meal with roti, sabzi, dal, and rice.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">₹70</span>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 flex items-center">
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
                alt="Daily Thali"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>

            {/* Standard Thali with Weekly Plan Tag */}
            <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4 relative">
              {/* <div className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                Weekly Plan
              </div> */}
              <div className="flex-1">
                <span className="text-xs text-whte-600 bg-orange-100 px-2 py-1 rounded-full">
                  Weekly Plan
                </span>
                <h3 className="font-bold text-lg">Standard Thali</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Premium thali with more variety and desserts.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-lg">₹65</span>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 flex items-center">
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
                alt="Standard Thali"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Extra Add-ons */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Extra Add-ons</h2>
          <div className="grid grid-row-2 gap-4">
            {[
              { name: "Roti", price: "₹20" },
              { name: "Dal", price: "₹40" },
              { name: "Dahi", price: "₹25" },
              { name: "Salad", price: "₹30" },
            ].map((addon, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
              >
                <div>
                  <span className="font-medium block">{addon.name}</span>
                  <span className="text-orange-500 font-bold text-sm">
                    {addon.price}
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
