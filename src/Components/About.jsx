import { MdSpa, MdHealthAndSafety, MdSentimentSatisfied } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-white text-zinc-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-50">
        <div className="container mx-auto px-4 py-10 lg:py-10">
          <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                Bringing the Taste of Home, to Your Doorstep
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto lg:mx-0">
                Discover the story behind Tiffin Express, where passion for
                authentic flavors and commitment to quality come together to
                deliver nutritious and delicious home-style meals.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                alt="Delicious tiffin meal"
                className="rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb7wVjDtKOh5lsKOdzYFwscAxN3-PUNu51hXfNZkjj_bbXmo0rmubHQyhtTfLg4CNUByskgM0a1M89ZIMO_n7ivFZRDwEtq-PCPsvkQ8eYgYXG4dS20uwyady2PhSqQaxc7K2qXG6gPru2CREHpCUMd93mdXXF0x6CICXyvAcUb3ICjXwkY6QWI9CthWXJHNDawzF2OMnkPhPCf-MGiROLvAVTiEG7F5fPPxjnYO_bYCRCJ9v5NAYuL2Ir89dCdVYyvDTnhCjHsA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      {/* <section className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Our Story
          </h2>
          <p className="text-zinc-600 mt-6 text-lg leading-relaxed">
            At Tiffin Express, our journey began in 2018 with a simple desire:
            to bring the authentic taste of home-cooked meals to busy
            professionals and students. Founded by a group of food enthusiasts,
            we recognized the need for a reliable and healthy alternative to
            fast food. Our mission is to provide nutritious, delicious, and
            affordable tiffin services that cater to diverse dietary
            preferences, making wholesome eating convenient for everyone.
          </p>
        </div>
        <div className="order-first lg:order-last">
          <img
            alt="A collage of fresh ingredients"
            className="rounded-lg shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb7wVjDtKOh5lsKOdzYFwscAxN3-PUNu51hXfNZkjj_bbXmo0rmubHQyhtTfLg4CNUByskgM0a1M89ZIMO_n7ivFZRDwEtq-PCPsvkQ8eYgYXG4dS20uwyady2PhSqQaxc7K2qXG6gPru2CREHpCUMd93mdXXF0x6CICXyvAcUb3ICjXwkY6QWI9CthWXJHNDawzF2OMnkPhPCf-MGiROLvAVTiEG7F5fPPxjnYO_bYCRCJ9v5NAYuL2Ir89dCdVYyvDTnhCjHsA"
          />
        </div>
      </section> */}

      {/* Our Values */}
      <section className="bg-zinc-50 rounded-lg p-8 lg:p-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
          Our Values
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={<MdSpa className="text-primary-600 w-12 h-12" />}
            title="Fresh & Local"
            description="We are committed to using fresh, locally sourced ingredients to ensure the highest quality and taste in every meal."
          />
          <ValueCard
            icon={<MdHealthAndSafety className="text-primary-600 w-12 h-12" />}
            title="Hygiene & Safety"
            description="Our team of experienced chefs and delivery personnel work tirelessly to maintain the strictest hygiene standards."
          />
          <ValueCard
            icon={
              <MdSentimentSatisfied className="text-primary-600 w-12 h-12" />
            }
            title="Customer Happiness"
            description="We value customer satisfaction above all and strive to exceed expectations with every tiffin we deliver."
          />
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 text-center">
          Meet the Team
        </h2>
        <p className="text-lg text-zinc-600 text-center mt-4 max-w-3xl mx-auto">
          The passionate individuals dedicated to bringing you the best tiffin
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-x-8 gap-y-12 mt-12 max-w-4xl mx-auto">
          <TeamMember
            name="Chef Anika"
            role="Head Chef"
            description="With over 15 years of culinary experience, Chef Anika is the heart of our kitchen, crafting menus that are both healthy and delicious."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwhUbwUhAAtGvs8qFT6yPa_Qr95W6KEyW81U2QcC3UE-lhBA8js3Kb-KVlfFtzzvi92Qhch89ffYcSbY9_zv6xoSuXmaB1Q_TYK8_YJL3nLWHB10_ZcHRLSU3xwTGi0Is1AiVyfNOAlUhFdra4HAak_QWVCYZg6pWjEzIr8WwMEeIeiED17Gs7s0GPjTs-gObQ6eT7v805upKg9gLjYl9pwDwig6hdLSBJzG-ZiqXtKKvkURSnA0mSdNoGE-fWmupHFDNMyngBQ"
          />
          <TeamMember
            name="Rohan"
            role="Delivery Manager"
            description="Rohan ensures that your meals arrive on time, every time. His dedication to logistics keeps our delivery network running smoothly."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBHC_zy41sIc9wAbafzo4BgPqCvybb5awH7rZfqGcWYqJ1YzUS1unQqFX0Vrs2BvRbE0VDZ3_tYAhGpSgD6bSi--jQFGxMBJnlADxaBznC4ypMZoCUy7x884eAjhmszr1G7bLSZrOBxR12lhHtrD_8dYxFMnwuWR145FTVrf5b_beL8UP8sb35NZ3702qSYt9dR5L05klH4rOl_d62PhVIojNvgV9twBSMwGoNez2MlsXqOD4jq7tBvff3ooTZdcJfgXcpRrFTU1Q"
          />
        </div>
      </section>
    </div>
  );
};

// ValueCard component
// eslint-disable-next-line react/prop-types
const ValueCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
    <p className="text-zinc-600 mt-2">{description}</p>
  </div>
);

// TeamMember component
// eslint-disable-next-line react/prop-types
const TeamMember = ({ name, role, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <img
      alt={name}
      className="w-40 h-40 rounded-full object-cover shadow-lg"
      src={image}
    />
    <p className="text-xl text-zinc-800 font-semibold mt-4">{name}</p>
    <p className="text-base text-zinc-500">{role}</p>
    <p className="text-zinc-600 mt-2 max-w-xs">{description}</p>
  </div>
);

export default About;
