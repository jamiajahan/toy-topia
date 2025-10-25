import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left: Brand */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          ToyTopia
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/profile" className="btn btn-ghost">
          My Profile
        </Link>
      </div>

      {/* Right: User */}
      <div className="flex-none">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={handleLogout} className="btn btn-sm btn-outline">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>

      {/* Mobile menu (optional) */}
      <div className="md:hidden ml-2 dropdown dropdown-end
