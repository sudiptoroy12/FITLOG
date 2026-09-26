const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0D0F12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* ================= HEADER ================= */}
        <section>
          <div className="h-10 w-44 animate-pulse rounded-lg bg-[#1D2128] sm:h-11" />

          <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-[#1D2128]" />
        </section>

        {/* ================= SUMMARY ================= */}
        <section className="mt-7 grid grid-cols-1 overflow-hidden rounded-xl border border-[#292D35] bg-[#15181E] sm:grid-cols-3">

          {/* Exercises */}
          <div className="border-b border-[#292D35] px-5 py-5 sm:border-b-0 sm:border-r">
            <div className="h-3 w-20 animate-pulse rounded bg-[#252A32]" />

            <div className="mt-2 h-9 w-12 animate-pulse rounded bg-[#252A32]" />
          </div>

          {/* Minutes */}
          <div className="border-b border-[#292D35] px-5 py-5 sm:border-b-0 sm:border-r">
            <div className="h-3 w-16 animate-pulse rounded bg-[#252A32]" />

            <div className="mt-2 h-9 w-14 animate-pulse rounded bg-[#252A32]" />
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <div className="h-3 w-16 animate-pulse rounded bg-[#252A32]" />

            <div className="mt-2 h-9 w-16 animate-pulse rounded bg-[#252A32]" />
          </div>

        </section>

        {/* ================= FILTER BAR ================= */}
        <section className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-[#292D35] bg-[#15181E] p-1">

            <div className="h-8 w-28 animate-pulse rounded-md bg-[#252A32]" />

            <div className="ml-1 h-8 w-20 animate-pulse rounded-md bg-[#1D2128]" />

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-12 animate-pulse rounded bg-[#252A32]" />

            <div className="h-9 w-28 animate-pulse rounded-lg border border-[#292D35] bg-[#15181E]" />
          </div>

        </section>

        {/* ================= WORKOUT LIST ================= */}
        <section className="mt-6 space-y-4">

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-4 rounded-2xl border border-[#292D35] bg-[#15181E] p-3"
            >
              {/* Image */}
              <div className="h-[72px] w-[125px] shrink-0 animate-pulse rounded-xl bg-[#1D2128]" />

              {/* Content */}
              <div className="min-w-0 flex-1">

                {/* Name */}
                <div className="h-4 w-48 max-w-[70%] animate-pulse rounded bg-[#252A32]" />

                {/* Equipment */}
                <div className="mt-2 h-3 w-28 animate-pulse rounded bg-[#20242B]" />

                {/* Stats */}
                <div className="mt-3 flex gap-4">
                  <div className="h-3 w-16 animate-pulse rounded bg-[#20242B]" />
                  <div className="h-3 w-20 animate-pulse rounded bg-[#20242B]" />
                  <div className="h-3 w-12 animate-pulse rounded bg-[#20242B]" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="hidden h-10 w-28 animate-pulse rounded-full bg-[#252A32] sm:block" />

                <div className="h-10 w-10 animate-pulse rounded-full bg-[#252A32] sm:w-28" />

                <div className="h-9 w-9 animate-pulse rounded-full bg-[#20242B]" />
              </div>
            </div>
          ))}

        </section>
      </div>
    </main>
  );
};

export default Loading;