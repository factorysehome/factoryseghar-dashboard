import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user data from localStorage
    localStorage.removeItem("loggedInUser");

    // Show a logout message (Optional)
    alert("You have been logged out.");

    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-full w-1/5 bg-gray-800 text-white shadow-md transition-transform duration-300 ease-in-out z-10 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start space-y-4 p-6 mt-12">
        <Link to="/addproducts" className="hover:underline">
          Add Products
        </Link>
        <Link to="/viewproduct" className="hover:underline">
          View Products
        </Link>
        <Link to="/orderinfo" className="hover:underline">
          Order Info
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Menu toggle button */}
      <button
        className="absolute top-4 left-4 text-3xl z-20 bg-yellow-500 p-2 rounded"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
