import React, { useState } from "react";
import "./Navigation.css";

import { AiOutlineHome, AiOutlineShopping, AiOutlineLogin, AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { logout } from "../../redux/features/auth/authSlice";
// import { logout } from "../../redux/api/auth/authSlice";



const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setshowSidebar] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  function toggleSidebar() {
    setshowSidebar(!showSidebar);
  }
  function closeSidebar() {
    setshowSidebar(false);
  }

  return (
    <div
      style={{ zIndex: "999" }}
      className={`${showSidebar ? "hidden" : "flex"}
  xl:flex lg:flex md:hidden sm:hidden flex-col justify-between  p-4 text-white bg-black w-[4%]
  hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div>
      <div className="flex flex-col justify-center space-y-4">
        <Link to={"/"} className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineHome size={26} className="mr-2 mt-[3rem]" />
          <span className="hidden nav-item-name mt-[3rem]">Home</span>
        </Link>
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <Link to={"/shop"} className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShopping size={26} className="mr-2 mt-[3rem]" />
          <span className="hidden nav-item-name mt-[3rem]">Shop</span>
        </Link>
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <Link to={"/cart"} className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShoppingCart size={26} className="mr-2 mt-[3rem]" />
          <span className="hidden nav-item-name mt-[3rem]">Cart</span>
        </Link>
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <Link to={"/favorite"} className="flex items-center transition-transform transform hover:translate-x-2">
          <FaHeart size={26} className="mr-2 mt-[3rem]" />
          <span className="hidden nav-item-name mt-[3rem]">Favorite</span>
        </Link>
      </div>
      </div>

      <div className="relative">
         <button onClick={toggleDropdown} className="f"></button>
      </div>

      <ul>
        <li>
          <Link to={"/login"} className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineLogin size={26} className="mr-2 mt-[3rem]" />
            <span className="hidden nav-item-name mt-[3rem]">Login</span>
          </Link>
        </li>

        <li>
          <Link to={"/register"} className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineUserAdd size={26} className="mr-2 mt-[3rem]" />
            <span className="hidden nav-item-name mt-[3rem]">Register</span>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Navigation;

