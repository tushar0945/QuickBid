// // export default function LiveBidding() {
// //   return (
// //     <div className="bg-white p-4 rounded-md shadow">
// //       <h2 className="text-xl font-semibold">Live Bidding</h2>
// //       <p>Live bidding data will appear here...</p>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function LiveBidding() {
//   const [bids, setBids] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Get token from localStorage
//   const token = localStorage.getItem("token");

//   // ✅ Fetch pending bidding items
//   const fetchPendingBids = async () => {
//     try {
//       const res = await axios.get("/api/admin/pending-biditems", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Send token
//         },
//       });
//       setBids(res.data || []);
//     } catch (err) {
//       setError(err?.response?.data?.message || "Failed to fetch bidding items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Approve a bid
//   const approveBid = async (id) => {
//     try {
//       await axios.patch(
//         `/api/bids/${id}`,
//         { status: "approved" },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send token
//           },
//         }
//       );
//       setBids((prev) => prev.filter((bid) => bid._id !== id)); // remove approved from list
//     } catch (err) {
//       console.error("Failed to approve bid:", err);
//       alert("Error approving bid");
//     }
//   };

//   useEffect(() => {
//     fetchPendingBids();
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-md shadow">
//       <h2 className="text-xl font-semibold mb-4">Pending Bidding Items</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : bids.length === 0 ? (
//         <p>No pending bids found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2 border">Image</th>
//                 <th className="p-2 border">Title</th>
//                 <th className="p-2 border">Category</th>
//                 <th className="p-2 border">Starting Price</th>
//                 <th className="p-2 border">Current Price</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bids.map((bid) => (
//                 <tr key={bid._id}>
//                   <td className="p-2 border text-center">
//                     {bid.images?.[0] ? (
//                       <img
//                         src={bid.images[0]}
//                         alt={bid.title}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ) : (
//                       "No Image"
//                     )}
//                   </td>
//                   <td className="p-2 border">{bid.title}</td>
//                   <td className="p-2 border">{bid.category}</td>
//                   <td className="p-2 border">${bid.startingPrice}</td>
//                   <td className="p-2 border">
//                     {bid.currentPrice ? `$${bid.currentPrice}` : "—"}
//                   </td>
//                   <td className="p-2 border text-center">
//                     <button
//                       onClick={() => approveBid(bid._id)}
//                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                     >
//                       Approve
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";

export default function LiveBidding() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchPendingBids = async () => {
    try {
      const res = await axios.get("/api/admin/pending-biditems", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBids(res.data || []);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch bidding items");
    } finally {
      setLoading(false);
    }
  };

  const approveBid = async (id) => {
    try {
      await axios.put(
        `/api/admin/bids/approve/${id}`,
        { status: "approved" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBids((prev) => prev.filter((bid) => bid._id !== id));
    } catch (err) {
      console.error("Failed to approve bid:", err);
      alert("Error approving bid");
    }
  };

  useEffect(() => {
    fetchPendingBids();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Pending Bidding Items
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : bids.length === 0 ? (
        <p>No pending bids found.</p>
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
                  <td className="px-4 py-2 flex justify-center">
                    <button
                      onClick={() => approveBid(bid._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      Approve
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
