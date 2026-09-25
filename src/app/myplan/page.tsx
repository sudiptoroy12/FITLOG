"use client";

import Link from "next/link";

import {
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import SavePlan from "@/components/planpage/SavePlan";
import TodayPlan from "@/components/planpage/TodayPlan";



 

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

     const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");




  return (
    <main className="min-h-screen bg-[#0D0F12] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <section>
          <h1 className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-[#8B919D]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* ================= SUMMARY ================= */}

        <section className="mt-7 grid grid-cols-1 overflow-hidden rounded-xl border border-[#292D35] bg-[#15181E] sm:grid-cols-3">

          {/* Exercises */}
          <div className="border-b border-[#292D35] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-[#858B96]">
              Exercises
            </p>

            <p className="mt-1 text-3xl font-extrabold text-[#C2F800]">
            5
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#292D35] px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-[#858B96]">
              Minutes
            </p>

            <p className="mt-1 text-3xl font-extrabold">
             14
            </p>
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <p className="text-xs text-[#858B96]">
              Calories
            </p>

            <p className="mt-1 text-3xl font-extrabold">
              55
            </p>
          </div>

        </section>

        {/* ================= FILTER BAR ================= */}

        <section className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-[#292D35] bg-[#15181E] p-1">

            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-5 py-2 text-xs font-medium transition ${
                activeTab === "today"
                  ? "bg-[#1E232B] text-white shadow-sm"
                  : "text-[#777E89] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-5 py-2 text-xs font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#1E232B] text-white shadow-sm"
                  : "text-[#777E89] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#777E89]">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "duration"
                      | "calories"
                      | "rating"
                  )
                }
                className="appearance-none rounded-lg border border-[#292D35] bg-[#15181E] py-2 pl-3 pr-9 text-xs text-white outline-none"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8B919D]"
              />
            </div>
          </div>

        </section>
        <section>
        {activeTab == "today" ? <TodayPlan/> : <SavePlan/>}
        </section>


      </div>
    </main>
  );
};

export default MyPlan;