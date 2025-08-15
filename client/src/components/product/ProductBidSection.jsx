// import React from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";

// export default function ProductBidSection({ product }) {
//   return (
//     <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
//       {/* Bid Box */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//         <p className="text-sm text-gray-500 mb-1">Starting Price</p>
//         <p className="text-xl font-semibold text-gray-900 mb-2">
//           € {product.startingPrice}
//         </p>

//         <input
//           type="text"
//           placeholder={`€ ${product.startingPrice} or up`}
//           className="w-full px-3 py-2 border rounded mb-3"
//         />

//         <div className="flex gap-2 mb-4">
//           <button className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded">
//             Place bid
//           </button>
//           <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//             Set max bid
//           </button>
//         </div>

//         <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//           19 people are watching this
//         </p>
//       </div>

//       {/* Buyer Protection Box */}
//       <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <HiOutlineShieldCheck className="text-green-600 text-xl" />
//           <span className="text-green-600 font-semibold text-base">
//             QuickBid Buyer Protection
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineLockClosed className="text-gray-500 text-lg" />
//           <p className="text-gray-800">Your payment is safe</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All objects are quality checked</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineUserCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All sellers are verified</p>
//         </div>

//         <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//           Learn more &rsaquo;
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";
// import axiosInstance from "../../api/axiosInstance";

// export default function ProductBidSection({ product }) {
//   const [bidAmount, setBidAmount] = useState("");
//   const [highestBid, setHighestBid] = useState(
//     product.currentPrice || product.startingPrice
//   );
//   const [isPlacingBid, setIsPlacingBid] = useState(false);
//   const [message, setMessage] = useState("");

//   // Optional: Poll for live updates
//   useEffect(() => {
//     const interval = setInterval(async () => {
//       try {
//         const { data } = await axiosInstance.get(
//           `/bids/highest/${product._id}`
//         );
//         if (data.highestBid > highestBid) {
//           setHighestBid(data.highestBid);
//         }
//       } catch (err) {
//         console.error("Error fetching highest bid:", err);
//       }
//     }, 5000); // every 5 seconds

//     return () => clearInterval(interval);
//   }, [highestBid, product._id]);

//   const handlePlaceBid = async () => {
//     if (!bidAmount || isNaN(bidAmount)) {
//       setMessage("Please enter a valid number.");
//       return;
//     }
//     if (Number(bidAmount) <= highestBid) {
//       setMessage(`Bid must be higher than € ${highestBid}`);
//       return;
//     }

//     try {
//       setIsPlacingBid(true);
//       setMessage("");

//       const { data } = await axiosInstance.post("/bids", {
//         itemId: product._id,
//         amount: Number(bidAmount),
//       });

//       setHighestBid(data.newHighestBid);
//       setBidAmount("");
//       setMessage("✅ Bid placed successfully!");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to place bid. Please try again.");
//     } finally {
//       setIsPlacingBid(false);
//     }
//   };

//   return (
//     <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
//       {/* Bid Box */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//         <p className="text-sm text-gray-500 mb-1">Current Price</p>
//         <p className="text-xl font-semibold text-gray-900 mb-2">
//           € {highestBid}
//         </p>

//         <input
//           type="number"
//           value={bidAmount}
//           onChange={(e) => setBidAmount(e.target.value)}
//           placeholder={`€ ${highestBid + 1} or up`}
//           className="w-full px-3 py-2 border rounded mb-3"
//         />

//         <div className="flex gap-2 mb-4">
//           <button
//             className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded"
//             onClick={handlePlaceBid}
//             disabled={isPlacingBid}
//           >
//             {isPlacingBid ? "Placing..." : "Place bid"}
//           </button>
//           <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//             Set max bid
//           </button>
//         </div>

//         {message && (
//           <p
//             className={`text-xs px-2 py-1 rounded mb-2 ${
//               message.startsWith("✅")
//                 ? "bg-green-100 text-green-800"
//                 : "bg-pink-100 text-pink-800"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//           19 people are watching this
//         </p>
//       </div>

