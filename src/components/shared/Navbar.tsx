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

  const { savePlan, todayPlan } = useContext(WorkoutContext);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#292D35] bg-black shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ================= HAMBURGER ================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer text-[#9CA3AF] transition hover:text-[#C2F800] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <RxCross1 className="h-6 w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2">
          <Image
            width={30}
            height={20}
            src={logo}
            alt="FITLOG Logo"
            className="h-auto"
          />

          <Link
            href="/"
            onClick={handleNavClick}
            className="text-xl font-bold text-white"
          >
            FITLOG
          </Link>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center text-[#9CA3AF] md:flex">
          <ul className="flex gap-2">

            <li>
              <Link
                href="/"
                className={`rounded-full px-4 py-2 ${
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
                className={`rounded-full px-4 py-2 ${
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

        {/* ================= PLAN / SAVED ================= */}
        <div className="flex items-center text-[#9CA3AF]">
          <div className="flex gap-3">

            <Link
              href="/myplan"
              className="flex items-center text-sm transition hover:text-white"
            >
              Plan

              <span className="ml-2 flex min-w-5 justify-center rounded-full border border-[#9CA3AF] bg-[#C2F800] px-1.5 text-xs text-black">
                {todayPlan.length}
              </span>
            </Link>

            <Link
              href="/myplan"
              className="flex items-center text-sm transition hover:text-white"
            >
              Saved

              <span className="ml-2 flex min-w-5 justify-center rounded-full border border-gray-300 px-1.5 text-xs text-[#9CA3AF]">
                {savePlan.length}
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {isOpen && (
        <div className="border-t border-[#292D35] bg-[#0D0F12] px-6 py-6 md:hidden">

          <div className="mx-auto max-w-md">

            {/* Mobile Menu Header */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#555B66]">
              Navigation
            </p>

            <div className="space-y-2">

              {/* Workouts */}
              <Link
                href="/"
                onClick={handleNavClick}
                className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-medium transition ${
                  pathname === "/"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#15181E] hover:text-white"
                }`}
              >
                <span>Workouts</span>

                <span
                  className={`h-2 w-2 rounded-full ${
                    pathname === "/"
                      ? "bg-[#C2F800]"
                      : "bg-[#353A44]"
                  }`}
                />
              </Link>

              {/* My Plan */}
              <Link
                href="/myplan"
                onClick={handleNavClick}
                className={`flex items-center justify-between rounded-xl px-4 py-4 text-sm font-medium transition ${
                  pathname === "/myplan"
                    ? "bg-[#1A2312] text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#15181E] hover:text-white"
                }`}
              >
                <span>My Plan</span>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#C2F800] px-2 py-0.5 text-xs font-bold text-black">
                    {todayPlan.length}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full ${
                      pathname === "/myplan"
                        ? "bg-[#C2F800]"
                        : "bg-[#353A44]"
                    }`}
                  />
                </div>
              </Link>

            </div>

            {/* Mobile Plan Summary */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-[#292D35] bg-[#15181E] p-4">
                <p className="text-xs text-[#777E89]">
                  Today&apos;s Plan
                </p>

                <p className="mt-1 text-xl font-bold text-[#C2F800]">
                  {todayPlan.length}
                </p>
              </div>

              <div className="rounded-xl border border-[#292D35] bg-[#15181E] p-4">
                <p className="text-xs text-[#777E89]">
                  Saved
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  {savePlan.length}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;