import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h2 style={styles.logoText}>Tiffin Express</h2>
          <p style={styles.paragraph}>
            Your daily dose of delicious, home-cooked meals, delivered right to
            your door.
          </p>
        </div>
        <div style={styles.footerSection}>
          <h2 style={styles.heading}>Quick Links</h2>
          <ul style={styles.list}>
            <li>
              <a href="#" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                Menu
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h2 style={styles.heading}>Legal</h2>
          <ul style={styles.list}>
            <li>
              <a href="#" style={styles.link}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h2 style={styles.heading}>Follow Us</h2>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>
              <FaFacebookF />
            </a>
            <a href="#" style={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="#" style={styles.socialLink}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        &copy; 2025 Tiffin Express. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e1e1e",
    color: "#c9c9c9",
    padding: "50px 0",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    textAlign: "left",
  },
  footerContent: {
    display: "flex",
    justifyContent: "end",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0px 200px",
    padding: "0 20px",
  },
  footerSection: {
    flex: "1",
    minWidth: "200px",
    margin: "10px",
  },
  logoText: {
    fontSize: "24px",
    color: "#ffffff",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  heading: {
    fontSize: "18px",
    color: "#ffffff",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  paragraph: {
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    textDecoration: "none",
    color: "#c9c9c9",
    transition: "color 0.3s ease",
    display: "block",
    marginBottom: "10px",
  },
  socialLinks: {
    display: "flex",
    gap: "15px",
  },
  socialLink: {
    fontSize: "24px",
    color: "#c9c9c9",
    transition: "color 0.3s ease",
  },
  footerBottom: {
    borderTop: "1px solid #3a3a3a",
    textAlign: "center",
    paddingTop: "20px",
    marginTop: "50px",
    fontSize: "14px",
  },
};

export default Footer;
