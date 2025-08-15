import React from "react";

const mockWishlist = [
  {
    id: 1,
    name: "MacBook Air M2",
    price: 102999,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Canon EOS R10 Mirrorless Camera",
    price: 79999,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Noise Smartwatch Pulse Go Buzz",
    price: 1599,
    image: "https://via.placeholder.com/100",
  },
];

export default function Wishlist() {
  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

      {mockWishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {mockWishlist.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  Price: ₹{item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  View
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