//       {/* Buyer Protection Box */}
//       <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <HiOutlineShieldCheck className="text-green-600 text-xl" />
//           <span className="text-green-600 font-semibold text-base">
//             QuickBid Buyer Protection
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineLockClosed className="text-gray-500 text-lg" />
//           <p className="text-gray-800">Your payment is safe</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All objects are quality checked</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineUserCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All sellers are verified</p>
//         </div>

//         <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//           Learn more &rsaquo;
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function ProductBidSection({ product, highestBidder }) {
//   const [bidAmount, setBidAmount] = useState("");
//   const [maxBidAmount, setMaxBidAmount] = useState("");
//   const [message, setMessage] = useState("");

//   // Sample preset bid amounts just above highest bid
//   const presets = [
//     highestBidder.currentBid + 20,
//     highestBidder.currentBid + 30,
//     highestBidder.currentBid + 40,
//   ];

//   const handlePresetClick = (amount) => {
//     setBidAmount(amount);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
//       {/* Current Bid */}
//       <p className="text-xs uppercase text-gray-500 tracking-widest">
//         Current Bid
//       </p>
//       <div className="text-4xl font-bold mt-1 mb-2">
//         € {highestBidder.currentBid}
//       </div>

//       {/* Reserve Price Status */}
//       <p className="text-sm text-green-700 font-semibold mb-4">
//         Reserve price met
//       </p>

//       {/* Expert Selector */}
//       <div className="flex items-center mb-5 gap-3">
//         <img
//           src={highestBidder.avatar}
//           alt={highestBidder.name}
//           className="w-12 h-12 rounded-full border-2 border-blue-600"
//         />
//         <div>
//           <p className="font-semibold">
//             Selected by {highestBidder.name}
//             <span className="ml-2 text-blue-600 cursor-pointer">›</span>
//           </p>
//           <span className="inline-block bg-blue-600 text-white px-1 rounded text-xs mt-1">
//             Expert
//           </span>
//         </div>
//       </div>

//       {/* Estimate */}
//       <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-gray-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-4h.01M12 6v.01M12 12v.01M12 18v.01"
//           />
//         </svg>
//         <p>
//           Estimate € {product.estimateMin} – € {product.estimateMax}
//         </p>
//       </div>

//       {/* Preset bid buttons */}
//       <div className="flex gap-3 mb-4">
//         {presets.map((amount) => (
//           <button
//             key={amount}
//             onClick={() => handlePresetClick(amount)}
//             className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
//           >
//             € {amount}
//           </button>
//         ))}
//       </div>

//       {/* Bid input */}
//       <input
//         type="number"
//         value={bidAmount}
//         onChange={(e) => setBidAmount(e.target.value)}
//         placeholder={`€ ${presets[0]} or up`}
//         className="w-full px-4 py-2 mb-4 border rounded text-gray-500 bg-gray-100 cursor-not-allowed"
//         disabled
//       />

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button className="flex-1 border border-blue-600 text-blue-600 font-semibold rounded py-2 hover:bg-blue-50">
//           Place bid
//         </button>
//         <button className="flex-1 bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-700">
//           Set max bid
//         </button>
//       </div>

//       {/* Optional message */}
//       {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function ProductBidSection() {
//   // Mock product data inside component
//   const product = {
//     estimateMin: 2000,
//     estimateMax: 3500,
//   };

//   // Mock highestBidder data inside component
//   const highestBidder = {
//     currentBid: 1000,
//     avatar: "https://i.pravatar.cc/150?img=5",
//     name: "John Doe",
//   };

//   const [bidAmount, setBidAmount] = useState("");
//   const [maxBidAmount, setMaxBidAmount] = useState("");
//   const [message, setMessage] = useState("");

//   // Preset bids based on highestBidder's current bid
//   const presets = [
//     highestBidder.currentBid + 20,
//     highestBidder.currentBid + 30,
//     highestBidder.currentBid + 40,
//   ];

//   const handlePresetClick = (amount) => {
//     setBidAmount(amount);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
//       {/* Current Bid */}
//       <p className="text-xs uppercase text-gray-500 tracking-widest">
//         Current Bid
//       </p>
//       <div className="text-4xl font-bold mt-1 mb-2">
//         € {highestBidder.currentBid}
//       </div>

//       {/* Reserve Price Status */}
//       <p className="text-sm text-green-700 font-semibold mb-4">
//         Reserve price met
//       </p>

//       {/* Expert Selector */}
//       <div className="flex items-center mb-5 gap-3">
//         <img
//           src={highestBidder.avatar}
//           alt={highestBidder.name}
//           className="w-12 h-12 rounded-full border-2 border-blue-600"
//         />
//         <div>
//           <p className="font-semibold">
//             Selected by {highestBidder.name}
//             <span className="ml-2 text-blue-600 cursor-pointer">›</span>
//           </p>
//           <span className="inline-block bg-blue-600 text-white px-1 rounded text-xs mt-1">
//             Expert
//           </span>
//         </div>
//       </div>

//       {/* Estimate */}
//       <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-gray-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M13 16h-1v-4h-1m1-4h.01M12 6v.01M12 12v.01M12 18v.01"
//           />
//         </svg>
//         <p>
//           Estimate € {product.estimateMin} – € {product.estimateMax}
//         </p>
//       </div>

//       {/* Preset bid buttons */}
//       <div className="flex gap-3 mb-4">
//         {presets.map((amount) => (
//           <button
//             key={amount}
//             onClick={() => handlePresetClick(amount)}
//             className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
//           >
//             € {amount}
//           </button>
//         ))}
//       </div>

//       {/* Bid input */}
//       <input
//         type="number"
//         value={bidAmount}
//         onChange={(e) => setBidAmount(e.target.value)}
//         placeholder={`€ ${presets[0]} or up`}
//         className="w-full px-4 py-2 mb-4 border rounded text-gray-500 bg-gray-100 cursor-not-allowed"
//         disabled
//       />

//       {/* Buttons */}
//       <div className="flex gap-4">
//         <button className="flex-1 border border-blue-600 text-blue-600 font-semibold rounded py-2 hover:bg-blue-50">
//           Place bid
//         </button>
//         <button className="flex-1 bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-700">
//           Set max bid
//         </button>
//       </div>

//       {/* Optional message */}
//       {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";
// import axiosInstance from "../../api/axiosInstance";

// export default function ProductBidSection({ product }) {
//   const [bidAmount, setBidAmount] = useState("");
//   const [highestBid, setHighestBid] = useState(
//     product.currentPrice || product.startingPrice
//   );
//   const [isPlacingBid, setIsPlacingBid] = useState(false);
//   const [message, setMessage] = useState("");
//   const currentUserId = JSON.parse(localStorage.getItem("user"))?._id || null;
//   console.log(currentUserId);
//   // Preset bids just above the current highest bid
//   const presets = [highestBid + 20, highestBid + 30, highestBid + 40];

//   // Poll for highest bid updates every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(async () => {
//       try {
//         const { data } = await axiosInstance.get(
//           `/auction/highest/${product._id}`
//         );
//         if (data.highestBid > highestBid) {
//           setHighestBid(data.highestBid);
//         }
//       } catch (err) {
//         console.error("Error fetching highest bid:", err);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [highestBid, product._id]);

//   const handlePlaceBid = async () => {
//     if (!bidAmount || isNaN(bidAmount)) {
//       setMessage("Please enter a valid number.");
//       return;
//     }
//     if (Number(bidAmount) <= highestBid) {
//       setMessage(`Bid must be higher than € ${highestBid}`);
//       return;
//     }

//     try {
//       setIsPlacingBid(true);
//       setMessage("");

//       const { data } = await axiosInstance.post("/auction/bids", {
//         itemId: product._id,
//         amount: Number(bidAmount),
//         userId: currentUserId,
//       });

//       setHighestBid(data.newHighestBid);
//       setBidAmount("");
//       setMessage("✅ Bid placed successfully!");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to place bid. Please try again.");
//     } finally {
//       setIsPlacingBid(false);
//     }
//   };

//   const handlePresetClick = (amount) => {
//     setBidAmount(amount);
//     setMessage("");
//   };

//   return (
//     <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
//       {/* Bid Box */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//         <p className="text-sm text-gray-500 mb-1">Current Price</p>
//         <p className="text-xl font-semibold text-gray-900 mb-2">
//           € {highestBid}
//         </p>

//         {/* Preset bid buttons */}
//         <div className="flex gap-2 mb-4">
//           {presets.map((amount) => (
//             <button
//               key={amount}
//               onClick={() => handlePresetClick(amount)}
//               className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 text-sm"
//             >
//               € {amount}
//             </button>
//           ))}
//         </div>

//         <input
//           type="number"
//           value={bidAmount}
//           onChange={(e) => setBidAmount(e.target.value)}
//           placeholder={`€ ${highestBid + 1} or up`}
//           className="w-full px-3 py-2 border rounded mb-3"
//         />

//         <div className="flex gap-2 mb-4">
//           <button
//             className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded"
//             onClick={handlePlaceBid}
//             disabled={isPlacingBid}
//           >
//             {isPlacingBid ? "Placing..." : "Place bid"}
//           </button>
//           <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//             Set max bid
//           </button>
//         </div>

//         {message && (
//           <p
//             className={`text-xs px-2 py-1 rounded mb-2 ${
//               message.startsWith("✅")
//                 ? "bg-green-100 text-green-800"
//                 : "bg-pink-100 text-pink-800"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//           19 people are watching this
//         </p>
//       </div>

//       {/* Buyer Protection Box */}
//       <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <HiOutlineShieldCheck className="text-green-600 text-xl" />
//           <span className="text-green-600 font-semibold text-base">
//             QuickBid Buyer Protection
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineLockClosed className="text-gray-500 text-lg" />
//           <p className="text-gray-800">Your payment is safe</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All objects are quality checked</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineUserCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All sellers are verified</p>
//         </div>

//         <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//           Learn more &rsaquo;
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";
// import axiosInstance from "../../api/axiosInstance";

// export default function ProductBidSection({ product }) {
//   const [bidAmount, setBidAmount] = useState("");
//   const [highestBid, setHighestBid] = useState(
//     product.currentPrice || product.startingPrice
//   );
//   const [highestBidder, setHighestBidder] = useState(
//     product.lastBidder || null
//   );
//   const [isPlacingBid, setIsPlacingBid] = useState(false);
//   const [message, setMessage] = useState("");
//   const currentUserId = JSON.parse(localStorage.getItem("user"))?._id || null;

//   // Calculate preset bids based on current highest bid
//   const getPresets = (current) => [current + 20, current + 30, current + 40];
//   const [presets, setPresets] = useState(getPresets(highestBid));

//   // Function to fetch latest highest bid + bidder
//   const fetchHighestBid = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `/auction/highest/${product._id}`
//       );
//       if (data.highestBid !== highestBid) {
//         // console.log("Data", data);
//         setHighestBid(data.highestBid);
//         setPresets(getPresets(data.highestBid));
//       }
//       if (data.highestBidder) {
//         setHighestBidder(data.highestBidder);
//       }
//     } catch (err) {
//       console.error("Error fetching highest bid:", err);
//     }
//   };

//   //   console.log(highestBidder);

//   // Poll for updates every 5 seconds
//   useEffect(() => {
//     fetchHighestBid();
//     const interval = setInterval(fetchHighestBid, 5000);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [highestBid, product._id]);

//   const handlePlaceBid = async () => {
//     if (!bidAmount || isNaN(bidAmount)) {
//       setMessage("Please enter a valid number.");
//       return;
//     }
//     if (Number(bidAmount) <= highestBid) {
//       setMessage(`Bid must be higher than € ${highestBid}`);
//       return;
//     }

//     try {
//       setIsPlacingBid(true);
//       setMessage("");

//       const { data } = await axiosInstance.post("/auction/bids", {
//         itemId: product._id,
//         amount: Number(bidAmount),
//         userId: currentUserId,
//       });

//       // Update UI with new bid and bidder from backend
//       setHighestBid(data.newHighestBid);
//       setPresets(getPresets(data.newHighestBid));
//       if (data.highestBidder) {
//         setHighestBidder(data.highestBidder);
//       }

//       setBidAmount("");
//       setMessage("✅ Bid placed successfully!");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to place bid. Please try again.");
//     } finally {
//       setIsPlacingBid(false);
//     }
//     fetchHighestBid();
//   };

//   const handlePresetClick = (amount) => {
//     setBidAmount(amount);
//     setMessage("");
//   };

//   return (
//     <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
//       {/* Bid Box */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//         <p className="text-sm text-gray-500 mb-1">Current Price</p>
//         <p className="text-xl font-semibold text-gray-900 mb-2">
//           € {highestBid}
//         </p>

//         {/* Show highest bidder */}
//         {highestBidder && (
//           <div className="flex items-center gap-2 mb-3">
//             <img
//               src={highestBidder.avatar || "../../user/userAvtar.jpg"}
//               alt={highestBidder.firstName}
//               className="w-8 h-8 rounded-full border"
//             />
//             <span className="text-sm text-gray-700">
//               Highest Bidder: <strong>{highestBidder.firstName}</strong>
//             </span>
//           </div>
//         )}

//         {/* Preset bid buttons */}
//         <div className="flex gap-2 mb-4">
//           {presets.map((amount) => (
//             <button
//               key={amount}
//               onClick={() => handlePresetClick(amount)}
//               className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 text-sm"
//             >
//               € {amount}
//             </button>
//           ))}
//         </div>

//         <input
//           type="number"
//           value={bidAmount}
//           onChange={(e) => setBidAmount(e.target.value)}
//           placeholder={`€ ${highestBid + 1} or up`}
//           className="w-full px-3 py-2 border rounded mb-3"
//         />

//         <div className="flex gap-2 mb-4">
//           <button
//             className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded"
//             onClick={handlePlaceBid}
//             disabled={isPlacingBid}
//           >
//             {isPlacingBid ? "Placing..." : "Place bid"}
//           </button>
//           <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
//             Set max bid
//           </button>
//         </div>

//         {message && (
//           <p
//             className={`text-xs px-2 py-1 rounded mb-2 ${
//               message.startsWith("✅")
//                 ? "bg-green-100 text-green-800"
//                 : "bg-pink-100 text-pink-800"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//           19 people are watching this
//         </p>
//       </div>

//       {/* Buyer Protection Box */}
//       <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <HiOutlineShieldCheck className="text-green-600 text-xl" />
//           <span className="text-green-600 font-semibold text-base">
//             QuickBid Buyer Protection
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineLockClosed className="text-gray-500 text-lg" />
//           <p className="text-gray-800">Your payment is safe</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All objects are quality checked</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineUserCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All sellers are verified</p>
//         </div>

//         <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//           Learn more &rsaquo;
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   HiOutlineShieldCheck,
//   HiOutlineCheckCircle,
//   HiOutlineUserCircle,
//   HiOutlineLockClosed,
// } from "react-icons/hi";
// import axiosInstance from "../../api/axiosInstance";

// export default function ProductBidSection({ product }) {
//   const [bidAmount, setBidAmount] = useState("");
//   const [highestBid, setHighestBid] = useState(
//     product.currentPrice || product.startingPrice
//   );
//   const [highestBidder, setHighestBidder] = useState(
//     product.lastBidder || null
//   );
//   const [endDate, setEndDate] = useState(product.endDate || null); // ⬅ auction end time
//   const [timeLeft, setTimeLeft] = useState("");
//   const [auctionEnded, setAuctionEnded] = useState(false);

//   const [isPlacingBid, setIsPlacingBid] = useState(false);
//   const [message, setMessage] = useState("");
//   const currentUserId = JSON.parse(localStorage.getItem("user"))?._id || null;

//   // Calculate preset bids based on current highest bid
//   const getPresets = (current) => [current + 20, current + 30, current + 40];
//   const [presets, setPresets] = useState(getPresets(highestBid));

//   // Function to fetch latest highest bid + bidder + end date
//   const fetchHighestBid = async () => {
//     try {
//       const { data } = await axiosInstance.get(
//         `/auction/highest/${product._id}`
//       );
//       if (data.highestBid !== highestBid) {
//         setHighestBid(data.highestBid);
//         setPresets(getPresets(data.highestBid));
//       }
//       if (data.highestBidder) {
//         setHighestBidder(data.highestBidder);
//       }
//       if (data.endDate) {
//         setEndDate(data.endDate);
//       }
//     } catch (err) {
//       console.error("Error fetching highest bid:", err);
//     }
//   };

//   // Poll for updates every 5 seconds
//   useEffect(() => {
//     fetchHighestBid();
//     const interval = setInterval(fetchHighestBid, 5000);
//     return () => clearInterval(interval);
//   }, [highestBid, product._id]);

//   // Live countdown timer
//   useEffect(() => {
//     if (!endDate) return;
//     const interval = setInterval(() => {
//       const now = new Date();
//       const end = new Date(endDate);
//       const diff = end - now;

//       if (diff <= 0) {
//         setTimeLeft("Auction ended");
//         setAuctionEnded(true);
//         clearInterval(interval);
//         return;
//       }

//       const hours = Math.floor(diff / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//       setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [endDate]);

//   const handlePlaceBid = async () => {
//     if (auctionEnded) {
//       setMessage("❌ Auction has ended. No more bids allowed.");
//       return;
//     }
//     if (!bidAmount || isNaN(bidAmount)) {
//       setMessage("Please enter a valid number.");
//       return;
//     }
//     if (Number(bidAmount) <= highestBid) {
//       setMessage(`Bid must be higher than € ${highestBid}`);
//       return;
//     }

//     try {
//       setIsPlacingBid(true);
//       setMessage("");

//       const { data } = await axiosInstance.post("/auction/bids", {
//         itemId: product._id,
//         amount: Number(bidAmount),
//         userId: currentUserId,
//       });

//       setHighestBid(data.newHighestBid);
//       setPresets(getPresets(data.newHighestBid));
//       if (data.highestBidder) {
//         setHighestBidder(data.highestBidder);
//       }

//       setBidAmount("");
//       setMessage("✅ Bid placed successfully!");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to place bid. Please try again.");
//     } finally {
//       setIsPlacingBid(false);
//     }
//     fetchHighestBid();
//   };

//   const handlePresetClick = (amount) => {
//     setBidAmount(amount);
//     setMessage("");
//   };

//   return (
//     <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
//       {/* Bid Box */}
//       <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
//         {/* Auction countdown */}
//         {timeLeft && (
//           <div className="text-red-600 font-semibold text-lg mb-3">
//             Closes in: {timeLeft}
//           </div>
//         )}

//         <p className="text-sm text-gray-500 mb-1">Current Price</p>
//         <p className="text-xl font-semibold text-gray-900 mb-2">
//           € {highestBid}
//         </p>

//         {/* Show highest bidder */}
//         {highestBidder && (
//           <div className="flex items-center gap-2 mb-3">
//             <img
//               src={highestBidder.avatar || "../../user/userAvtar.jpg"}
//               alt={highestBidder.firstName}
//               className="w-8 h-8 rounded-full border"
//             />
//             <span className="text-sm text-gray-700">
//               Highest Bidder: <strong>{highestBidder.firstName}</strong>
//             </span>
//           </div>
//         )}

//         {/* Preset bid buttons */}
//         <div className="flex gap-2 mb-4">
//           {presets.map((amount) => (
//             <button
//               key={amount}
//               onClick={() => handlePresetClick(amount)}
//               disabled={auctionEnded}
//               className={`border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 text-sm ${
//                 auctionEnded ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               € {amount}
//             </button>
//           ))}
//         </div>

//         <input
//           type="number"
//           value={bidAmount}
//           onChange={(e) => setBidAmount(e.target.value)}
//           placeholder={`€ ${highestBid + 1} or up`}
//           className="w-full px-3 py-2 border rounded mb-3"
//           disabled={auctionEnded}
//         />

//         <div className="flex gap-2 mb-4">
//           <button
//             className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded"
//             onClick={handlePlaceBid}
//             disabled={isPlacingBid || auctionEnded}
//           >
//             {isPlacingBid
//               ? "Placing..."
//               : auctionEnded
//               ? "Auction ended"
//               : "Place bid"}
//           </button>
//           <button
//             className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded"
//             disabled={auctionEnded}
//           >
//             Set max bid
//           </button>
//         </div>

//         {message && (
//           <p
//             className={`text-xs px-2 py-1 rounded mb-2 ${
//               message.startsWith("✅")
//                 ? "bg-green-100 text-green-800"
//                 : "bg-pink-100 text-pink-800"
//             }`}
//           >
//             {message}
//           </p>
//         )}

//         <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
//           19 people are watching this
//         </p>
//       </div>

//       {/* Buyer Protection Box */}
//       <div className="border border-green-500 rounded-md p-4 w-full text-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <HiOutlineShieldCheck className="text-green-600 text-xl" />
//           <span className="text-green-600 font-semibold text-base">
//             QuickBid Buyer Protection
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineLockClosed className="text-gray-500 text-lg" />
//           <p className="text-gray-800">Your payment is safe</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineCheckCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All objects are quality checked</p>
//         </div>

//         <div className="flex items-center gap-2 mb-2">
//           <HiOutlineUserCircle className="text-gray-500 text-lg" />
//           <p className="text-gray-800">All sellers are verified</p>
//         </div>

//         <p className="text-blue-600 font-medium mt-2 cursor-pointer">
//           Learn more &rsaquo;
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineUserCircle,
  HiOutlineLockClosed,
} from "react-icons/hi";
import axiosInstance from "../../api/axiosInstance";

