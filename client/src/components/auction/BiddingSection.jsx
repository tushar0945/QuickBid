// import React from "react";

// const biddingItems = [
//   {
//     id: 1,
//     price: "€4,500",
//     image:
//       "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?w=600&auto=format&fit=crop&q=60",
//     title: "Religious Artifact",
//     category: "art-life",
//   },
//   {
//     id: 2,
//     price: "€120",
//     image:
//       "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=600&auto=format&fit=crop&q=60",
//     title: "Designer Doll",
//     category: "modern-expression",
//   },
//   {
//     id: 3,
//     price: "€8,495",
//     image:
//       "https://plus.unsplash.com/premium_photo-1749760305507-e66205164a31?w=600&auto=format&fit=crop&q=60",
//     title: "Whiskey with Art",
//     category: "past-present",
//   },
//   {
//     id: 4,
//     price: "€4,500",
//     image:
//       "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?w=600&auto=format&fit=crop&q=60",
//     title: "Religious Artifact",
//     category: "art-life",
//   },
//   {
//     id: 5,
//     price: "€120",
//     image:
//       "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=600&auto=format&fit=crop&q=60",
//     title: "Designer Doll",
//     category: "modern-expression",
//   },
//   {
//     id: 6,
//     price: "€8,495",
//     image:
//       "https://plus.unsplash.com/premium_photo-1749760305507-e66205164a31?w=600&auto=format&fit=crop&q=60",
//     title: "Whiskey with Art",
//     category: "past-present",
//   },
//   {
//     id: 7,
//     price: "€4,500",
//     image:
//       "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?w=600&auto=format&fit=crop&q=60",
//     title: "Religious Artifact",
//     category: "art-life",
//   },
//   {
//     id: 8,
//     price: "€120",
//     image:
//       "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=600&auto=format&fit=crop&q=60",
//     title: "Designer Doll",
//     category: "modern-expression",
//   },
//   {
//     id: 9,
//     price: "€8,495",
//     image:
//       "https://plus.unsplash.com/premium_photo-1749760305507-e66205164a31?w=600&auto=format&fit=crop&q=60",
//     title: "Whiskey with Art",
//     category: "past-present",
//   },
//   {
//     id: 10,
//     price: "€8,495",
//     image:
//       "https://plus.unsplash.com/premium_photo-1749760305507-e66205164a31?w=600&auto=format&fit=crop&q=60",
//     title: "Whiskey with Art",
//     category: "past-present",
//   },
//   {
//     id: 11,
//     price: "€4,500",
//     image:
//       "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?w=600&auto=format&fit=crop&q=60",
//     title: "Religious Artifact",
//     category: "art-life",
//   },
//   {
//     id: 12,
//     price: "€120",
//     image:
//       "https://images.unsplash.com/photo-1751378838137-7871418702cb?w=600&auto=format&fit=crop&q=60",
//     title: "Designer Doll",
//     category: "modern-expression",
//   },
//   // etc.
// ];

// export default function BiddingSection({ category }) {
//   const filteredItems = biddingItems.filter(
//     (item) => item.category === category
//   );

//   return (
//     <section className="px-4 py-8 bg-white">
//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded p-2 text-center shadow hover:shadow-md transition h-72 md:h-[360px] flex flex-col"
//             >
//               <div className="relative h-[70%]">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover rounded"
//                 />
//               </div>
//               <div className="flex-grow flex flex-col items-start justify-center mt-2 pl-2 text-xl">
//                 <p className="text-xs text-gray-500">CURRENT BID</p>
//                 <p className="font-semibold">{item.price}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No items in this category.</p>
//         )}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../api/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import BiddingCard from "./BidCard"; // Adjust the path as needed

// export default function BiddingSection({ category }) {
//   const [categoryItemsMap, setCategoryItemsMap] = useState({});
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBids = async () => {
//       try {
//         const res = await axiosInstance.get("/bids");
//         const rawData = res.data;
//         console.log("response", rawData);

//         const formattedData = {};
//         rawData.forEach(({ category, items }) => {
//           formattedData[category] = items;
//         });
//         // console.log("BiddingSection item:", formattedData);
//         setCategoryItemsMap(formattedData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching bid items:", error);
//         setLoading(false);
//       }
//     };

//     fetchBids();
//   }, []);

//   const filteredItems = categoryItemsMap[category] || [];
//   console.log("Filtered Items:", filteredItems);

//   const handleCardClick = (category) => {
//     navigate(`/filter/${category}`); // 👈 Navigate to filter route
//   };

//   return (
//     <section className="px-4 py-8 bg-white">
//       {loading ? (
//         <p className="text-center text-gray-500">Loading items...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {filteredItems.length > 0 ? (
//             filteredItems.map((item) => (
//               <div
//                 key={item._id}
//                 onClick={() => handleCardClick(category)}
//                 className="cursor-pointer"
//               >
//                 <BiddingCard key={item._id} item={item} />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No items in this category.</p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import BiddingCard from "./BidCard";

export default function BiddingSection({ category }) {
  const [categoryItemsMap, setCategoryItemsMap] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await axiosInstance.get("/bids");
        // console.log(res.data);
        const rawData = res.data;

        const formattedData = {};
        rawData.forEach(({ category, items }) => {
          formattedData[category] = items.map((item) => ({
            ...item,
            images: Array.isArray(item.images)
              ? item.images
              : item.image
              ? [item.image]
              : [],
          }));
        });

        setCategoryItemsMap(formattedData);
      } catch (error) {
        console.error("Error fetching bid items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  const filteredItems = categoryItemsMap[category] || [];

  const handleCardClick = (category) => {
    navigate(`/filter/${category}`);
  };

  return (
    <section className="px-4 py-8 bg-white">
      {loading ? (
        <p className="text-center text-gray-500">Loading items...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item._id}
                onClick={() => handleCardClick(category)}
                className="cursor-pointer"
              >
                <BiddingCard item={item} />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in this category.</p>
          )}
        </div>
      )}
    </section>
  );
}
