import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaRegStar,
  FaGem,
  FaPaintBrush,
  FaHome,
  FaRegClock,
  FaTshirt,
  FaCoins,
  FaBookOpen,
  FaCarSide,
  FaWineBottle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { MdWatch } from "react-icons/md";

const filters = [
  { label: "This week", route: "", icon: <FaRegClock /> },
  { label: "For you", route: "for-you", icon: <FaRegStar /> },
  { label: "Trending", route: "trending", icon: <FaGem /> },
  { label: "Art", route: "art", icon: <FaPaintBrush /> },
  { label: "Interiors", route: "interiors", icon: <FaHome /> },
  { label: "Jewellery", route: "jewellery", icon: <GiDiamondRing /> },
  { label: "Watches", route: "wat", icon: <MdWatch /> },
  { label: "Fashion", route: "fashion", icon: <FaTshirt /> },
  { label: "Coins & Stamps", route: "coins-stamps", icon: <FaCoins /> },
  { label: "Comics", route: "comics", icon: <FaBookOpen /> },
  { label: "Cars & Bikes", route: "cars-bikes", icon: <FaCarSide /> },
  { label: "Wine & Spirits", route: "wine-spirits", icon: <FaWineBottle /> },
  { label: "Tech", route: "tech", icon: <FaRegClock /> },
];

export default function FilterNavigation() {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const location = useLocation();

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -200 : 200;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    updateButtons(); // initial check
    if (el) {
      el.addEventListener("scroll", updateButtons);
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateButtons);
    };
  }, []);

  // useEffect(() => {
  //   const path = location.pathname;
  //   const matchIndex = filters.findIndex((item) =>
  //     path === "/" && item.route === ""
  //       ? true
  //       : path.includes(`/filter/${item.route}`)
  //   );
  //   setActiveIndex(matchIndex !== -1 ? matchIndex : 0);
  // }, [location]);
  useEffect(() => {
    const path = location.pathname;

    // Extract the last part of the URL
    const routeSegment = path.startsWith("/filter/")
      ? path.replace("/filter/", "")
      : "";

    const matchIndex = filters.findIndex((item) => item.route === routeSegment);

    setActiveIndex(matchIndex !== -1 ? matchIndex : 0);
  }, [location]);

  return (
    <div className="relative w-full bg-white py-3">
      {/* Left Arrow (hidden on mobile) */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Scrollable Filter Bar */}
      <div
        ref={scrollRef}
        className="mx-4 sm:mx-10 flex gap-2 px-2 overflow-x-auto no-scrollbar"
      >
        {filters.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (item.route === "") {
                navigate("/");
              } else {
                navigate(`/filter/${item.route}`);
              }
            }}
            className={`flex flex-col items-center justify-start  
    w-[70px] sm:w-[90px] h-[70px] sm:h-[80px] shrink-0 pt-3
    text-xs sm:text-sm text-center 
    border-b-4 transition 
    ${
      activeIndex === idx
        ? "text-blue-600 font-semibold border-blue-600"
        : "text-gray-600 hover:text-blue-600 hover:border-gray-300 border-transparent"
    }`}
          >
            <span className="text-xl sm:text-2xl mb-1">{item.icon}</span>
            <span className="leading-tight break-words mb-4 sm:mb-5">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Right Arrow (hidden on mobile) */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
