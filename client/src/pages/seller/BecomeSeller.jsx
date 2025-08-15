// // src/pages/seller/BecomeSeller.jsx
// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import axios from "axios";

// export default function BecomeSeller() {
//   const { user, setUser } = useAuth();
//   const [businessName, setBusinessName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "/api/users/become-seller",
//         { businessName },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );

//       // Update context
//       setUser({ ...user, role: "seller", businessName });
//       alert("You are now a seller!");
//     } catch (error) {
//       console.error(error);
//       alert("Error becoming a seller.");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Become a Seller</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Business Name"
//           value={businessName}
//           onChange={(e) => setBusinessName(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// src/pages/seller/BecomeSeller.jsx
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BecomeSeller() {
  const { user, setUser } = useAuth();
  const [businessName, setBusinessName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/users/become-seller",
        { businessName },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Update context instantly
      setUser({ ...user, role: "seller", businessName });
      navigate("/seller/dashboard");
    } catch (error) {
      console.error(error);
      alert("Error becoming a seller.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Become a Seller
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter your business name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit & Become a Seller
          </button>
        </form>
      </div>
    </div>
  );
}
