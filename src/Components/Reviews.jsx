import { MdStar, MdStarBorder } from "react-icons/md";

const reviews = [
  {
    name: "Priya Sharma",
    date: "2 weeks ago",
    stars: 5,
    comment:
      "I love the tiffins from Tiffin Express! The food is always fresh and delicious, and the delivery is on time. Highly recommended!",
    likes: 5,
    dislikes: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3eQzO_jQUSM5CMjmBQ_r-m91K1uO_btN7EWnp_6CAAdzDf1PvLyUXxOR1DQ7wXG1ZbZdDsE4Ei2Jcl2qjSkRqnyoEPLpFQjny15dF4F2fAMb-I1DHU9gMSZtIt8-c4CtKM_4hlHJ8OFJ6yVn8R9XvkFdeYHYFyAFUq4cZuH3Zi__VbFJeN2oHQ4iPsAsxm_bsg97mcW7p3uUCPv71DAlTKoc-SsnrGcgsdUp1VYrCEY0vKH5AVDkoMwv5DUeFaYzW2CcKOx9fOQ",
  },
  {
    name: "Rohit Verma",
    date: "1 month ago",
    stars: 4,
    comment:
      "Tiffin Express delivers great meals! The portion size is perfect, and the taste is amazing. I just wish the delivery was slightly faster.",
    likes: 3,
    dislikes: 0,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ananya Kapoor",
    date: "3 weeks ago",
    stars: 5,
    comment:
      "Absolutely love the service! The variety of tiffins is great, and everything tastes fresh. Customer support is also very responsive.",
    likes: 6,
    dislikes: 0,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function Reviews() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex-1 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.date}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-orange-500 mb-4">
              {Array(5)
                .fill()
                .map((_, i) =>
                  i < review.stars ? (
                    <MdStar key={i} className="w-5 h-5" />
                  ) : (
                    <MdStarBorder key={i} className="w-5 h-5 text-zinc-300" />
                  )
                )}
            </div>

            <p className="text-zinc-700 mb-4">{review.comment}</p>

            <div className="flex gap-6 text-zinc-500">
              <button className="flex items-center gap-1 text-sm">
                <span className="text-base">👍</span>
                {review.likes}
              </button>
              <button className="flex items-center gap-1 text-sm">
                <span className="text-base">👎</span>
                {review.dislikes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
