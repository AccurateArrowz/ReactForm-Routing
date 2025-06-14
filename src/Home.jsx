
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="form-box">
      <h2>Welcome Home!</h2>
      <p className="text-center">You're now on the Home Page.</p>
      <div className="text-center">
        <Link to="/login" className="link">Login</Link>
        {" | "}
        <Link to="/sign-up" className="link">Register</Link>
      </div>
    </div>
  );
}

