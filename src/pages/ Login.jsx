import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("✅ Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
  <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input type="email" placeholder="Email" className="input input-bordered w-full" />
    <input type="password" placeholder="Password" className="input input-bordered w-full" />
    <button className="btn btn-primary w-full">Login</button>
  </form>
  <div className="divider">OR</div>
  <button onClick={signInWithGoogle} className="btn btn-outline w-full">
    Continue with Google
  </button>
</div>

  );
}
