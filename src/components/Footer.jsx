import React from "react";

export default function Footer() {
  return (
  <footer className="bg-primary text-white p-6 mt-8">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <p>© {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
    <div className="flex gap-4 mt-3 md:mt-0">
      <a href="#" className="link link-hover text-white">Privacy</a>
      <a href="#" className="link link-hover text-white">Terms</a>
      <a href="#" className="link link-hover text-white">Contact</a>
    </div>
  </div>
</footer>

  );
}
