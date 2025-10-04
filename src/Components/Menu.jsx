const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      {/* Main Container */}
      <div className="p-6 space-y-10 flex-1 overflow-y-auto max-w-8xl mx-auto w-full">
        {/* Thali Plans */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Our Thali Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Regular",
                name: "Regular Thali",
                desc: "A balanced everyday thali with roti, dal, sabzi, rice & salad.",
                price: "₹70",
                img: "src/assets/DailyThali.png",
                color: "bg-green-100 text-green-700",
              },
              {
                tag: "Standard",
                name: "Standard Thali",
                desc: "Premium thali with more variety, special sabjis & sweet dish.",
                price: "₹120",
                img: "src/assets/WeeklyThali.png",
                color: "bg-orange-100 text-orange-700",
              },
              {
                tag: "Rice",
                name: "Rice and Rajma",
                desc: "A wholesome thali featuring fluffy rice with flavorful rajma, paired with fresh sabjis, roti, salad, and a sweet dish for a complete meal.",
                price: "₹60",
                img: "src/assets/WeeklyThali.png",
                color: "bg-orange-100 text-orange-700",
              },
            ].map((thali, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={thali.img}
                    alt={thali.name}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${thali.color}`}
                  >
                    {thali.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800">
                    {thali.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{thali.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-orange-600 font-bold text-lg">
                      {thali.price}
                    </span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 flex items-center transition">
                      <svg
                        className="w-5 h-5 mr-2"
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
              </div>
            ))}
          </div>
        </section>

        {/* Extra Add-ons */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Extra Add-ons
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Paneer Butter Masala",
                price: "₹80",
                img: "src/assets/paneer.png",
              },
              { name: "Aloo Gobi", price: "₹60", img: "src/assets/aloo.png" },
              { name: "Mix Veg", price: "₹70", img: "src/assets/mixveg.png" },
              { name: "Chole", price: "₹65", img: "src/assets/chole.png" },
              { name: "Salad", price: "₹30", img: "src/assets/salad.png" },
              { name: "Raita", price: "₹35", img: "src/assets/raita.png" },
              {
                name: "Extra Roti (2pcs)",
                price: "₹20",
                img: "src/assets/roti.png",
              },
            ].map((addon, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              >
                <img
                  src={addon.img}
                  alt={addon.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {addon.name}
                    </h3>
                    <p className="text-orange-600 font-bold mt-1">
                      {addon.price}
                    </p>
                  </div>
                  <button className="mt-3 bg-orange-500 text-white px-3 py-2 rounded-full hover:bg-orange-600 flex items-center justify-center transition">
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
