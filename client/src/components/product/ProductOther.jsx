import React from "react";
import { FaFacebookF, FaPinterestP, FaQuestionCircle } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";

export default function ProductOther({ product }) {
  if (!product) return null;

  // Left column details
  const leftDetails = [
    { label: "Signature", value: product.signature },
    { label: "Era", value: product.era },
    { label: "Country of Origin", value: product.countryOfOrigin },
    { label: "Material", value: product.material },
    { label: "Height", value: product.height ? `${product.height} cm` : null },
    { label: "Width", value: product.width ? `${product.width} cm` : null },
    { label: "Depth", value: product.depth ? `${product.depth} cm` : null },
  ];

  // Right column details
  const rightDetails = [
    { label: "Condition", value: product.condition },
    { label: "Category", value: product.category },
    { label: "Number of Items", value: product.numberOfItems },
    {
      label: "Starting Price",
      value: product.startingPrice ? `$${product.startingPrice}` : null,
    },
    {
      label: "Reserve Price",
      value: product.reservePrice ? `$${product.reservePrice}` : null,
    },
    { label: "Auction Duration", value: product.auctionDuration },
    { label: "Delivery Method", value: product.deliveryMethod },
  ];

  return (
    <div className="text-center mt-10 text-gray-600 text-sm border-t pt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {/* Left Column */}
        <div className="bg-white text-left p-4 rounded shadow-sm">
          <p className="text-xl font-semibold text-black mb-6">Details</p>
          <div className="grid gap-5">
            {leftDetails.map((item, idx) => (
              <div key={idx}>
                <p className="uppercase text-xs text-gray-500">{item.label}</p>
                <p className="text-black font-medium">{item.value || "N/A"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white text-left p-4 rounded shadow-sm">
          <div className="grid gap-5">
            {rightDetails.map((item, idx) => (
              <div key={idx}>
                <p className="uppercase text-xs text-gray-500">{item.label}</p>
                <p className="text-black font-medium">{item.value || "N/A"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Third Box - Questions & Share */}
        <div className="bg-white text-left p-4 rounded shadow-sm">
          <p className="text-black font-semibold text-base mb-2">
            Any questions?
          </p>
          <div className="flex items-start gap-2 mb-4">
            <FaQuestionCircle className="text-black text-lg mt-1" />
            <a
              href="#"
              className="text-gray-500 underline hover:text-gray-700 text-sm"
            >
              Get in touch via our Help Centre
            </a>
          </div>

          <p className="text-black font-semibold text-base mb-3">
            Share this object with your friends
          </p>

          <div className="flex gap-3">
            <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
              <FaFacebookF className="text-blue-600 text-xl" />
            </div>
            <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
              <PiXLogoBold className="text-black text-xl" />
            </div>
            <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
              <FaPinterestP className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
