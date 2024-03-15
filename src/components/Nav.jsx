"use client";
import { Link, NavLink } from "react-router-dom";
import { logo, phoneIcon } from "../assets/icons";
import { menuIcon, closeIcon } from "../assets/icons";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <header className={"w-full padding-x bg-white"}>
      <nav className="max-container py-5 flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            width={160}
            height={42}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        <div className="flex-1 lg:flex hidden items-center justify-center gap-16 max-xl:gap-6 max-">
          <NavLink
            key={"Home"}
            to={"/"}
            className="text-black font-poppins text-base hover:font-medium"
          >
            Home
          </NavLink>
          <a
            key={"About Us"}
            href={"#about"}
            className="text-black font-poppins text-base hover:font-medium"
          >
            About Us
          </a>
          <NavLink
            key={"Our Products"}
            to={"/products"}
            className="text-black font-poppins text-base productDropdown relative hover:font-medium"
          >
            Our Products
          </NavLink>
          <a
            key={"Contact Us"}
            href={"#contact"}
            className="text-black font-poppins text-base hover:font-medium"
          >
            Contact Us
          </a>
        </div>
        <div className="lg:flex hidden items-center gap-4 bg-dark-orange rounded-[10px] px-6 py-[14px] ">
          <img
            src={phoneIcon}
            width={24}
            height={24}
            className="object-contain"
            alt="Phone Icon"
          />
          <div className="flex flex-col gap-[6px]">
            <span className="text-white text-xs font-poppins leading-none opacity-80">
              Call us at
            </span>
            <p className="text-white text-lg font-bold font-poppins tracking-[0.75px] leading-none">
              +61452422758
            </p>
          </div>
        </div>
        <div className="lg:hidden flex">
          <img
            src={menuIcon}
            width={24}
            height={24}
            alt="Menu Icon"
            className="object-contain cursor-pointer"
            onClick={ToggleSidebar}
          />
          <>
            <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
              <div className="flex flex-col items-start gap-10 relative">
                <NavLink
                  key={"Home"}
                  to={"/"}
                  className="text-black font-poppins text-base"
                  onClick={ToggleSidebar}
                >
                  Home
                </NavLink>
                <a
                  key={"About Us"}
                  href={"#about"}
                  className="text-black font-poppins text-base"
                  onClick={ToggleSidebar}
                >
                  About Us
                </a>
                <NavLink
                  key={"Our Products"}
                  to={"/products"}
                  className="text-black font-poppins text-base productDropdown relative"
                  onClick={ToggleSidebar}
                >
                  Our Products
                </NavLink>
                <a
                  key={"Contact Us"}
                  href={"#contact"}
                  className="text-black font-poppins text-base"
                  onClick={ToggleSidebar}
                >
                  Contact Us
                </a>
                <img
                  onClick={ToggleSidebar}
                  className="absolute right-0 -top-6 cursor-pointer"
                  src={closeIcon}
                  alt="Close Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex items-center gap-4 bg-dark-orange rounded-[10px] px-6 py-[14px] mt-10">
                <img
                  src={phoneIcon}
                  width={24}
                  height={24}
                  className="object-contain"
                  alt="Phone Icon"
                />
                <div className="flex flex-col gap-[6px]">
                  <span className="text-white text-xs font-poppins leading-none opacity-80">
                    Call us at
                  </span>
                  <p className="text-white text-lg font-bold font-poppins tracking-[0.75px] leading-none">
                    +61452422758
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
              onClick={ToggleSidebar}
            ></div>
          </>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
