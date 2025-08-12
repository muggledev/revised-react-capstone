import { Link } from "react-router-dom";
import "../../styles/pages/notfound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
