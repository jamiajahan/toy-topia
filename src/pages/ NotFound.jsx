import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-blue-100">
  <h1 className="text-9xl font-extrabold text-primary">404</h1>
  <p className="text-lg mt-2">Oops! Page not found.</p>
  <Link to="/" className="btn btn-primary mt-4">Go Back Home</Link>
</div>

  );
}
