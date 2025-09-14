import CTA from "./Calltoaction";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
