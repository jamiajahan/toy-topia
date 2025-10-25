import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("✅ Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-2xl">
  <div className="text-center">
    <img
      src={user.photoURL || "https://via.placeholder.com/120"}
      alt="User"
      className="w-28 h-28 rounded-full mx-auto border-4 border-primary"
    />
    <h2 className="text-xl font-bold mt-3">{user.displayName}</h2>
    <p className="text-gray-500">{user.email}</p>
  </div>

  <form onSubmit={handleSave} className="mt-6 space-y-3">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="New name"
      className="input input-bordered w-full"
    />
    <input
      type="text"
      value={photo}
      onChange={(e) => setPhoto(e.target.value)}
      placeholder="New photo URL"
      className="input input-bordered w-full"
    />
    <button className="btn btn-primary w-full">Update Profile</button>
  </form>
</div>

  );
}
