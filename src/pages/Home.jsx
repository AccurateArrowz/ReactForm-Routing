import { Link } from 'react-router-dom';
import './Home.css'; // 👈 Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My App</h1>
      <p className="home-subtitle">Start your journey by logging in or creating an account.</p>
      <div className="home-links">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/signup" className="home-button">Signup</Link>
      </div>
    </div>
  );
}

export default Home;