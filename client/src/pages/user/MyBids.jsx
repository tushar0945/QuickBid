import React from "react";

const mockBids = [
  {
    id: 1,
    productImage: "https://via.placeholder.com/100",
    productName: "Apple iPhone 15 Pro Max",
    currentBid: 85000,
    bidStatus: "Winning",
    timeRemaining: "2h 30m",
  },
  {
    id: 2,
    productImage: "https://via.placeholder.com/129",
    productName: "Sony WH-1000XM5 Headphones",
    currentBid: 24500,
    bidStatus: "Outbid",
    timeRemaining: "Ended",
  },
  {
    id: 3,
    productImage: "https://via.placeholder.com/100",
    productName: "Gaming Laptop - Ryzen 7",
    currentBid: 71500,
    bidStatus: "Winning",
    timeRemaining: "1d 4h",
  },
];

export default function MyBids() {
  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Bids</h2>

      {mockBids.length === 0 ? (
        <p className="text-gray-500">You haven’t placed any bids yet.</p>
      ) : (
        <div className="space-y-4">
          {mockBids.map((bid) => (
            <div
              key={bid.id}
              className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-md transition"
            >
              <img
                src={bid.productImage}
                alt={bid.productName}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{bid.productName}</h3>
                <p className="text-gray-600 text-sm">
                  Current Bid: ₹{bid.currentBid.toLocaleString()}
                </p>
                <p
                  className={`text-sm font-medium mt-1 ${
                    bid.bidStatus === "Winning"
                      ? "text-green-600"
                      : bid.bidStatus === "Outbid"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  Status: {bid.bidStatus}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {bid.timeRemaining === "Ended" ? (
                  <span className="text-red-500 font-medium">Ended</span>
                ) : (
                  <span>⏳ {bid.timeRemaining}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
