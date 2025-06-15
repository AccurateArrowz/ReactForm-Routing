import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.email === data.email && savedUser?.password === data.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("email")} type="email" placeholder="Email" className="border p-2" />
        <input {...register("password")} type="password" placeholder="Password" className="border p-2" />
        <button className="bg-green-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;