import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    "Terms of Use",
    "Data Protection & Privacy Notice",
    "Cookie Policy",
    "Law Enforcement Policy",
    "Other Policies",
  ];

  return (
    <footer className="bg-white text-sm text-gray-600 border-t">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative inline-block text-gray-500 text-sm hover:text-gray-700 transition-colors duration-200
             before:content-[''] before:absolute before:-bottom-0.5 before:left-0
             before:w-full before:h-[1px] before:bg-gray-400
             before:scale-x-0 hover:before:scale-x-100
             before:transition-transform before:origin-left before:duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col items-center gap-2 text-gray-500 text-xs">
            <div className="flex items-center gap-4 text-xl">
              <span>&copy; {new Date().getFullYear()}</span>
              <div className="flex space-x-3  text-xl">
                <a href="#" className="hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-blue-700">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
