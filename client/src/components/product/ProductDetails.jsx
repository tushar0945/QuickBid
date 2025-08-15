// import React, { useState, useEffect } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
// import axiosInstance from "../../api/axiosInstance";

// import { BiShareAlt } from "react-icons/bi";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useParams } from "react-router-dom";

// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";

// const img1 =
//   "https://plus.unsplash.com/premium_photo-1668864134609-a790b7615a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D";
// const img2 =
//   "https://plus.unsplash.com/premium_photo-1666324534331-9ac58fcd4eaa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// const img3 =
//   "https://plus.unsplash.com/premium_photo-1700166984667-dcec68ef58e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D";
// const img4 =
//   "https://plus.unsplash.com/premium_photo-1719537437497-eb3b69c6c7b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8";

// export default function ProductDetails() {
//   const [likes, setLikes] = useState(0);
//   const [isViewerOpen, setIsViewerOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleLike = () => setLikes(likes + 1);

//   const images = [img1, img2, img3, img4];

//   const openViewer = (index) => {
//     setCurrentIndex(index);
//     setIsViewerOpen(true);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 px-4">
//       {/* Left Section */}
//       <div className="w-full lg:w-[900px] rounded-md py-4">
//         <p className="text-base ml-2 font-semibold text-gray-800 underline">
//           Snackers Private Collection of Religious Decor
//         </p>

//         <div className="mt-3 ml-2 text-2xl font-semibold text-gray-900 flex items-center gap-3 flex-wrap">
//           <span>Monstrance, Neo-Gothic, silver, Poussielgue-Rusand,</span>

//           <div
//             onClick={handleLike}
//             className="flex items-center cursor-pointer select-none"
//           >
//             <AiOutlineHeart className="text-blue-600 text-2xl" />
//             <span className="ml-1 text-gray-700">{likes}</span>
//           </div>

//           <BiShareAlt className="text-blue-600 text-2xl cursor-pointer" />
//           <span>&nbsp;Paris - Silver - 1850-1900</span>
//         </div>

//         {/* Image Gallery */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {images.map((src, index) => (
//             <div
//               key={index}
//               onClick={() => openViewer(index)}
//               className={`cursor-pointer ${
//                 images.length === 1 ? "sm:col-span-2 mx-auto w-full" : ""
//               } ${
//                 images.length % 2 !== 0 && index === images.length - 1
//                   ? "sm:col-span-2 mx-auto w-full"
//                   : ""
//               }`}
//             >
//               <img
//                 src={src}
//                 alt={`image-${index}`}
//                 className="w-full h-[280px] object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side Panel */}
//       <div className="w-full lg:w-[340px] flex flex-col items-center gap-4">
//         {/* Bid Box */}
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//           <p className="text-sm text-gray-500 mb-1">Estimate</p>
//           <p className="text-xl font-semibold text-gray-900 mb-2">
//             € 1,200 - € 1,500
//           </p>

//           <div className="flex justify-between gap-2 mb-3">
//             <button className="border px-4 py-1 rounded-full text-gray-700">
//               € 104
//             </button>
//             <button className="border px-4 py-1 rounded-full text-gray-700">
//               € 456
//             </button>
//             <button className="border px-4 py-1 rounded-full text-gray-700">
//               € 912
//             </button>
//           </div>

//           <input
//             type="text"
//             placeholder="€ 104 or up"
//             disabled
//             className="w-full px-3 py-2 border text-gray-400 bg-gray-100 rounded mb-3"
//           />

//           <div className="flex gap-2 mb-4">
//             <button className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded">
//               Place bid
//             </button>
//             <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//               Set max bid
//             </button>
//           </div>

//           <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//             19 other people are watching this object
//           </p>

//           <div className="text-sm text-gray-800 space-y-1">
//             <div className="flex justify-between">
//               <span className="font-bold text-green-700">🇮🇹 Bidder O014</span>
//               <span className="text-gray-500">1 sec ago</span>
//               <span className="font-semibold">€99</span>
//             </div>
//             <div className="flex justify-between">
//               <span>🇫🇷 Bidder O627</span>
//               <span className="text-gray-500">21 h ago</span>
//               <span>€85</span>
//             </div>
//             <div className="flex justify-between">
//               <span>🇨🇿 Bidder 9999</span>
//               <span className="text-gray-500">21 h ago</span>
//               <span>€80</span>
//             </div>
//           </div>

