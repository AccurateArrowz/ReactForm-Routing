import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Registered successfully (dummy)");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-box">
      <h2>Register</h2>
      <input type="text" placeholder="Username" {...register("username")} />
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Register</button>
      <p className="text-center">
        Already have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </form>
  );
}
  