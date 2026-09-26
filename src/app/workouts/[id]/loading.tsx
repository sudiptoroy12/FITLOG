const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0D0F12] py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 grid overflow-hidden lg:grid-cols-2">

          {/* ================= IMAGE SKELETON ================= */}
          <div className="flex min-h-[400px] items-center lg:min-h-[600px]">
            <div className="h-[400px] w-full animate-pulse rounded-2xl bg-[#1A1E24] lg:h-[600px]" />
          </div>

          {/* ================= CONTENT SKELETON ================= */}
          <div className="p-4 sm:p-6">

            {/* Workout Name */}
            <div className="h-10 w-3/4 animate-pulse rounded-lg bg-[#1A1E24] sm:h-12" />

            {/* Description */}
            <div className="mt-5 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-[#1D2128]" />
              <div className="h-3 w-11/12 animate-pulse rounded bg-[#1D2128]" />
              <div className="h-3 w-4/6 animate-pulse rounded bg-[#1D2128]" />
            </div>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="h-7 w-20 animate-pulse rounded-full bg-[#252A32]" />
              <div className="h-7 w-24 animate-pulse rounded-full bg-[#252A32]" />
              <div className="h-7 w-20 animate-pulse rounded-full bg-[#252A32]" />
            </div>

            {/* ================= STATS SKELETON ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292D35] bg-[#16191F]">

              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#292D35] px-4 py-4 last:border-b-0"
                >
                  {/* Label */}
                  <div className="h-3 w-20 animate-pulse rounded bg-[#252A32]" />

                  {/* Value */}
                  <div className="h-4 w-24 animate-pulse rounded bg-[#252A32]" />
                </div>
              ))}
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-5">

              {/* Heading */}
              <div className="h-4 w-28 animate-pulse rounded bg-[#252A32]" />

              {/* Instructions */}
              <div className="mt-4 space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    {/* Number */}
                    <div className="h-5 w-5 shrink-0 animate-pulse rounded bg-[#252A32]" />

                    {/* Text */}
                    <div className="h-5 w-full animate-pulse rounded bg-[#1D2128]" />
                  </div>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="h-12 w-full animate-pulse rounded-lg bg-[#252A32] sm:w-48" />

              <div className="h-12 w-full animate-pulse rounded-lg bg-[#1D2128] sm:w-48" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;