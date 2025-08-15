// // export default function Sellers() {
// //   return (
// //     <div className="bg-white p-4 rounded-md shadow">
// //       <h2 className="text-xl font-semibold">Sellers Page</h2>
// //       <p>List of sellers will appear here...</p>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useAuth } from "../../context/AuthContext";
// import axios from "axios";

// export default function Sellers() {
//   const [sellers, setSellers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { token } = useAuth();

//   // Fetch sellers from backend
//   useEffect(() => {
//     const fetchSellers = async () => {
//       try {
//         const res = await axios.get("/api/admin/sellers", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log(res.data); // 👈 should log the object with sellers array
//         setSellers(res.data.sellers || []);
//       } catch (error) {
//         console.error("Error fetching sellers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSellers();
//   }, [token]);

//   // Delete seller
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this seller?")) return;
//     try {
//       await axios.delete(`/api/admin/sellers/${id}`);
//       setSellers((prev) => prev.filter((seller) => seller._id !== id));
//     } catch (error) {
//       console.error("Error deleting seller:", error);
//     }
//   };

//   // Edit seller
//   const handleEdit = (id) => {
//     // You can navigate to an edit form or open a modal
//     console.log("Edit seller:", id);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Sellers List</h2>

//       {loading ? (
//         <p>Loading sellers...</p>
//       ) : sellers.length === 0 ? (
//         <p>No sellers found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg shadow-sm">
//             <thead className="bg-blue-500 text-white">
//               <tr>
//                 <th className="px-4 py-2 text-left">Name</th>
//                 <th className="px-4 py-2 text-left">Email</th>
//                 <th className="px-4 py-2 text-left">Phone</th>
//                 <th className="px-4 py-2 text-left">Joined On</th>
//                 <th className="px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sellers.map((seller) => (
//                 <tr
//                   key={seller._id}
//                   className="border-b hover:bg-gray-100 transition"
//                 >
//                   <td className="px-4 py-2">{seller.name}</td>
//                   <td className="px-4 py-2">{seller.email}</td>
//                   <td className="px-4 py-2">{seller.phone}</td>
//                   <td className="px-4 py-2">
//                     {new Date(seller.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-2 flex justify-center gap-3">
//                     <button
//                       onClick={() => handleEdit(seller._id)}
//                       className="text-blue-500 hover:text-blue-700"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(seller._id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <FaTrash />
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
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

export default function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  // Fetch sellers from backend
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const res = await axios.get("/api/admin/sellers", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.log("Sellers API Response:", res.data);
        // ✅ Store only the sellers array
        setSellers(res.data.sellers || []);
      } catch (error) {
        console.error("Error fetching sellers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSellers();
  }, [token]);

  // Delete seller
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this seller?")) return;
    try {
      await axios.delete(`/api/admin/sellers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSellers((prev) => prev.filter((seller) => seller._id !== id));
    } catch (error) {
      console.error("Error deleting seller:", error);
    }
  };

  // Edit seller
  const handleEdit = (id) => {
    // You can navigate to an edit form or open a modal
    console.log("Edit seller:", id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Sellers List</h2>

      {loading ? (
        <p>Loading sellers...</p>
      ) : sellers.length === 0 ? (
        <p>No sellers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Joined On</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller) => (
                <tr
                  key={seller._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  {/* ✅ Combine firstName + lastName */}
                  <td className="px-4 py-2">
                    {seller.firstName} {seller.lastName}
                  </td>
                  <td className="px-4 py-2">{seller.email}</td>
                  <td className="px-4 py-2">
                    {new Date(seller.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(seller._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(seller._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
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
