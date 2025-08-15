// // import React, { useRef } from "react";
// import { useRef, useState, useEffect } from "react";

// import {
//   FaRegStar,
//   FaGem,
//   FaPaintBrush,
//   FaHome,
//   FaRegClock,
//   FaTshirt,
//   FaCoins,
//   FaBookOpen,
//   FaCarSide,
//   FaWineBottle,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { GiDiamondRing } from "react-icons/gi";
// import { MdWatch } from "react-icons/md";

// const filters = [
//   { label: "This week", icon: <FaRegClock /> },
//   { label: "For you", icon: <FaRegStar /> },
//   { label: "Trending", icon: <FaGem /> },
//   { label: "Art", icon: <FaPaintBrush /> },
//   { label: "Interiors", icon: <FaHome /> },
//   { label: "Jewellery", icon: <GiDiamondRing /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   { label: "This week", icon: <FaRegClock /> },
//   { label: "For you", icon: <FaRegStar /> },
//   { label: "Trending", icon: <FaGem /> },
//   { label: "Art", icon: <FaPaintBrush /> },
//   { label: "Interiors", icon: <FaHome /> },
//   { label: "Jewellery", icon: <GiDiamondRing /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
// ];

// export default function FilterNavigation() {
//   const scrollRef = useRef();

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full  bg-white  py-2">
//       {/* Left Arrow */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Scrollable Filter Bar */}
//       <div
//         ref={scrollRef}
//         className="mx-10 flex gap-10 px-4 overflow-x-auto no-scrollbar "
//       >
//         {filters.map((item, idx) => (
//           <button
//             key={idx}
//             className={`flex flex-col items-center justify-center w-24 h-20 rounded-md text-sm  hover:text-blue-600 focus:text-blue-600 ${
//               idx === 0 ? "text-blue-600 font-semibold " : ""
//             }`}
//           >
//             <span className="text-xl mb-1">{item.icon}</span>
//             <span className="truncate text-center">{item.label}</span>
//           </button>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// }

// import { useRef, useState } from "react";

// import {
//   FaRegStar,
//   FaGem,
//   FaPaintBrush,
//   FaHome,
//   FaRegClock,
//   FaTshirt,
//   FaCoins,
//   FaBookOpen,
//   FaCarSide,
//   FaWineBottle,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { GiDiamondRing } from "react-icons/gi";
// import { MdWatch } from "react-icons/md";

// const filters = [
//   { label: "This week", icon: <FaRegClock /> },
//   { label: "For you", icon: <FaRegStar /> },
//   { label: "Trending", icon: <FaGem /> },
//   { label: "Art", icon: <FaPaintBrush /> },
//   { label: "Interiors", icon: <FaHome /> },
//   { label: "Jewellery", icon: <GiDiamondRing /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   { label: "This week", icon: <FaRegClock /> },
//   { label: "For you", icon: <FaRegStar /> },
//   { label: "Trending", icon: <FaGem /> },
//   { label: "Art", icon: <FaPaintBrush /> },
//   { label: "Interiors", icon: <FaHome /> },
//   { label: "Jewellery", icon: <GiDiamondRing /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   // You can keep duplicating if needed...
// ];

// export default function FilterNavigation() {
//   const scrollRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full bg-white py-2">
//       {/* Left Arrow */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Scrollable Filter Bar */}
//       <div
//         ref={scrollRef}
//         className="mx-10 flex gap-10 px-4 overflow-x-auto no-scrollbar"
//       >
//         {filters.map((item, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveIndex(idx)}
//             className={`flex flex-col items-center justify-center w-24 h-20 rounded-md text-sm hover:text-blue-600 focus:text-blue-600 transition ${
//               activeIndex === idx ? "text-blue-600 font-semibold" : ""
//             }`}
//           >
//             <span className="text-xl mb-1">{item.icon}</span>
//             <span className="truncate text-center">{item.label}</span>
//           </button>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import {
//   FaRegStar,
//   FaGem,
//   FaPaintBrush,
//   FaHome,
//   FaRegClock,
//   FaTshirt,
//   FaCoins,
//   FaBookOpen,
//   FaCarSide,
//   FaWineBottle,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { GiDiamondRing } from "react-icons/gi";
// import { MdWatch } from "react-icons/md";

// const filters = [
//   { label: "This week", icon: <FaRegClock /> },
//   { label: "For you", icon: <FaRegStar /> },
//   { label: "Trending", icon: <FaGem /> },
//   { label: "Art", icon: <FaPaintBrush /> },
//   { label: "Interiors", icon: <FaHome /> },
//   { label: "Jewellery", icon: <GiDiamondRing /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   { label: "Extra", icon: <FaRegClock /> },
//   { label: "More", icon: <FaGem /> },
//   { label: "Watches", icon: <MdWatch /> },
//   { label: "Fashion", icon: <FaTshirt /> },
//   { label: "Coins & Stamps", icon: <FaCoins /> },
//   { label: "Comics", icon: <FaBookOpen /> },
//   { label: "Cars & Bikes", icon: <FaCarSide /> },
//   { label: "Wine & Spirits", icon: <FaWineBottle /> },
//   { label: "Extra", icon: <FaRegClock /> },
//   { label: "More", icon: <FaGem /> },
// ];

// export default function FilterNavigation() {
//   const scrollRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showLeft, setShowLeft] = useState(false);
//   const [showRight, setShowRight] = useState(true);

//   const scroll = (direction) => {
//     const el = scrollRef.current;
//     if (el) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       el.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const updateButtons = () => {
//     const el = scrollRef.current;
//     if (!el) return;

//     const { scrollLeft, scrollWidth, clientWidth } = el;
//     setShowLeft(scrollLeft > 0);
//     setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     updateButtons(); // check on mount
//     if (el) {
//       el.addEventListener("scroll", updateButtons);
//     }
//     return () => {
//       if (el) {
//         el.removeEventListener("scroll", updateButtons);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative w-full bg-white py-2">
//       {/* Left Arrow */}
//       {showLeft && (
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//         >
//           <FaChevronLeft />
//         </button>
//       )}

//       {/* Scrollable Filter Bar */}
//       <div
//         ref={scrollRef}
//         className="mx-10 flex gap-2 px-2 overflow-x-auto no-scrollbar"
//       >
//         {filters.map((item, idx) => (
//           <button
//             key={idx}
//             onClick={() => setActiveIndex(idx)}
//             className={`flex flex-col items-center justify-start
//   w-[90px] h-[80px] shrink-0 pt-3
//    text-xs text-center
//   border-b-4 transition
//   ${
//     activeIndex === idx
//       ? "text-blue-600 font-semibold border-blue-600"
//       : "text-gray-600 hover:text-blue-600 hover:border-gray-300 border-transparent"
//   }`}
//           >
//             <span className="text-2xl mb-1">{item.icon}</span>
//             <span className="leading-tight break-words mb-5">{item.label}</span>
//           </button>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       {showRight && (
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
//         >
//           <FaChevronRight />
//         </button>
//       )}
//     </div>
//   );
// }

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
