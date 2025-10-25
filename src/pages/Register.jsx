import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (pw) => /(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(pw);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error("Password must have uppercase, lowercase, and 6+ characters");
      return;
    }
    try {
      await register(email, password, name, photo);
      toast.success("🎉 Registered successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
        <button className="btn btn-primary w-full">Register</button>
      </form>

      <div className="text-center mt-4 space-y-2">
        <button className="btn btn-outline w-full" onClick={signInWithGoogle}>
          Continue with Google
        </button>
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
