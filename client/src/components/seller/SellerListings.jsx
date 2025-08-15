// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../api/axiosInstance"; // your axios config
// import { useNavigate } from "react-router-dom";

// export default function SellerListings() {
//   const [bidItems, setBidItems] = useState([]);
//   const navigate = useNavigate();

//   // Fetch user's bid items
//   const fetchBidItems = async () => {
//     try {
//       const res = await axiosInstance.get("/api/biditems/mine"); // API endpoint to get user's items
//       setBidItems(res.data.items);
//     } catch (error) {
//       console.error("Error fetching bid items:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBidItems();
//   }, []);

//   // Delete an item
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       try {
//         await axiosInstance.delete(`/api/biditems/${id}`);
//         setBidItems(bidItems.filter((item) => item._id !== id));
//       } catch (error) {
//         console.error("Error deleting item:", error);
//       }
//     }
//   };

//   // Navigate to update page
//   const handleUpdate = (id) => {
//     navigate(`/seller/update/${id}`); // your update route
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">My Bid Items</h2>
//       <table className="min-w-full border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border">#</th>
//             <th className="py-2 px-4 border">Title</th>
//             <th className="py-2 px-4 border">Current Bid</th>
//             <th className="py-2 px-4 border">Category</th>
//             <th className="py-2 px-4 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bidItems.map((item, index) => (
//             <tr key={item._id} className="text-center">
//               <td className="py-2 px-4 border">{index + 1}</td>
//               <td className="py-2 px-4 border">{item.title}</td>
//               <td className="py-2 px-4 border">€ {item.currentBid}</td>
//               <td className="py-2 px-4 border">{item.category}</td>
//               <td className="py-2 px-4 border flex justify-center gap-2">
//                 <button
//                   className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                   onClick={() => handleUpdate(item._id)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => handleDelete(item._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {bidItems.length === 0 && (
//             <tr>
//               <td colSpan="5" className="py-4 text-center">
//                 No bid items found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";

export default function SellerListings() {
  const bids = [
    {
      _id: 1,
      title: "Vintage Watch",
      category: "Watches",
      startingPrice: 100,
      currentPrice: 150,
      images: ["https://via.placeholder.com/80"],
    },
    {
      _id: 2,
      title: "Classic Ring",
      category: "Jewellery",
      startingPrice: 50,
      currentPrice: 75,
      images: [],
    },
    {
      _id: 3,
      title: "Retro Camera",
      category: "Retro Tech",
      startingPrice: 180,
      currentPrice: 200,
      images: ["https://via.placeholder.com/80"],
    },
  ];

  const handleUpdate = (id) => {
    console.log("Update item:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">My Bid Items</h2>

      {bids.length === 0 ? (
        <p>No bid items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Starting Price</th>
                <th className="px-4 py-2 text-left">Current Price</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr
                  key={bid._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">
                    {bid.images?.[0] ? (
                      <img
                        src={bid.images[0]}
                        alt={bid.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-4 py-2">{bid.title}</td>
                  <td className="px-4 py-2">{bid.category}</td>
                  <td className="px-4 py-2">${bid.startingPrice}</td>
                  <td className="px-4 py-2">
                    {bid.currentPrice ? `$${bid.currentPrice}` : "—"}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(bid._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(bid._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
