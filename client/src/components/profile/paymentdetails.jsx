import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

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

      const res = await axiosInstance.put("/api/users/payment", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