//           <p className="text-blue-600 text-sm mt-2 cursor-pointer">
//             See all bids (25) ▼
//           </p>
//         </div>

//         {/* Buyer Protection Box */}
//         <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//           <div className="flex items-center gap-2 mb-4">
//             <HiOutlineShieldCheck className="text-green-600 text-xl" />
//             <span className="text-green-600 font-semibold text-base">
//               QuickBid Buyer Protection
//             </span>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineLockClosed className="text-gray-500 text-lg" />
//             <p className="text-gray-800">Your payment is safe</p>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//             <p className="text-gray-800">All objects are quality checked</p>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineUserCircle className="text-gray-500 text-lg" />
//             <p className="text-gray-800">All sellers are verified</p>
//           </div>

//           <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//             Learn more &rsaquo;
//           </p>
//         </div>
//       </div>

//       {/* Modal Viewer */}
//       {isViewerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//           <button
//             onClick={() => setIsViewerOpen(false)}
//             className="absolute top-4 right-6 text-white text-3xl font-bold"
//           >
//             &times;
//           </button>

//           <button
//             onClick={prevSlide}
//             className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//           >
//             <FaChevronLeft />
//           </button>

//           <img
//             src={images[currentIndex]}
//             alt={`slide-${currentIndex}`}
//             className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
//           />

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function ProductDetails() {
//   const { id } = useParams(); // Get ID from URL
//   const [product, setProduct] = useState(null);
//   const [likes, setLikes] = useState(0);
//   const [isViewerOpen, setIsViewerOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axiosInstance.get(
//           `http://localhost:5000/api/bids/product/${id}`
//         );
//         console.log(res.data);
//         setProduct(res.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <p className="p-8">Loading product...</p>;

//   const openViewer = (index) => {
//     setCurrentIndex(index);
//     setIsViewerOpen(true);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % product.images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + product.images.length) % product.images.length
//     );
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 px-4">
//       {/* LEFT SECTION */}
//       <div className="w-full lg:w-[900px] rounded-md py-4">
//         <p className="text-base ml-2 font-semibold text-gray-800 underline">
//           {product.description}
//         </p>

//         <div className="mt-3 ml-2 text-2xl font-semibold text-gray-900 flex items-center gap-3 flex-wrap">
//           <span>{product.title}</span>

//           <div
//             onClick={() => setLikes((prev) => prev + 1)}
//             className="flex items-center cursor-pointer select-none"
//           >
//             <AiOutlineHeart className="text-blue-600 text-2xl" />
//             <span className="ml-1 text-gray-700">{likes}</span>
//           </div>

//           <BiShareAlt className="text-blue-600 text-2xl cursor-pointer" />
//           <span>&nbsp;Paris - Silver - 1850-1900</span>
//         </div>

//         {/* Image Gallery */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {product.images.map((src, index) => (
//             <div
//               key={index}
//               onClick={() => openViewer(index)}
//               className={`cursor-pointer ${
//                 product.images.length === 1
//                   ? "sm:col-span-2 mx-auto w-full"
//                   : ""
//               } ${
//                 product.images.length % 2 !== 0 &&
//                 index === product.images.length - 1
//                   ? "sm:col-span-2 mx-auto w-full"
//                   : ""
//               }`}
//             >
//               <img
//                 src={src}
//                 alt={`image-${index}`}
//                 className="w-full h-[280px] object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="w-full lg:w-[340px] flex flex-col items-center gap-4">
//         {/* BID BOX */}
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//           <p className="text-sm text-gray-500 mb-1">Estimate</p>
//           <p className="text-xl font-semibold text-gray-900 mb-2">
//             € {product.estimate.min} - € {product.estimate.max}
//           </p>

//           <div className="flex justify-between gap-2 mb-3">
//             {[104, 456, 912].map((val) => (
//               <button
//                 key={val}
//                 className="border px-4 py-1 rounded-full text-gray-700"
//               >
//                 € {val}
//               </button>
//             ))}
//           </div>

//           <input
//             type="text"
//             placeholder="€ 104 or up"
//             disabled
//             className="w-full px-3 py-2 border text-gray-400 bg-gray-100 rounded mb-3"
//           />

//           <div className="flex gap-2 mb-4">
//             <button className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded">
//               Place bid
//             </button>
//             <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//               Set max bid
//             </button>
//           </div>

//           <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//             {product.watchingCount} other people are watching this object
//           </p>

//           <div className="text-sm text-gray-800 space-y-1">
//             {product.bids.map((bid, index) => (
//               <div key={index} className="flex justify-between">
//                 <span className={index === 0 ? "font-bold text-green-700" : ""}>
//                   {bid.country} Bidder {bid.bidder}
//                 </span>
//                 <span className="text-gray-500">{bid.timeAgo}</span>
//                 <span className="font-semibold">€{bid.amount}</span>
//               </div>
//             ))}
//           </div>

//           <p className="text-blue-600 text-sm mt-2 cursor-pointer">
//             See all bids (25) ▼
//           </p>
//         </div>

//         {/* BUYER PROTECTION BOX */}
//         <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//           <div className="flex items-center gap-2 mb-4">
//             <HiOutlineShieldCheck className="text-green-600 text-xl" />
//             <span className="text-green-600 font-semibold text-base">
//               QuickBid Buyer Protection
//             </span>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineLockClosed className="text-gray-500 text-lg" />
//             <p className="text-gray-800">Your payment is safe</p>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//             <p className="text-gray-800">All objects are quality checked</p>
//           </div>

//           <div className="flex items-center gap-2 mb-2">
//             <HiOutlineUserCircle className="text-gray-500 text-lg" />
//             <p className="text-gray-800">All sellers are verified</p>
//           </div>

//           <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//             Learn more &rsaquo;
//           </p>
//         </div>
//       </div>

//       {/* Modal Viewer */}
//       {isViewerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//           <button
//             onClick={() => setIsViewerOpen(false)}
//             className="absolute top-4 right-6 text-white text-3xl font-bold"
//           >
//             &times;
//           </button>

//           <button
//             onClick={prevSlide}
//             className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//           >
//             <FaChevronLeft />
//           </button>

//           <img
//             src={product.images[currentIndex]}
//             alt={`slide-${currentIndex}`}
//             className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
//           />

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaRegClock } from "react-icons/fa6";
// import { AiOutlineHeart } from "react-icons/ai";
// import { BiShareAlt } from "react-icons/bi";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`/api/products/${id}`);
//         setProduct({
//           ...res.data,
//           images: res.data.image || [], // use correct key
//           watchingCount: 9, // temporary mock value
//           estimate: { min: 7000, max: 8500 }, // mock estimate
//           bids: [
//             { country: "DE", bidder: "#9087", amount: 8000, timeAgo: "2h ago" },
//             { country: "FR", bidder: "#1290", amount: 7800, timeAgo: "5h ago" },
//           ],
//         });
//       } catch (err) {
//         console.log("Error fetching product:", err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <div className="text-center mt-20">Loading...</div>;

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Image Gallery */}
//         <div className="grid grid-cols-2 gap-4">
//           {product.images.slice(0, 4).map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`Product Image ${i + 1}`}
//               className="w-full h-60 object-cover rounded-lg"
//             />
//           ))}
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <p className="text-gray-700 mb-2">{product.description}</p>
//           {product.estimate && (
//             <p className="text-xl font-semibold text-gray-900 mb-2">
//               € {product.estimate.min} - € {product.estimate.max}
//             </p>
//           )}
//           <p className="text-sm text-gray-500 mb-4">
//             Category: {product.category}
//           </p>
//           <p className="text-sm text-gray-500 mb-2">
//             <FaRegClock className="inline-block mr-1" />
//             Auction ends in:{" "}
//             <span className="text-black font-medium">1d 5h</span>
//           </p>
//           <p className="text-sm text-gray-500 mb-4">
//             {product.watchingCount} watching now
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-black text-white px-4 py-2 rounded-md">
//               Place Bid
//             </button>
//             <button className="text-gray-600">
//               <AiOutlineHeart size={24} />
//             </button>
//             <button className="text-gray-600">
//               <BiShareAlt size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bid History */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">Bid History</h2>
//         <ul className="divide-y divide-gray-200">
//           {product.bids.map((bid, i) => (
//             <li
//               key={i}
//               className="py-3 flex justify-between text-sm text-gray-700"
//             >
//               <span>
//                 {bid.country} - Bidder {bid.bidder}
//               </span>
//               <span>
//                 €{bid.amount} ({bid.timeAgo})
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

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
        const response = await axiosInstance.get(`/bids/product/${id}`);
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
