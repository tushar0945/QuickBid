// import React from "react";

// export default function Addresses() {
//   return (
//     <div className="w-[750px] sm:ml-0 md:ml-[250px] mt-[80px] min-h-screen bg-pink-50 pt-[100px] sm:pt-[120px] md:pt-[150px] px-4">
//         <p className="text-xl mt-[-50px] sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
//         My Addresses
//       </p>
//       <form className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">

//         {/* First Name & Last Name */}
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1">
//             <label className="block mb-2 text-sm font-medium text-gray-900">🧑 First name</label>
//             <input type="text" placeholder="vardhman" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//           <div className="flex-1">
//             <label className="block mb-2 text-sm font-medium text-gray-900">👤 Last name</label>
//             <input type="text" placeholder="gadade" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">📞 Phone number</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 12345 67890" />
//         </div>

//         {/* Country Dropdown */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🌍 Country</label>
//           <div className="relative">
//             <select className="w-full bg-gray-100 p-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option>🇮🇳 India</option>
//               <option>🇺🇸 United States</option>
//               <option>🇬🇧 United Kingdom</option>
//               <option>🌏 Other</option>
//             </select>
//           </div>
//           <p className="text-sm text-gray-500 mt-1">Currently, we only support countries shown here.</p>
//         </div>

//         {/* Street Address */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🏠 Street</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Street name" />
//         </div>

//         {/* House Number */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🔢 House number</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Flat / Block No" />
//         </div>

//         {/* Apartment / Floor */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🏬 Apartment / suite / floor (optional)</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           <p className="text-sm text-gray-500 mt-1">You can also add delivery instructions here</p>
//         </div>

//         {/* Postal Code + City */}
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1">
//             <label className="block mb-2 text-sm font-medium text-gray-900">📮 Postal code</label>
//             <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//           <div className="flex-1">
//             <label className="block mb-2 text-sm font-medium text-gray-900">🏙️ Town / City</label>
//             <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//         </div>

//         {/* State/Region */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🗺️ State / Province / Region (optional)</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Company Name */}
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-900">🏢 Company name (optional)</label>
//           <input type="text" className="w-full bg-gray-100 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>

//         {/* Submit Button */}
//         <div className="text-center pt-4">
//           <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Save Address</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React from "react";

// import { useAuth } from "../../context/AuthContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Addresses() {
//   const { user, setUser } = useAuth();

//   const [formData, setFormData] = useState({
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   });
//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4">
//       <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//         My Addresses
//       </p>

//       <form className="space-y-6">
//         {/* First Name & Last Name */}
//         {/*  */}

//         {/* Country */}
//         <div className="relative">
//           <select
//             id="country"
//             className="block w-full bg-transparent border-0 border-b-2 border-blue-500 text-sm text-gray-900 py-2.5 focus:outline-none focus:ring-0"
//           >
//             <option>India</option>
//             <option>United States</option>
//             <option>United Kingdom</option>
//             <option>Other</option>
//           </select>
//           <label htmlFor="country" className="block text-sm text-gray-700 mt-2">
//             Country (we support only listed countries)
//           </label>
//         </div>

//         {/* Street Address */}
//         <div className="relative">
//           <input
//             type="text"
//             id="street"
//             placeholder="Street"
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="street"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             Street Address
//           </label>
//         </div>

//         {/* House Number */}
//         <div className="relative">
//           <input
//             type="text"
//             id="house"
//             placeholder="House Number"
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="house"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             House / Flat / Block Number
//           </label>
//         </div>

//         {/* Apartment (Optional) */}
//         <div className="relative">
//           <input
//             type="text"
//             id="apartment"
//             placeholder="Apartment"
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="apartment"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             Apartment / Suite / Floor (optional)
//           </label>
//         </div>

//         {/* Postal Code & City */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="relative">
//             <input
//               type="text"
//               id="postal"
//               placeholder="Postal Code"
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//             />
//             <label
//               htmlFor="postal"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//             >
//               Postal Code
//             </label>
//           </div>
//           <div className="relative">
//             <input
//               type="text"
//               id="city"
//               placeholder="City"
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//             />
//             <label
//               htmlFor="city"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//             >
//               Town / City
//             </label>
//           </div>
//         </div>

//         {/* State / Region (Optional) */}
//         <div className="relative">
//           <input
//             type="text"
//             id="state"
//             placeholder="State"
//             className="peer block w-full border-0 border-b-2 border-blue-500 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="state"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             State / Province / Region (optional)
//           </label>
//         </div>

//         {/* Company Name (Optional) */}
//         <div className="relative">
//           <input
//             type="text"
//             id="company"
//             placeholder="Company"
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="company"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             Company (optional)
//           </label>
//         </div>

//         {/* Submit */}
//         <div className="text-center pt-4">
//           <button
//             type="submit"
//             className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Save Address
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
  });

  useEffect(() => {
    if (user?.address) {
      setAddress({
        street: user.address.street || "",
        city: user.address.city || "",
        state: user.address.state || "",
        zip: user.address.zip || "",
        country: user.address.country || "India",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:5000/api/users/address",
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
      navigate("/profile/setting/payment");
    } catch (error) {
      console.error("Address update error:", error);
      alert("Failed to update address. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
        My Address
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Country */}
        <div className="relative">
          <select
            name="country"
            value={address.country}
            onChange={handleChange}
            className="block w-full bg-transparent border-0 border-b-2 border-blue-500 text-sm text-gray-900 py-2.5 focus:outline-none focus:ring-0"
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Other</option>
          </select>
          <label className="block text-sm text-gray-700 mt-2">
            Country (we support only listed countries)
          </label>
        </div>

        {/* Street */}
        <div className="relative">
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            placeholder="Street"
            className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
          />
          <label
            htmlFor="street"
            className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
          >
            Street Address
          </label>
        </div>

        {/* Postal Code & City */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="zip"
              value={address.zip}
              onChange={handleChange}
              placeholder="Postal Code"
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
            />
            <label
              htmlFor="zip"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Postal Code
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
            />
            <label
              htmlFor="city"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Town / City
            </label>
          </div>
        </div>

        {/* State */}
        <div className="relative">
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            placeholder="State"
            className="peer block w-full border-0 border-b-2 border-blue-500 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
          />
          <label
            htmlFor="state"
            className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
          >
            State / Province / Region
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}
