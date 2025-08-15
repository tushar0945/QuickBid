// // src/components/cards/BiddingCard.jsx
// import React from "react";

// export default function BiddingCard({ item }) {
//   if (!item) return null;

//   return (
//     <div className="border rounded p-2 text-center shadow hover:shadow-md transition h-72 md:h-[360px] flex flex-col">
//       <div className="relative h-[70%]">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover rounded"
//         />
//       </div>
//       <div className="flex-grow flex flex-col items-start justify-center mt-2 pl-2 text-xl">
//         <p className="text-xs text-gray-500">CURRENT BID</p>
//         <p className="font-semibold">€{item.price}</p>
//       </div>
//     </div>
//   );
// }

// components/BidCard.jsx
import React from "react";

export default function BiddingCard({ item }) {
  if (!item) return null;
  // console.log("From car", item);
  var displayPrice = 0;
  if (!item.currentPrice) {
    displayPrice = item.price || item.startingPrice;
  } else {
    displayPrice = item.currentPrice;
  }
  return (
    <div
      // onClick={onClick}
      className="cursor-pointer border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500">CURRENT BID</p>
        <p className="text-xl font-semibold text-gray-800">₹{displayPrice}</p>
      </div>
    </div>
  );
}
