import React from 'react';
import { Link } from 'react-router-dom';

export default function ToyCard({ toy }) {
  return (
    <div className="card bg-base-100 shadow p-4">
      <img
        src={toy.pictureURL}
        alt={toy.toyName}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-3">
        <h3 className="font-bold">{toy.toyName}</h3>
        <p>Rating: {toy.rating} · Qty: {toy.availableQuantity}</p>
        <p className="font-semibold">${toy.price}</p>
        <Link
          to={`/toy/${toy.toyId}`}
          className="btn btn-sm btn-outline mt-2"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
