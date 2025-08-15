// import React from 'react';

// export default function Paymentdetails() {
//   return (
//     <div className="w-[750px] h-[250px] sm:ml-0 md:ml-[250px] mt-[80px] min-h-screen bg-pink-100 pt-[100px] sm:pt-[120px] md:pt-[150px] px-4">
//       <form className="max-w-sm mx-auto">
//         <div className="mb-5">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Credit Card</label>
//           <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Card Holder's Name" required/>
//         </div>

//         <div className="mb-5">
//           <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             Your password
//           </label>

//         </div>

//         <div className="flex items-start mb-5">
//           <div className="flex items-center h-5">
//             <input type="text" placeholder="💳 Card number" className="w-1/2 px-4 py-3 rounded-md bg-gray-100 text-sm placeholder-gray-500 outline-none mr-2" />
//             <input type="text" placeholder="MM / YY" className="w-1/4 px-4 py-3 rounded-md bg-gray-100 text-sm placeholder-gray-500 outline-none mr-2"/>
//             <input type="text" placeholder="CVC" className="w-1/4 px-4 py-3 rounded-md bg-gray-100 text-sm placeholder-gray-500 outline-none"/>

//            </div>
//           <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Remember </label>
//           <br />
//         </div>
//            <div className="flex flex-wrap gap-2 mt-4">
//              <button type="button" className="text-white bg-black hover:bg-gray-800 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"><svg aria-hidden="true" className="w-10 h-3 mr-2 -ml-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595"/><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14"/></svg>Pay with Visa</button>
//              <button type="button" className="text-white bg-black hover:bg-gray-800 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"><svg aria-hidden="true" className="h-4 w-7 mr-2 -ml-1" viewBox="0 0 601 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/></svg>Pay with MasterCard</button>
//           </div>
//         <div className=" mt-[10px] h-[100px] w-[550px]">
//             <h1 className='ml-[20px]'>Secure Payment</h1>
//             <p className='ml-[20px]'>Your payment info is safe.We've partnered with Stripe,one of the most secure and reputable payment processor available</p>

//         </div>

//       </form>
//     </div>
//   );
// }
// import React from "react";

// export default function Paymentdetails() {
//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4">
//       <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//         Payment Details
//       </p>

//       <form className="space-y-6">
//         {/* Cardholder Name */}
//         <div className="relative">
//           <input
//             type="text"
//             id="card_holder"
//             name="card_holder"
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//             placeholder="Card Holder's Name"
//             required
//           />
//           <label
//             htmlFor="card_holder"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//           >
//             Card Holder's Name
//           </label>
//         </div>

//         {/* Card Info */}
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               id="card_number"
//               name="card_number"
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="Card Number"
//               required
//             />
//             <label
//               htmlFor="card_number"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//             >
//               Card Number
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               id="expiry"
//               name="expiry"
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="MM/YY"
//               required
//             />
//             <label
//               htmlFor="expiry"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//             >
//               Expiry
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               id="cvc"
//               name="cvc"
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="CVC"
//               required
//             />
//             <label
//               htmlFor="cvc"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
//             >
//               CVC
//             </label>
//           </div>
//         </div>

//         {/* Payment Method Buttons */}
//         <div className="flex flex-wrap gap-4 pt-4">
//           <button
//             type="button"
//             className="bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition"
//           >
//             💳 Pay with Visa
//           </button>
//           <button
//             type="button"
//             className="bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition"
//           >
//             💳 Pay with MasterCard
//           </button>
//         </div>

//         {/* Secure Info */}
//         <div className="pt-6 text-sm text-gray-600">
//           <strong>🔒 Secure Payment</strong>
//           <p>
//             Your payment information is safe. We've partnered with Stripe, one
//             of the most secure and reputable payment processors available.
//           </p>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center pt-4">
//           <button
//             type="submit"
//             className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Submit Payment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Paymentdetails() {
//   const { user, setUser } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     cardHolder: "",
//     cardNumber: "",
//     expiry: "",
//     cvc: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       const payload = {
//         cardHolder: formData.cardHolder,
//         cardNumber: formData.cardNumber,
//         expiry: formData.expiry,
//         cvc: formData.cvc,
//       };

//       const res = await axios.put(
//         "http://localhost:5000/api/users/payment",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setUser(res.data);
//       navigate("/profile/setting/confirmation"); // or next route
//     } catch (error) {
//       console.error("Payment update error:", error);
//       alert("Failed to save payment details. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
//         Payment Details
//       </h2>

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         {/* Cardholder Name */}
//         <div className="relative">
//           <input
//             type="text"
//             name="cardHolder"
//             value={formData.cardHolder}
//             onChange={handleChange}
//             className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//             placeholder="Card Holder's Name"
//             required
//           />
//           <label
//             htmlFor="cardHolder"
//             className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
//           >
//             Card Holder's Name
//           </label>
//         </div>

//         {/* Card Info */}
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="relative">
//             <input
//               type="text"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleChange}
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="Card Number"
//               required
//             />
//             <label
//               htmlFor="cardNumber"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
//             >
//               Card Number
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               name="expiry"
//               value={formData.expiry}
//               onChange={handleChange}
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="MM/YY"
//               required
//             />
//             <label
//               htmlFor="expiry"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
//             >
//               Expiry (MM/YY)
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               name="cvc"
//               value={formData.cvc}
//               onChange={handleChange}
//               className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
//               placeholder="CVC"
//               required
//             />
//             <label
//               htmlFor="cvc"
//               className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
//             >
//               CVC
//             </label>
//           </div>
//         </div>

//         {/* Info */}
//         <div className="pt-6 text-sm text-gray-600">
//           <strong>🔒 Secure Payment</strong>
//           <p>
//             Your payment information is safe. We've partnered with Stripe, one
//             of the most secure and reputable payment processors available.
//           </p>
//         </div>

//         {/* Submit */}
//         <div className="text-center pt-4">
//           <button
//             type="submit"
//             className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Submit Payment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Paymentdetails() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    card_holder: "",
    card_number: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/users/payment",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
      navigate("/profile/setting/emails"); // ✅ update with your actual route
    } catch (error) {
      console.error("Payment submission failed:", error);
      alert("Failed to save payment details. Please check and try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
        Payment Details
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Cardholder Name */}
        <div className="relative">
          <input
            type="text"
            id="card_holder"
            name="card_holder"
            value={formData.card_holder}
            onChange={handleChange}
            className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
            placeholder="Card Holder's Name"
            required
          />
          <label
            htmlFor="card_holder"
            className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
          >
            Card Holder's Name
          </label>
        </div>

        {/* Card Info */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              id="card_number"
              name="card_number"
              value={formData.card_number}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Card Number"
              required
            />
            <label
              htmlFor="card_number"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Card Number
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="MM/YY"
              required
            />
            <label
              htmlFor="expiry"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Expiry
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="CVC"
              required
            />
            <label
              htmlFor="cvc"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              CVC
            </label>
          </div>
        </div>

        {/* Payment Method Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            type="button"
            className="bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            💳 Pay with Visa
          </button>
          <button
            type="button"
            className="bg-black text-white px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            💳 Pay with MasterCard
          </button>
        </div>

        {/* Secure Info */}
        <div className="pt-6 text-sm text-gray-600">
          <strong>🔒 Secure Payment</strong>
          <p>
            Your payment information is safe. We've partnered with Stripe, one
            of the most secure and reputable payment processors available.
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
}
