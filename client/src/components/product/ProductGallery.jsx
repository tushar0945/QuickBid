import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductGallery({ product }) {
  const [likes, setLikes] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % product.images.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  return (
    <div className="w-full lg:w-[900px] rounded-md py-4">
      {/* Category */}
      <p className="text-base ml-2 font-semibold text-gray-800 underline">
        {product.category?.toUpperCase()}
      </p>

      {/* Title + Like + Share */}
      <div className="mt-3 ml-2 text-2xl font-semibold text-gray-900 flex items-center gap-3 flex-wrap">
        <span>{product.title}</span>
        <div
          onClick={handleLike}
          className="flex items-center cursor-pointer select-none"
        >
          <AiOutlineHeart className="text-blue-600 text-2xl" />
          <span className="ml-1 text-gray-700">{likes}</span>
        </div>
        <BiShareAlt className="text-blue-600 text-2xl cursor-pointer" />
      </div>

      {/* Description */}
      <p className="ml-2 mt-1 text-gray-600 text-base">{product.description}</p>

      {/* Desktop Grid */}
      <div className="hidden sm:grid mt-6 grid-cols-2 gap-4">
        {product.images.map((src, index) => (
          <div
            key={index}
            onClick={() => openViewer(index)}
            className={`cursor-pointer ${
              product.images.length === 1 ? "col-span-2 mx-auto w-full" : ""
            } ${
              product.images.length % 2 !== 0 &&
              index === product.images.length - 1
                ? "col-span-2 mx-auto w-full"
                : ""
            }`}
          >
            <img
              src={src}
              alt={`product-img-${index}`}
              className="w-full h-[280px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Mobile Single Image with +X Badge */}
      <div className="block sm:hidden mt-6 relative">
        {product.images.length > 0 && (
          <div className="relative">
            <img
              src={product.images[0]}
              alt="Product"
              className="w-full h-[280px] object-cover rounded-lg cursor-pointer"
              onClick={() => openViewer(0)}
            />
            {product.images.length > 1 && (
              <div
                className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs cursor-pointer"
                onClick={() => openViewer(0)}
              >
                +{product.images.length - 1} images
              </div>
            )}
          </div>
        )}
      </div>

      {/* Full-screen Viewer */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          {product.images.length > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronLeft />
            </button>
          )}

          <img
            src={product.images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          {product.images.length > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
