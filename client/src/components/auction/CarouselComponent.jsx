// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronRight } from "react-icons/fa";

// const slides = [
//   {
//     title: "Summer Jewellery",
//     subtitle: "Collection",
//     description:
//       "Celebrate summer’s bold beauty with radiant pearls, fiery rubies, and sunlit peridot.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1750604543641-a9396d17e69b?w=600&auto=format&fit=crop&q=60",
//     category: "art-life",
//   },
//   {
//     title: "Retro Tech",
//     subtitle: "Collection",
//     description: "Travel back to the future with iconic tech nostalgia.",
//     image:
//       "https://plus.unsplash.com/premium_photo-1751470114909-4f20df5cbd81?w=600&auto=format&fit=crop&q=60",
//     category: "modern-expression",
//   },
//   {
//     title: "Racing Watches",
//     subtitle: "Collection",
//     description:
//       "Celebrate the enduring connection between watchmaking and motorsport.",
//     image:
//       "https://images.unsplash.com/photo-1751606973289-18652a0cfdb9?w=600&auto=format&fit=crop&q=60",
//     category: "past-present",
//   },
//   {
//     title: "Re-imagining the",
//     subtitle: "Classics Collection",
//     description:
//       "A selection of contemporary art inspired by Impressionism, Cubism, and Symbolism.",
//     image:
//       "https://images.unsplash.com/photo-1751606973289-18652a0cfdb9?w=600&auto=format&fit=crop&q=60",
//     category: "past-present",
//   },
// ];

// export default function CarouselComponent({ onCategoryChange }) {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     onCategoryChange(slides[current].category); // notify parent on mount and change
//   }, [current]);

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setDirection(1);
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//   };

//   const resetInterval = () => {
//     clearInterval(intervalRef.current);
//     startAutoSlide();
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % slides.length);
//     resetInterval();
//   };

//   const goToSlide = (index) => {
//     setDirection(index > current ? 1 : -1);
//     setCurrent(index);
//     resetInterval();
//   };

//   const variants = {
//     enter: (dir) => ({ y: dir > 0 ? 100 : -100, opacity: 0 }),
//     center: { y: 0, opacity: 1 },
//     exit: (dir) => ({ y: dir > 0 ? -100 : 100, opacity: 0 }),
//   };

//   return (
//     <div className="w-full px-4 py-6 md:py-12">
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
//         {/* Text Section */}
//         <div className="md:w-1/2 w-full space-y-4 mb-6 md:mb-0">
//           <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-600">
//             {slides[current].title}
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold">
//             {slides[current].subtitle}
//           </h3>
//           <p className="text-gray-500">{slides[current].description}</p>

//           {/* Dots + Arrow */}
//           <div className="flex gap-3 pt-4 items-center">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-1 w-10 rounded-full transition-all ${
//                   index === current ? "bg-blue-600" : "bg-gray-200"
//                 }`}
//               ></button>
//             ))}
//             <button onClick={nextSlide} className="text-blue-600 text-xl ml-4">
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Image Section (hidden on small screens) */}
//         <div className="md:w-1/2 w-full h-64 md:h-80 relative overflow-hidden hidden md:block">
//           <AnimatePresence custom={direction}>
//             <motion.img
//               key={current}
//               src={slides[current].image}
//               alt="carousel"
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6 }}
//               className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//             />
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaChevronRight } from "react-icons/fa";
// import axiosInstance from "../../api/axiosInstance"; // Adjust path based on your project
// // e.g. "../api/axiosInstance" or "../../api/axiosInstance"

// export default function CarouselComponent({ onCategoryChange }) {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef(null);

//   // Fetch slides from backend
//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const res = await axiosInstance.get("/slides");
//         // console.log(res.data);
//         setSlides(res.data);
//         onCategoryChange(res.data[0]?.slug); // use slug from backend
//       } catch (err) {
//         console.error("Error fetching slides:", err);
//       }
//     };
//     fetchSlides();
//   }, []);

//   // Notify parent when current slide changes
//   useEffect(() => {
//     if (slides.length > 0) {
//       onCategoryChange(slides[current]?.slug);
//     }
//   }, [current, slides]);

//   // Auto slide logic
//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setDirection(1);
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//   };

