import React, { useRef } from "react";
import SuggestionCard from "./SuggestionCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const suggestions = [
  {
    image:
      "https://images.unsplash.com/photo-1752035680973-79d3836f317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Nintendo Gameboy Classic",
    details: "Super Mario Land FRG rarest...",
    price: "240",
    timeLeft: "7 days left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750595132287-5a2368a7fdef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Pokemon Graded Card",
    details: "Umbreon 215 Alternate Art...",
    price: "3300",
    timeLeft: "5 days left",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1751861490548-e1356e06f470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    title: "Zenith Chronomaster",
    details: "Piece Unique 1/1",
    price: "61000",
    timeLeft: "6 days left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1752035680973-79d3836f317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Nintendo Gameboy Classic",
    details: "Super Mario Land FRG rarest...",
    price: "240",
    timeLeft: "7 days left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750595132287-5a2368a7fdef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Pokemon Graded Card",
    details: "Umbreon 215 Alternate Art...",
    price: "3300",
    timeLeft: "5 days left",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1751861490548-e1356e06f470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    title: "Zenith Chronomaster",
    details: "Piece Unique 1/1",
    price: "61000",
    timeLeft: "6 days left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1752035680973-79d3836f317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    title: "Nintendo Gameboy Classic",
    details: "Super Mario Land FRG rarest...",
    price: "240",
    timeLeft: "7 days left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750595132287-5a2368a7fdef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    title: "Pokemon Graded Card",
    details: "Umbreon 215 Alternate Art...",
    price: "3300",
    timeLeft: "5 days left",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1751861490548-e1356e06f470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    title: "Zenith Chronomaster",
    details: "Piece Unique 1/1",
    price: "61000",
    timeLeft: "6 days left",
  },
  // Add more items
];

export default function SuggestionsCarousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 bg-white px-4">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black font-serif">
          You might also like
        </h2>

        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-2"
        >
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 snap-start px-2"
            >
              <SuggestionCard item={item} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
