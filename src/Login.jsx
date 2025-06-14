import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful (dummy)");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-box">
      <h2>Login</h2>
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Login</button>
      <p className="text-center">
        Don't have an account? <Link to="/sign-up" className="link">Register</Link>
      </p>
    </form>
  );
}
