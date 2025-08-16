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
        `/api/auction/highest/${product._id}`
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

      const { data } = await axiosInstance.post("/api/auction/bids", {
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
