// // export default function Customers() {
// //   return (
// //     <div className="bg-white p-4 rounded-md shadow">
// //       <h2 className="text-xl font-semibold">Customers Page</h2>
// //       <p>List of customers will appear here...</p>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         await axios.delete(`/api/admin/customers/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setCustomers(data);
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };
//     fetchCustomers();
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-md shadow">
//       <h2 className="text-xl font-semibold mb-4">Customers</h2>
//       {customers.length === 0 ? (
//         <p>No customers found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer._id}>
//                 <td className="border p-2">
//                   {customer.firstName} {customer.lastName}
//                 </td>
//                 <td className="border p-2">{customer.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token"); // Assuming you store JWT here

//   // Fetch customers from backend
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const res = await axios.get("/api/admin/customers", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log(res);
//         setCustomers(res.data.customers);
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCustomers();
//   }, [token]);

//   // Delete a customer
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;
//     try {
//       await axios.delete(`/api/users/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCustomers(customers.filter((cust) => cust._id !== id));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // Update a customer (redirect to form)
//   const handleUpdate = (id) => {
//     window.location.href = `/update-user/${id}`;
//   };

//   if (loading) return <p className="p-4">Loading customers...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">All Customers</h1>
//       <table className="min-w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">#</th>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.length > 0 ? (
//             customers.map((customer, index) => (
//               <tr key={customer._id}>
//                 <td className="p-2 border">{index + 1}</td>
//                 <td className="p-2 border">
//                   {customer.firstName} {customer.lastName}
//                 </td>
//                 <td className="p-2 border">{customer.email}</td>
//                 <td className="p-2 border">{customer.role}</td>
//                 <td className="p-2 border flex gap-2">
//                   <button
//                     onClick={() => handleUpdate(customer._id)}
//                     className="px-3 py-1 bg-blue-500 text-white rounded"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDelete(customer._id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center p-4">
//                 No customers found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); // Assuming JWT is stored in localStorage

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await axios.get("/api/admin/customers", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCustomers(data.customers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomers();
  }, [token]);

  const handleEdit = (id) => {
    window.location.href = `/update-user/${id}`;
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCustomers(customers.filter((cust) => cust._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Customers List</h2>

      {loading ? (
        <p>Loading customers...</p>
      ) : customers.length === 0 ? (
        <p>No customers found.</p>
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
              {customers.map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">
                    {customer.firstName} {customer.lastName}
                  </td>
                  <td className="px-4 py-2">{customer.email}</td>
                  <td className="px-4 py-2">
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(customer._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(customer._id)}
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
