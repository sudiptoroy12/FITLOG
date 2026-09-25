"use client";

import Link from "next/link";

import logo from "../../assets/logo.png";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutProvider";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
      const {savePlan, todayPlan} = useContext(WorkoutContext)
  return (
    <nav className="w-full bg-black shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl  mx-auto px-6  py-4  flex items-center justify-between ">
        {/*Hamburger*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden cursor-pointer text-[#9CA3AF] "
        >
          {isOpen ? (
            <RxCross1 className="w-5 h-7" />
          ) : (
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          )}
        </button>

        {/* Logo */}

        <div className="flex items-center gap-2">
          <Image width={30} height={20} src={logo} alt="FITLOG Logo" />
          <Link href="/" className=" text-xl font-bold text-white">
            FITLOG
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center text-[#9CA3AF]">
          <ul className="flex gap-2">
            <li>
              <Link
                href="/"
                className={`px-4 py-2 rounded-full ${
                  pathname === "/"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "hover:bg-[#1A2312] hover:text-[#C2F800]"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/myplan"
                className={`px-4 py-2 rounded-full ${
                  pathname === "/myplan"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "hover:bg-[#1A2312] hover:text-[#C2F800]"
                }`}
              >
                Myplan
              </Link>
            </li>
         
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1 text-[#9CA3AF]">
          <div className=" flex gap-3 ">
            <div className="flex gap-2">
              <Link
                href={"/myplan"}
                className="flex items-center cursor-pointer "
              >
                Plan
                <span className="flex justify-center bg-[#C2F800]  ml-2 px-1.5 rounded-full text-s  text-black  border border-[#9CA3AF]">
                  {todayPlan.length}
                </span>
              </Link>
            </div>
            <div className="flex gap-2 ">
              <Link
                href={"/myplan"}
                className="flex items-center cursor-pointer"
              >
                Saved
                <span className="flex  justify-center ml-2  px-1.5 rounded-full text-s  text-[#9CA3AF]  border border-gray-300">
                {savePlan.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-5 h-[400px]   flex  flex-col justify-center items-center gap-6 border-t pt-5 md:hidden text-[#9CA3AF]">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href="/"
                className={`px-4 py-2 rounded-full ${
                  pathname === "/"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "hover:bg-[#1A2312] hover:text-[#C2F800]"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/myplan"
                className={`px-4 py-2 rounded-full ${
                  pathname === "/myplan"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "hover:bg-[#1A2312] hover:text-[#C2F800]"
                }`}
              >
                Myplan
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
