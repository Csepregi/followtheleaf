export default function WhatWeIndexPage() {
  return (
    <div className="min-h-screen w-full bg-whatwe-pic bg-cover bg-center object-cover">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            What we do
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none ">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src="card1.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <p className="mt-2  text-base font-semibold text-black">
                  Youth exchanges and young mobility programs.
                </p>
                <h3 className="mt-2  text-sm text-black">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Explore more
                  </a>
                </h3>
              </div>

              <div className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src="card2.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <p className="mt-2  text-base font-semibold text-black">
                  Do you want to live an amazing experience abroad? Discover the
                  project that interest you the most.
                </p>
                <h3 className="mt-2  text-sm text-black">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Explore more
                  </a>
                </h3>
              </div>

              <div className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src="card3.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <p className="mt-2 text-base font-semibold  text-black">
                  Local activities. Explore what we do for our community.
                </p>
                <h3 className="mt-2  text-sm text-black">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Explore more
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
