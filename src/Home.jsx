import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded shadow-md text-center w-80">
      <h2 className="text-2xl mb-4">Welcome Home!</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
}

export default Home;