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
        const res = await axiosInstance.get("/api/slides");
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