//   const resetInterval = () => {
//     clearInterval(intervalRef.current);
//     startAutoSlide();
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % slides.length);
//     resetInterval();
//   };

//   const goToSlide = (index) => {
//     setDirection(index > current ? 1 : -1);
//     setCurrent(index);
//     resetInterval();
//   };

//   const variants = {
//     enter: (dir) => ({ y: dir > 0 ? 100 : -100, opacity: 0 }),
//     center: { y: 0, opacity: 1 },
//     exit: (dir) => ({ y: dir > 0 ? -100 : 100, opacity: 0 }),
//   };
//   if (slides.length === 0) return null;

//   const currentSlide = slides[current] ?? slides[0];
//   if (!currentSlide) return null;

//   return (
//     <div className="w-full px-4 py-6 md:py-12">
//       <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
//         {/* Text Section */}
//         <div className="md:w-1/2 w-full space-y-4 mb-6 md:mb-0">
//           <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-600">
//             {currentSlide.title || "Untitled"}
//           </h2>
//           <h3 className="text-3xl md:text-4xl font-bold">
//             {currentSlide.subtitle || "No subtitle"}
//           </h3>
//           <p className="text-gray-500">
//             {currentSlide.description || "No description."}
//           </p>

//           <div className="flex gap-3 pt-4 items-center">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-1 w-10 rounded-full transition-all ${
//                   index === current ? "bg-blue-600" : "bg-gray-200"
//                 }`}
//               ></button>
//             ))}
//             <button onClick={nextSlide} className="text-blue-600 text-xl ml-4">
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 w-full h-64 md:h-80 relative overflow-hidden hidden md:block">
//           <AnimatePresence custom={direction}>
//             <motion.img
//               key={current}
//               src={currentSlide.image || ""}
//               alt="carousel"
//               custom={direction}
//               variants={variants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6 }}
//               className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
//             />
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import axiosInstance from "../../api/axiosInstance";

export default function CarouselComponent({ onCategoryChange }) {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  // Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axiosInstance.get("/slides");
        setSlides(res.data);
        if (res.data[0]?.slug) {
          onCategoryChange(res.data[0].slug); // use slug from backend
        }
      } catch (err) {
        console.error("Error fetching slides:", err);
      }
    };
    fetchSlides();
  }, [onCategoryChange]);

  // Notify parent when current slide changes
  useEffect(() => {
    if (slides.length > 0 && slides[current]?.slug) {
      onCategoryChange(slides[current].slug);
    }
  }, [current, slides, onCategoryChange]);

  // Auto slide logic: only start interval when slides are loaded
  useEffect(() => {
    if (slides.length === 0) return;

    // Start auto-slide
    startAutoSlide();

    // Cleanup on unmount or if slides change
    return () => {
      clearInterval(intervalRef.current);
    };
    // Only depend on slides (not []), so it re-runs if slides change (e.g. after fetch)
  }, [slides]);

  const startAutoSlide = () => {
    // Always clear any existing interval before setting a new one
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) =>
        slides.length > 0 ? (prev + 1) % slides.length : 0
      );
    }, 5000);
  };

  const resetInterval = () => {
    startAutoSlide();
  };

  const nextSlide = () => {
    if (slides.length > 0) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
      resetInterval();
    }
  };

  const goToSlide = (index) => {
    if (slides.length > 0) {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      resetInterval();
    }
  };

  const variants = {
    enter: (dir) => ({ y: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  if (slides.length === 0) return null;
  const currentSlide = slides[current] ?? slides[0];
  if (!currentSlide) return null;

  return (
    <div className="w-full px-4 py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 w-full space-y-4 mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-600">
            {currentSlide.title || "Untitled"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            {currentSlide.subtitle || "No subtitle"}
          </h3>
          <p className="text-gray-500">
            {currentSlide.description || "No description."}
          </p>

          <div className="flex gap-3 pt-4 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 w-10 rounded-full transition-all ${
                  index === current ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></button>
            ))}
            <button onClick={nextSlide} className="text-blue-600 text-xl ml-4">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-80 relative overflow-hidden hidden md:block">
          <AnimatePresence custom={direction}>
            <motion.img
              key={current}
              src={currentSlide.image || ""}
              alt="carousel"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
