import { Link } from "react-router-dom";
import "../../styles/pages/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <address>
          Sprinkle & Whisk <br />
          248 Sugarberry Lane, Frostville, UT 90210 <br />
          (555) 382-9425
        </address>
      </div>
    </footer>
  );
}

export default Footer;
