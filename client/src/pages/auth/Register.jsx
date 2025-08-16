import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../api/authApi";

export default function Register() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    try {
      // console.log(formData);
      const response = await registerUser(formData);

      // console.log("Register API response:", response); // Optional: For debugging

      const { token, user } = response || {};

      if (!token || !user) {
        throw new Error("Invalid response from server");
      }

      login(user, token); // Store in context & localStorage

      if (user.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError(
        err?.response?.data?.message || err?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Join Us Today
        </h2>

        <form onSubmit={handleRegister} className="mt-6 space-y-5">
          {error && (
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                className="bg-gray-100 text-gray-900 text-sm rounded-md p-3"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="lastName"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="bg-gray-100 text-gray-900 text-sm rounded-md p-3"
                placeholder="Last name"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="w-full bg-gray-100 text-gray-900 text-sm rounded-md p-3"
              placeholder="Email address"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              className="w-full bg-gray-100 text-gray-900 text-sm rounded-md p-3"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              At least 8 characters, one uppercase, one lowercase
            </p>
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 mt-1 border border-gray-300 rounded-sm bg-gray-50"
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 transition"
          >
            Create an Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}
