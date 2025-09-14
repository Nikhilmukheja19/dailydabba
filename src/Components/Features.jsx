import { MdRamenDining, MdLocalShipping, MdSchedule } from "react-icons/md";

const features = [
  {
    icon: <MdRamenDining className="w-12 h-12 text-orange-500" />,
    title: "Authentic Homemade Taste",
    description:
      "Our tiffins are prepared with fresh ingredients and traditional recipes, ensuring a taste that reminds you of home.",
  },
  {
    icon: <MdLocalShipping className="w-12 h-12 text-orange-500" />,
    title: "Fast and Reliable Delivery",
    description:
      "We guarantee timely delivery of your tiffin, so you never have to worry about missing a meal.",
  },
  {
    icon: <MdSchedule className="w-12 h-12 text-orange-500" />,
    title: "Flexible Subscription Plans",
    description:
      "Choose from daily, weekly, or monthly plans to suit your needs and preferences.",
  },
];

function Features() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
      <p className="text-zinc-600 mb-12 max-w-3xl mx-auto text-lg md:text-xl">
        We are committed to providing you with the best tiffin service
        experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-zinc-600 text-base md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
