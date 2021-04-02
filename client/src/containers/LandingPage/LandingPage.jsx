import { Link } from "react-router-dom";
import "./LandingPage.css"


function LandingPage() {
  return (
    <div className="landingp">
      <div className="content">
        <h2>Henry Videogames</h2>
        <Link to="/home">
          <button type="submit">Enter</button>
        </Link>
      </div>
    </div>
  );
}


export default LandingPage;
