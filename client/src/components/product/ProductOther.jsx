// import React from "react";
// import { FaFacebookF, FaPinterestP, FaQuestionCircle } from "react-icons/fa";
// import { PiXLogoBold } from "react-icons/pi";

// export default function ProductOther() {
//   return (
//     <div className="text-center mt-10 text-gray-600 text-sm border-t pt-4">
//       <div className="flex gap-12 justify-center">
//         {/* Left Column: Details */}
//         <div className="bg-white text-left p-4 w-[400px]">
//           <p className="text-xl font-semibold text-black mb-6">Details</p>
//           <div className="grid grid-cols-1 gap-5">
//             <div>
//               <p className="uppercase text-xs text-gray-500">Pearl type</p>
//               <p className="text-black font-medium">Akoya cultured pearl</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Laboratory report
//               </p>
//               <p className="text-black font-medium">No laboratory report</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Diamond type of surrounding stones
//               </p>
//               <p className="text-black font-medium">Natural</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">Metal</p>
//               <p className="text-black font-medium">White gold</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Cutting style of surrounding stones
//               </p>
//               <p className="text-black font-medium">Brilliant cut</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Number of diamonds surrounding stones
//               </p>
//               <p className="text-black font-medium">28</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">Main stone</p>
//               <p className="text-black font-medium">Pearl</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: More Details */}
//         <div className="bg-white text-left p-4 w-[400px]">
//           <div className="grid grid-cols-1 gap-5">
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Shape of surrounding stones
//               </p>
//               <p className="text-black font-medium">Round</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">Era</p>
//               <p className="text-black font-medium">After 2000</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Total carat weight of all stones
//               </p>
//               <p className="text-black font-medium">0.08</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">Fineness</p>
//               <p className="text-black font-medium">18 kt.</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">Brand jewellery</p>
//               <p className="text-black font-medium">No</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Number of pearls
//               </p>
//               <p className="text-black font-medium">6</p>
//             </div>
//             <div>
//               <p className="uppercase text-xs text-gray-500">
//                 Total carat weight of surrounding stones
//               </p>
//               <p className="text-black font-medium">0.08</p>
//             </div>
//           </div>
//         </div>

//         {/* Third Box: Questions and Sharing */}
//         <div className="bg-white text-left p-4 w-[250px] rounded shadow-sm">
//           <p className="text-black font-semibold text-base mb-2">
//             Any questions?
//           </p>
//           <div className="flex items-start gap-2 mb-4">
//             <FaQuestionCircle className="text-black text-lg mt-1" />
//             <a
//               href="#"
//               className="text-gray-500 underline hover:text-gray-700 text-sm"
//             >
//               Get in touch via our Help Centre
//             </a>
//           </div>

//           <p className="text-black font-semibold text-base mb-3">
//             Share this object with your friends
//           </p>

//           <div className="flex gap-3">
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <FaFacebookF className="text-blue-600 text-xl" />
//             </div>
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <PiXLogoBold className="text-black text-xl" />
//             </div>
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <FaPinterestP className="text-red-600 text-xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { FaFacebookF, FaPinterestP, FaQuestionCircle } from "react-icons/fa";
// import { PiXLogoBold } from "react-icons/pi";

// export default function ProductOther({ product }) {
//   if (!product) return null;

//   // Left column details
//   const leftDetails = [
//     { label: "Signature", value: product.signature },
//     { label: "Era", value: product.era },
//     { label: "Country of Origin", value: product.countryOfOrigin },
//     { label: "Material", value: product.material },
//     { label: "Height", value: `${product.height} cm` },
//     { label: "Width", value: `${product.width} cm` },
//     { label: "Depth", value: `${product.depth} cm` },
//   ];

//   // Right column details
//   const rightDetails = [
//     { label: "Condition", value: product.condition },
//     { label: "Category", value: product.category },
//     { label: "Number of Items", value: product.numberOfItems },
//     { label: "Starting Price", value: `$${product.startingPrice}` },
//     { label: "Reserve Price", value: `$${product.reservePrice}` },
//     { label: "Auction Duration", value: product.auctionDuration },
//     { label: "Delivery Method", value: product.deliveryMethod },
//   ];

//   return (
//     <div className="text-center mt-10 text-gray-600 text-sm border-t pt-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
//         {/* Left Column */}
//         <div className="bg-white text-left p-4 rounded shadow-sm">
//           <p className="text-xl font-semibold text-black mb-6">Details</p>
//           <div className="grid gap-5">
//             {leftDetails.map((item, idx) => (
//               <div key={idx}>
//                 <p className="uppercase text-xs text-gray-500">{item.label}</p>
//                 <p className="text-black font-medium">{item.value || "N/A"}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="bg-white text-left p-4 rounded shadow-sm">
//           <div className="grid gap-5">
//             {rightDetails.map((item, idx) => (
//               <div key={idx}>
//                 <p className="uppercase text-xs text-gray-500">{item.label}</p>
//                 <p className="text-black font-medium">{item.value || "N/A"}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Third Box */}
//         <div className="bg-white text-left p-4 rounded shadow-sm">
//           <p className="text-black font-semibold text-base mb-2">
//             Any questions?
//           </p>
//           <div className="flex items-start gap-2 mb-4">
//             <FaQuestionCircle className="text-black text-lg mt-1" />
//             <a
//               href="#"
//               className="text-gray-500 underline hover:text-gray-700 text-sm"
//             >
//               Get in touch via our Help Centre
//             </a>
//           </div>

//           <p className="text-black font-semibold text-base mb-3">
//             Share this object with your friends
//           </p>

//           <div className="flex gap-3">
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <FaFacebookF className="text-blue-600 text-xl" />
//             </div>
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <PiXLogoBold className="text-black text-xl" />
//             </div>
//             <div className="border w-12 h-12 flex items-center justify-center rounded-sm hover:bg-gray-100 cursor-pointer">
//               <FaPinterestP className="text-red-600 text-xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
