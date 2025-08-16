import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

import {
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineUserCircle,
  HiOutlineLockClosed,
} from "react-icons/hi";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/api/bids/product/${id}`);
        // console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleLike = () => setLikes(likes + 1);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (product?.image?.length || 1));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (product?.image?.length || 1)) %
        (product?.image?.length || 1)
    );
  };

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 px-4">
      {/* Left Section */}
      <div className="w-full lg:w-[900px] rounded-md py-4">
        <p className="text-base ml-2 font-semibold text-gray-800 underline">
          {product.category.toUpperCase()}
        </p>

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

        <p className="ml-2 mt-1 text-gray-600 text-base">
          {product.description}
        </p>

        {/* Image Gallery */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.images.map((src, index) => (
            <div
              key={index}
              onClick={() => openViewer(index)}
              className={`cursor-pointer ${
                product.images.length === 1
                  ? "sm:col-span-2 mx-auto w-full"
                  : ""
              } ${
                product.images.length % 2 !== 0 &&
                index === product.images.length - 1
                  ? "sm:col-span-2 mx-auto w-full"
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
      </div>

      {/* Right Panel (same as your current) */}
      {/* KEEP your current right panel for bids and protection info unchanged */}
      {/* Right Side Panel */}
      <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
        {/* Bid Box */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
          <p className="text-sm text-gray-500 mb-1">Estimate</p>
          <p className="text-xl font-semibold text-gray-900 mb-2">
            € 1,200 - € 1,500
          </p>

          <div className="flex justify-between gap-2 mb-3">
            <button className="border px-4 py-1 rounded-full text-gray-700">
              € 104
            </button>
            <button className="border px-4 py-1 rounded-full text-gray-700">
              € 456
            </button>
            <button className="border px-4 py-1 rounded-full text-gray-700">
              € 912
            </button>
          </div>

          <input
            type="text"
            placeholder="€ 104 or up"
            disabled
            className="w-full px-3 py-2 border text-gray-400 bg-gray-100 rounded mb-3"
          />

          <div className="flex gap-2 mb-4">
            <button className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded">
              Place bid
            </button>
            <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
              Set max bid
            </button>
          </div>

          <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
            19 other people are watching this object
          </p>

          <div className="text-sm text-gray-800 space-y-1">
            <div className="flex justify-between">
              <span className="font-bold text-green-700">🇮🇹 Bidder O014</span>
              <span className="text-gray-500">1 sec ago</span>
              <span className="font-semibold">€99</span>
            </div>
            <div className="flex justify-between">
              <span>🇫🇷 Bidder O627</span>
              <span className="text-gray-500">21 h ago</span>
              <span>€85</span>
            </div>
            <div className="flex justify-between">
              <span>🇨🇿 Bidder 9999</span>
              <span className="text-gray-500">21 h ago</span>
              <span>€80</span>
            </div>
          </div>

          <p className="text-blue-600 text-sm mt-2 cursor-pointer">
            See all bids (25) ▼
          </p>
        </div>

        {/* Buyer Protection Box */}
        <div className="border border-green-500 rounded-md p-4 w-full text-sm">
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineShieldCheck className="text-green-600 text-xl" />
            <span className="text-green-600 font-semibold text-base">
              QuickBid Buyer Protection
            </span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <HiOutlineLockClosed className="text-gray-500 text-lg" />
            <p className="text-gray-800">Your payment is safe</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <HiOutlineCheckCircle className="text-gray-500 text-lg" />
            <p className="text-gray-800">All objects are quality checked</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <HiOutlineUserCircle className="text-gray-500 text-lg" />
            <p className="text-gray-800">All sellers are verified</p>
          </div>

          <p className="text-blue-600 font-medium mt-2 cursor-pointer">
            Learn more &rsaquo;
          </p>
        </div>
      </div>

      {/* Modal Viewer */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
          >
            <FaChevronLeft />
          </button>

          <img
            src={product.images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={nextSlide}
            className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
