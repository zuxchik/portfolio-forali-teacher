
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}{" "}
        <span>Ali Teacher</span>. All rights reserved.
      </p>

      <a
        href="https://resultsendday.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="register-link"    >
        Register for Move ↗
      </a>

      <a href="#home" className="footer-top">
        Back to top ↑
      </a>
    </footer>
  );
}

export default Footer;
