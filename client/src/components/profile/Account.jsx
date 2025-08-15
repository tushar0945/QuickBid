import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, setUser } = useAuth();
  // console.log(setUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  // Load user data when component mounts
  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        company: user.company || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      // console.log(token);
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        company: formData.company,
      };

      if (formData.password) {
        payload.password = formData.password;
      }

      // console.log(payload);

      const res = await axios.put(
        "http://localhost:5000/api/users/account",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
      navigate("/profile/setting/addresses"); // go to next step
    } catch (error) {
      console.error("Account update error:", error);
      alert("Failed to update account. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
        My Account
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email (read-only) */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="peer block w-full border-0 border-b-2 bg-transparent py-2.5 text-sm text-gray-400 placeholder-transparent focus:outline-none"
            placeholder="Email address"
          />
          <label
            htmlFor="email"
            className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700"
          >
            Email address (unchangeable)
          </label>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="New Password"
            />
            <label
              htmlFor="password"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              New Password (optional)
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Confirm Password"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              Confirm New Password
            </label>
          </div>
        </div>

        {/* First & Last Name */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="First Name"
            />
            <label
              htmlFor="firstName"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              First Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Last Name"
            />
            <label
              htmlFor="lastName"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Phone"
            />
            <label
              htmlFor="phone"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 text-sm text-gray-900 placeholder-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Company"
            />
            <label
              htmlFor="company"
              className="absolute top-3 left-0 origin-[0] scale-75 -translate-y-6 transform text-sm text-gray-700 peer-focus:text-blue-600"
            >
              Company (optional)
            </label>
          </div>
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
