const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0D0F12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Heading Skeleton */}
        <div className="space-y-3">
          <div className="h-10 w-56 animate-pulse rounded-lg bg-[#1D2128]" />

          <div className="h-5 w-80 max-w-full animate-pulse rounded-md bg-[#1D2128]" />
        </div>

        {/* Workout Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#292D35] bg-[#15181E]"
            >
              {/* Image */}
              <div className="h-56 w-full animate-pulse bg-[#1D2128]" />

              {/* Content */}
              <div className="space-y-4 p-5">

                {/* Badge */}
                <div className="h-6 w-24 animate-pulse rounded-full bg-[#252A32]" />

                {/* Title */}
                <div className="h-6 w-3/4 animate-pulse rounded-md bg-[#252A32]" />

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-[#20242B]" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-[#20242B]" />
                </div>

                {/* Stats */}
                <div className="flex gap-4 border-t border-[#292D35] pt-4">
                  <div className="h-4 w-20 animate-pulse rounded bg-[#252A32]" />
                  <div className="h-4 w-20 animate-pulse rounded bg-[#252A32]" />
                  <div className="h-4 w-16 animate-pulse rounded bg-[#252A32]" />
                </div>

                {/* Button */}
                <div className="h-10 w-full animate-pulse rounded-lg bg-[#252A32]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;