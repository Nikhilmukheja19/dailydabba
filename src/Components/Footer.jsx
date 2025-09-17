import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-[#1e1e1e] text-[#c9c9c9] py-10">
  {/* Footer Content */}
  <div className="flex flex-col sm:flex-row  justify-center items-start w-[90%] mx-auto gap-10">

    {/* Logo & Description */}
    <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">Daily Dabba</h2>
      <p className="text-[#c9c9c9]">
        Your daily dose of delicious, home-cooked meals, delivered right to your door.
      </p>
    </div>

    {/* Quick Links */}
    <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
      <h2 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-gray-400 transition-colors">Menu</a></li>
        <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
      <h2 className="text-xl font-bold mb-4 text-orange-500">Legal</h2>
      <ul className="space-y-2 ">
        <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a></li>
        <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="w-full sm:w-1/2 md:w-1/4 text-center md:text-left">
      <h2 className="text-xl font-bold mb-4 text-orange-500">Follow Us</h2>
      <div className="flex justify-center md:justify-start gap-4 ">
        <a href="#" className="text-[#c9c9c9] hover:text-blue-600 transition-colors"><FaFacebookF /></a>
        <a href="#" className="text-[#c9c9c9] hover:text-blue-400 transition-colors"><FaTwitter /></a>
        <a href="#" className="text-[#c9c9c9] hover:text-pink-500 transition-colors"><FaInstagram /></a>
      </div>
    </div>

  </div>

  {/* Divider */}
  <div className="w-full h-px bg-[#c9c9c9] my-6"></div>

  {/* Footer Bottom */}
  <div className="text-center text-gray-500 text-sm">
    &copy; 2025 Daily Dabba. All rights reserved.
  </div>
</footer>




  );
};

// const styles = {
//   footer: {
//     backgroundColor: "#1e1e1e",
//     color: "#c9c9c9",
//     padding: "50px 0",
//     fontFamily: "Arial, sans-serif",
//     fontSize: "16px",
//     textAlign: "left",
//   },
//   footerContent: {
//     display: "flex",
//     justifyContent: "end",
//     flexDirection: "row-reverse",
//     flexWrap: "wrap",
//     maxWidth: "1200px",
//     margin: "0px 200px",
//     padding: "0 20px",
//   },
//   footerSection: {
//     flex: "1",
//     minWidth: "200px",
//     margin: "10px",
//   },
//   logoText: {
//     fontSize: "24px",
//     color: "#ffffff",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   heading: {
//     fontSize: "18px",
//     color: "#ffffff",
//     marginBottom: "20px",
//     fontWeight: "bold",
//   },
//   paragraph: {
//     lineHeight: "1.6",
//   },
//   list: {
//     listStyle: "none",
//     padding: "0",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#c9c9c9",
//     transition: "color 0.3s ease",
//     display: "block",
//     marginBottom: "10px",
//   },
//   socialLinks: {
//     display: "flex",
//     gap: "15px",
//   },
//   socialLink: {
//     fontSize: "24px",
//     color: "#c9c9c9",
//     transition: "color 0.3s ease",
//   },
//   footerBottom: {
//     borderTop: "1px solid #3a3a3a",
//     textAlign: "center",
//     paddingTop: "20px",
//     marginTop: "50px",
//     fontSize: "14px",
//   },
// };

export default Footer;
