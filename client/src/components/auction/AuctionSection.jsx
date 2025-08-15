import React from "react";

const watches = [
  {
    id: 1,
    price: "€3,000",
    image:
      "https://plus.unsplash.com/premium_photo-1750107641946-b29e9cd1b39b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    price: "€30,000",
    image:
      "https://images.unsplash.com/photo-1751517298236-b9150faa3dfd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    price: "€7,077",
    image:
      "https://plus.unsplash.com/premium_photo-1751547854487-96c1ece782b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    price: "€4,800",
    image:
      "https://images.unsplash.com/photo-1751510288461-2d088d6bf76d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AuctionSection() {
  return (
    <section className="p-6 bg-white">
      <div className="text-left mb-4">
        <h2 className="text-3xl font-bold text-blue-700 leading-snug">
          Summer Escapes <br />
          <span className="text-black">Watches Auction</span>
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          4 – 12 July 2025
          <br />
          Summer-ready watches for explorers, jetsetters and style-savvy
          adventurers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="border rounded p-2 text-center shadow hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={watch.image}
                alt={`Watch ${watch.id}`}
                className="mx-auto h-48 object-contain"
              />
              <button className="absolute top-2 right-2 text-blue-500 hover:text-red-500">
                ♡
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">CURRENT BID</p>
            <p className="font-semibold">{watch.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
