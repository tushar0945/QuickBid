// // src/pages/FilterPage.jsx

// import React from "react";
// import { useParams } from "react-router-dom";
// import FilterNavigation from "./FilterNavigation";

// export default function FilterPage() {
//   const { category } = useParams();

//   return (
//     <div className="">
//       <FilterNavigation />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-blue-600">Filter: {category}</h1>
//         {/* Fetch and display filtered data here based on `category` */}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import BidCard from "../auction/BidCard"; // Adjust the import path if needed

// const items = [
//   {
//     img: "https://images.unsplash.com/photo-1750755072927-4221f5018635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€4,500",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1750755072927-4221f5018635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€120",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1746311507414-bce6f67abb44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€8,495",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1750797636255-8c939940bcad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€800",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1750797636255-8c939940bcad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€4,500",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1750797636255-8c939940bcad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     bid: "€120",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1746311473391-0c0bf08ad9b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
//     bid: "€8,495",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1748783266580-a5b05c4e54b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMHw2c01WalRMU2tlUXx8ZW58MHx8fHx8https://images.unsplash.com/photo-1748783266580-a5b05c4e54b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
//     bid: "€800",
//   },
// ];

// export default function FilteredResults() {
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <div className="min-h-screen bg-white  px-6 pt-4">
//       <FilterNavigation />
//       <h1 className="text-3xl font-bold text-center mb-10">Travelling Bids</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {items.map((item, index) => (
//           <BidCard
//             key={index}
//             img={item.img}
//             bid={item.bid}
//             onClick={() => setSelectedImg(item.img)}
//           />
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImg && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative w-[600px] h-[400px] bg-white rounded-lg overflow-hidden">
//             <button
//               onClick={() => setSelectedImg(null)}
//               className="absolute top-2 right-2 text-black text-2xl font-bold bg-white bg-opacity-80 rounded-full px-2 hover:bg-opacity-100"
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImg}
//               alt="Enlarged"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axiosInstance from "../../api/axiosInstance";
// import FilterNavigation from "./FilterNavigation";
// import BiddingCard from "../auction/BidCard";

// export default function FilterPage() {
//   const { category } = useParams();
//   const { category: selectedCategory } = useParams();
//   const [allItems, setAllItems] = useState([]); // ALL items, flat array
//   const [loading, setLoading] = useState(true);
//   const [selectedImg, setSelectedImg] = useState(null);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         // console.log(category);
//         // Fetch the exact JSON data you posted
//         const res = await axiosInstance.get(`/bids/${category}`);
//         console.log(res.data.items);
//         // console.log(res.data);
//         const bidItems = res.data.items || [];

//         // Flatten out all items, each tagged with its category
//         // const itemsFlat = res.data.flatMap((group) =>
//         //   group.items.map((item) => ({
//         //     ...item,
//         //     category: group.category,
//         //   }))
//         // );
//         // console.log("biditems : ", bidItems);
//         setAllItems(bidItems);
//       } catch (err) {
//         console.error("Error fetching items:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, [selectedCategory]);

//   // Filter by category from URL param
//   const filteredItems = selectedCategory
//     ? allItems.filter((item) => item.category === selectedCategory)
//     : allItems;
//   // console.log("filtered items ", filteredItems);
//   return (
//     <>
//       <div className="mt-4 w-full overflow-x-hidden">
//         <FilterNavigation />
//         <div className="min-h-screen bg-white px-6 pt-4">
//           <div className="p-4">
//             {/* <h1 className="text-2xl font-bold text-blue-600 mb-4">
//               Filter: {selectedCategory || "All"}
//             </h1> */}
//             <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
//               {(selectedCategory || "All").toUpperCase()}
//             </h2>

//             {loading ? (
//               <p className="text-center text-gray-500">Loading items...</p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {filteredItems.length > 0 ? (
//                   // filteredItems.map((item) => (
//                   //   // console.log("item", item.title),
//                   //   <BiddingCard key={item._id} item={item} />
//                   //   // <BidCard
//                   //   //   key={item._id}
//                   //   //   img={item.image}
//                   //   //   bid={`€${item.price}`}
//                   //   //   title={item.title}
//                   //   //   description={item.description}
//                   //   //   onClick={() => setSelectedImg(item.image)}
//                   //   // />
//                   // ))
//                   filteredItems.map((item) => (
//                     <Link
//                       key={item._id}
//                       to={`/filter/${selectedCategory}/${item._id}`}
//                     >
//                       <BiddingCard item={item} />
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="text-gray-500">No items in this category.</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Modal for enlarged image */}
//           {selectedImg && (
//             <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//               <div className="relative w-[600px] h-[400px] bg-white rounded-lg overflow-hidden">
//                 <button
//                   onClick={() => setSelectedImg(null)}
//                   className="absolute top-2 right-2 text-black text-2xl font-bold bg-white bg-opacity-80 rounded-full px-2 hover:bg-opacity-100"
//                 >
//                   &times;
//                 </button>
//                 <img
//                   src={selectedImg}
//                   alt="Enlarged"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FilterNavigation from "./FilterNavigation";
import BiddingCard from "../auction/BidCard";

export default function FilterPage() {
  const { category: selectedCategory } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axiosInstance.get(`/bids/${selectedCategory}`);
        const bidItems = (res.data.items || []).map((item) => ({
          ...item,
          images: Array.isArray(item.images)
            ? item.images
            : item.image
            ? [item.image]
            : [],
        }));
        setAllItems(bidItems);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [selectedCategory]);

  const filteredItems = selectedCategory
    ? allItems.filter((item) => item.category === selectedCategory)
    : allItems;

  return (
    <div className="mt-4 w-full overflow-x-hidden">
      <FilterNavigation />
      <div className="min-h-screen bg-white px-6 pt-4">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
            {(selectedCategory || "All").toUpperCase()}
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading items...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item._id}
                    to={`/filter/${selectedCategory}/${item._id}`}
                  >
                    <BiddingCard item={item} />
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">No items in this category.</p>
              )}
            </div>
          )}
        </div>

        {/* Modal for enlarged image */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-[600px] h-[400px] bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-black text-2xl font-bold bg-white bg-opacity-80 rounded-full px-2 hover:bg-opacity-100"
              >
                &times;
              </button>
              <img
                src={selectedImg}
                alt="Enlarged"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
