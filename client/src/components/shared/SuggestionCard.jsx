import React from "react";

export default function SuggestionCard({ item }) {
  return (
    <div className="w-full h-72 md:h-[360px] bg-white rounded shadow hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Image Section */}
      <div className="h-[65%]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-t"
        />
      </div>

      {/* Text Section */}
      <div className="flex-grow flex flex-col justify-center px-3 pt-2 pb-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 truncate">{item.details}</p>
        <p className="text-sm mt-1 font-bold text-blue-700">€{item.price}</p>
        <p className="text-xs text-gray-400">{item.timeLeft}</p>
      </div>
    </div>
  );
}
