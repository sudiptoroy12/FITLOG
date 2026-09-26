import Link from "next/link";
import { ArrowLeft, Dumbbell, Search } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0F12] px-6 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#292D35] bg-[#15181E]">
          <Dumbbell
            size={28}
            className="text-[#C2F800]"
            strokeWidth={1.8}
          />
        </div>

        {/* 404 */}
        <p className="text-[100px] font-black leading-none tracking-[-0.08em] text-[#C2F800] sm:text-[140px]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          Workout Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#858B96] sm:text-base">
          Looks like this workout took a rest day. The page you&apos;re
          looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#D2FF2B] sm:w-auto"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

         
        </div>

        {/* Small Brand Text */}
        <div className="mt-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#555B66]">
            FIT
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2F800]">
            LOG
          </span>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/3 h-px w-24 bg-gradient-to-r from-transparent to-[#292D35]" />
      <div className="absolute right-0 top-2/3 h-px w-24 bg-gradient-to-l from-transparent to-[#292D35]" />
    </main>
  );
};

export default NotFound;