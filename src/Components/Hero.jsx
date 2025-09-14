import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-black text-white">
      <div
        className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQYYk-b5ySUavS1vr6_p9u4S89D1C3IJel4Rl2i9VVaHde11MIUy47mpDus48SVVPhdHTnbrzDOFf5qQhXTZUGz0PhV24PmdlskdRUfE1ctysneLbfpafl_EAQAbi9kmPSgLUb2l0Z7Mi8-DcFi6yoOGRcnuVplW_QGWyvz4FGeJ5Uu_HT8pTx7XsNd4cKkZX7UAOOvNKpvyUgdqXdl8n04-PPPQBdv9S7zr_OPRoqe7HOYjMLmjayiA4a-lVbjyGztbTyvoLC8g')`,
        }}
      >
        <h1 className="text-3xl font-bold text-center max-w-xl">
          Fresh, Homemade Tiffin Delivered to Your Doorstep
        </h1>
        <p className="text-center mt-4 max-w-md">
          Enjoy delicious, healthy meals prepared with love and delivered right
          to your home or office. Choose from a variety of authentic Indian
          dishes.
        </p>
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 bg-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-600"
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