export default function ProductBidSection({ product }) {
  const [bidAmount, setBidAmount] = useState("");
  const [highestBid, setHighestBid] = useState(
    product.currentPrice || product.startingPrice
  );
  const [highestBidder, setHighestBidder] = useState(
    product.lastBidder || null
  );
  const [endDate, setEndDate] = useState(product.endDate || null); // ⬅ auction end time
  const [timeLeft, setTimeLeft] = useState("");
  const [auctionEnded, setAuctionEnded] = useState(false);

  const [isPlacingBid, setIsPlacingBid] = useState(false);
  const [message, setMessage] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user")) || null;
  const currentUserId = currentUser?._id || null;
  const currentUserRole = currentUser?.role || null; // get role

  // Determine if user can place a bid
  const canBid = currentUserRole === "user";

  // Calculate preset bids based on current highest bid
  const getPresets = (current) => [current + 20, current + 30, current + 40];
  const [presets, setPresets] = useState(getPresets(highestBid));

  // Function to fetch latest highest bid + bidder + end date
  const fetchHighestBid = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/auction/highest/${product._id}`
      );
      if (data.highestBid !== highestBid) {
        setHighestBid(data.highestBid);
        setPresets(getPresets(data.highestBid));
      }
      if (data.highestBidder) {
        setHighestBidder(data.highestBidder);
      }
      if (data.endDate) {
        setEndDate(data.endDate);
      }
    } catch (err) {
      console.error("Error fetching highest bid:", err);
    }
  };

  // Poll for updates every 5 seconds
  useEffect(() => {
    fetchHighestBid();
    const interval = setInterval(fetchHighestBid, 5000);
    return () => clearInterval(interval);
  }, [highestBid, product._id]);

  // Live countdown timer
  useEffect(() => {
    if (!endDate) return;
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endDate);
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("Auction ended");
        setAuctionEnded(true);
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const handlePlaceBid = async () => {
    if (auctionEnded) {
      setMessage("❌ Auction has ended. No more bids allowed.");
      return;
    }
    if (!bidAmount || isNaN(bidAmount)) {
      setMessage("Please enter a valid number.");
      return;
    }
    if (Number(bidAmount) <= highestBid) {
      setMessage(`Bid must be higher than € ${highestBid}`);
      return;
    }

    try {
      setIsPlacingBid(true);
      setMessage("");

      const { data } = await axiosInstance.post("/auction/bids", {
        itemId: product._id,
        amount: Number(bidAmount),
        userId: currentUserId,
      });

      setHighestBid(data.newHighestBid);
      setPresets(getPresets(data.newHighestBid));
      if (data.highestBidder) {
        setHighestBidder(data.highestBidder);
      }

      setBidAmount("");
      setMessage("✅ Bid placed successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to place bid. Please try again.");
    } finally {
      setIsPlacingBid(false);
    }
    fetchHighestBid();
  };

  const handlePresetClick = (amount) => {
    setBidAmount(amount);
    setMessage("");
  };

  return (
    <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
      {/* Bid Box */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
        {/* Auction countdown */}
        {timeLeft && (
          <div className="text-red-600 font-semibold text-lg mb-3">
            Closes in: {timeLeft}
          </div>
        )}

        <p className="text-sm text-gray-500 mb-1">Current Price</p>
        <p className="text-xl font-semibold text-gray-900 mb-2">
          € {highestBid}
        </p>

        {/* Show highest bidder */}
        {highestBidder && (
          <div className="flex items-center gap-2 mb-3">
            <img
              src={highestBidder.avatar || "../../user/userAvtar.jpg"}
              alt={highestBidder.firstName}
              className="w-8 h-8 rounded-full border"
            />
            <span className="text-sm text-gray-700">
              Highest Bidder: <strong>{highestBidder.firstName}</strong>
            </span>
          </div>
        )}

        {/* Preset bid buttons */}
        <div className="flex gap-2 mb-4">
          {presets.map((amount) => (
            <button
              key={amount}
              onClick={() => handlePresetClick(amount)}
              disabled={auctionEnded}
              className={`border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 text-sm ${
                auctionEnded ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              € {amount}
            </button>
          ))}
        </div>

        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder={`€ ${highestBid + 1} or up`}
          className="w-full px-3 py-2 border rounded mb-3"
          disabled={auctionEnded || !canBid} // disable if auction ended or not a user
        />

        <div className="flex gap-2 mb-4">
          <button
            className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded"
            onClick={handlePlaceBid}
            disabled={isPlacingBid || auctionEnded || !canBid} // disable for sellers/admin
          >
            {isPlacingBid
              ? "Placing..."
              : auctionEnded
              ? "Auction ended"
              : !canBid
              ? "Only users can bid"
              : "Place bid"}
          </button>

          <button
            className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded"
            disabled={auctionEnded || !canBid}
          >
            Set max bid
          </button>
        </div>

        {message && (
          <p
            className={`text-xs px-2 py-1 rounded mb-2 ${
              message.startsWith("✅")
                ? "bg-green-100 text-green-800"
                : "bg-pink-100 text-pink-800"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded mb-2">
          19 people are watching this
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
  );
}
