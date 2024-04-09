"use client";
import { Link, NavLink, useLocation } from "react-router-dom";
import { downArrowIcon, logo, phoneIcon } from "../assets/icons";
import { menuIcon, closeIcon } from "../assets/icons";
import { useEffect, useState } from "react";
import { navDoorsLinks, navWindowsLinks } from "../constants";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();

  const [isOpen, setIsopen] = useState(false);
  const [windowsList, setWindowsList] = useState(false);
  const [doorsList, setDoorsList] = useState(false);
  const [doorsListStyle, setDoorsListStyle] = useState(false);
  const [windowsListStyle, setWindowsListStyle] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const navAnimation = {
    initial: {
      y: -105,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
      },
    },
  };

  useEffect(() => {
    if (location.pathname.includes("/windows/")) {
      setWindowsListStyle(true);
      setDoorsListStyle(false);
    } else if (location.pathname.includes("/doors/")) {
      setDoorsListStyle(true);
      setWindowsListStyle(false);
    } else {
      setDoorsListStyle(false);
      setWindowsListStyle(false);
    }
  }, [setDoorsListStyle, setWindowsListStyle, location.pathname]);

  return (
    <header className={"w-full padding-x bg-white"}>
      <motion.nav
        variants={navAnimation}
        initial="initial"
        animate="animate"
        className="max-container py-5 flex items-center justify-between"
      >
        <Link to={"/"}>
          <motion.img
            variants={navAnimation}
            src={logo}
            width={160}
            height={42}
            alt="Logo"
            className="object-contain"
          />
        </Link>
        <motion.div
          variants={navAnimation}
          className="navList flex-1 lg:flex hidden items-center justify-center gap-10 max-xl:gap-4"
        >
          <NavLink
            key={"Home"}
            to={"/"}
            className="text-black font-poppins xl:text-base lg:text-sm hover:font-medium"
          >
            Home
          </NavLink>
          <a
            key={"About Us"}
            href={"#about"}
            className="text-black font-poppins xl:text-base lg:text-sm hover:font-medium"
          >
            About Us
          </a>
          <a
            key={"Our Windows"}
            onMouseOver={() => setWindowsList(true)}
            onMouseOut={() => setWindowsList(false)}
            className={
              windowsListStyle
                ? "text-black font-poppins xl:text-base lg:text-sm productDropdown relative hover:font-medium cursor-pointer active"
                : "text-black font-poppins xl:text-base lg:text-sm productDropdown relative hover:font-medium cursor-pointer"
            }
          >
            uPVC Windows{" "}
            <img
              className="inline ml-1"
              width={15}
              height={15}
              src={downArrowIcon}
            />
            {windowsList ? (
              <div
                onMouseOver={() => setWindowsList(true)}
                onMouseOut={() => setWindowsList(false)}
                className="w-max productDropdownList absolute z-10 bg-dark-orange top-5 -left-6"
              >
                <ul>
                  {navWindowsLinks.map((link) => (
                    <li
                      key={link.name}
                      className="hover:bg-[#EFEFEF] hover:rounded-[5px]"
                    >
                      <NavLink
                        key={link.name}
                        className="text-white font-poppins text-base block px-6 py-2 hover:font-medium hover:text-black"
                        to={link.to}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </a>
          <a
            key={"Our Doors"}
            onMouseOver={() => setDoorsList(true)}
            onMouseOut={() => setDoorsList(false)}
            className={
              doorsListStyle
                ? "text-black font-poppins xl:text-base lg:text-sm productDropdown relative hover:font-medium cursor-pointer active"
                : "text-black font-poppins xl:text-base lg:text-sm productDropdown relative hover:font-medium cursor-pointer"
            }
          >
            uPVC Doors{" "}
            <img
              className="inline ml-1"
              width={15}
              height={15}
              src={downArrowIcon}
            />
            {doorsList ? (
              <div
                onMouseOver={() => setDoorsList(true)}
                onMouseOut={() => setDoorsList(false)}
                className="w-max productDropdownList absolute z-10 bg-dark-orange top-5 -left-6"
              >
                <ul>
                  {navDoorsLinks.map((link) => (
                    <li
                      key={link.name}
                      className="hover:bg-[#EFEFEF] hover:rounded-[5px]"
                    >
                      <NavLink
                        key={link.name}
                        className="text-white font-poppins text-base block px-6 py-2 hover:font-medium hover:text-black"
                        to={link.to}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </a>
          <a
            key={"Contact Us"}
            href={"#contact"}
            className="text-black font-poppins xl:text-base lg:text-sm hover:font-medium"
          >
            Contact Us
          </a>
        </motion.div>
        <motion.div
          variants={navAnimation}
          className="lg:flex hidden items-center xl:gap-4 lg:gap-3 bg-dark-orange rounded-[10px] xl:px-6 lg:px-4 py-[14px] "
        >
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
        </motion.div>
        <div className="lg:hidden flex">
          <motion.img
            variants={navAnimation}
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
                <a
                  key={"Our Windows"}
                  onMouseOver={() => setWindowsList(true)}
                  onMouseOut={() => setWindowsList(false)}
                  className={
                    windowsListStyle
                      ? "text-black font-poppins text-base productDropdown relative hover:font-medium active"
                      : "text-black font-poppins text-base productDropdown relative hover:font-medium"
                  }
                >
                  uPVC Windows{" "}
                  <img
                    className="inline"
                    width={15}
                    height={15}
                    src={downArrowIcon}
                  />
                  {windowsList ? (
                    <div
                      onMouseOver={() => setWindowsList(true)}
                      onMouseOut={() => setWindowsList(false)}
                      className="w-max productDropdownList absolute z-20 bg-dark-orange -top-14 left-28"
                    >
                      <ul>
                        {navWindowsLinks.map((link) => (
                          <li
                            key={link.name}
                            className="hover:bg-[#EFEFEF] hover:rounded-[5px]"
                          >
                            <NavLink
                              key={link.name}
                              className="text-white font-poppins text-base block pl-2.5 pr-1 py-2 hover:font-medium hover:text-black"
                              to={link.to}
                              onClick={ToggleSidebar}
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </a>
                <a
                  key={"Our Doors"}
                  onMouseOver={() => setDoorsList(true)}
                  onMouseOut={() => setDoorsList(false)}
                  className={
                    doorsListStyle
                      ? "text-black font-poppins text-base productDropdown relative hover:font-medium active"
                      : "text-black font-poppins text-base productDropdown relative hover:font-medium"
                  }
                >
                  uPVC Doors{" "}
                  <img
                    className="inline"
                    width={15}
                    height={15}
                    src={downArrowIcon}
                  />
                  {doorsList ? (
                    <div
                      onMouseOver={() => setDoorsList(true)}
                      onMouseOut={() => setDoorsList(false)}
                      className="w-max productDropdownList absolute z-20 bg-dark-orange -top-14 left-28"
                    >
                      <ul>
                        {navDoorsLinks.map((link) => (
                          <li
                            key={link.name}
                            className="hover:bg-[#EFEFEF] hover:rounded-[5px]"
                          >
                            <NavLink
                              key={link.name}
                              className="text-white font-poppins text-base block pl-2.5 pr-1 py-2 hover:font-medium hover:text-black"
                              to={link.to}
                              onClick={ToggleSidebar}
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </a>
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
      </motion.nav>
    </header>
  );
};

export default Nav;
