import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../api/axiosInstance";
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
      const res = await axiosInstance.put("/api/users/address", address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
