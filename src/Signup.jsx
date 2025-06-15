import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("email")} type="email" placeholder="Email" className="border p-2" />
        <input {...register("password")} type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-500 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default Signup;