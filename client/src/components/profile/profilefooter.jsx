import React, { useState } from "react";

export default function ProfileFooter() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <footer className="bg-light py-5 px-3 ">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">About Catawiki</h6>
            <ul className="list-unstyled text-muted">
              <li>About Catawiki</li>
              <li>Our Experts</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partnering with Catawiki</li>
              <li>Collectors' portal</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">Buy</h6>
            <ul className="list-unstyled text-muted">
              <li>How to Buy</li>
              <li>Buyer Protection</li>
              <li>Catawiki Stories</li>
              <li>Buyer terms</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">Sell</h6>
            <ul className="list-unstyled text-muted">
              <li>How to Sell</li>
              <li>Seller Tips</li>
              <li>Submission guidelines</li>
              <li>Seller terms</li>
              <li>Affiliates</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">My Catawiki</h6>
            <ul className="list-unstyled text-muted">
              <li>Help Centre</li>
              <li>Settings</li>
              <li>My favourite lots</li>
              <li>My saved searches</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Language + Icons) */}
        <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
          <div className="dropdown position-relative">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              onClick={toggleDropdown} // ✅ FIXED
            >
              English
            </button>

            {/* Conditionally show the dropdown */}
            {showDropdown && (
              <ul className="dropdown-menu show position-absolute">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Deutsch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Français
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div>
            <i className="bi bi-facebook me-3 fs-4"></i>
            <i className="bi bi-instagram fs-4"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
