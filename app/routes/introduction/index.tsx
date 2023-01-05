export default function IntroductionIndexPage() {
  return (
    <div className=" lg:grid lg:grid-cols-2  lg:space-y-0">
      <div className="min-h-screen w-full bg-introduction-pic bg-cover bg-center object-cover"></div>
      <div className="group relative bg-white">
        <div className="mt-10 sm:text-center">
          <p className="mt-2  text-3xl font-bold tracking-tight  sm:text-4xl">
            Who we are
          </p>
        </div>

        <div className="mt-12 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16  md:gap-x-12 md:gap-y-16">
            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div className="mr-12 sm:min-w-0 sm:flex-1">
                <p className="text-lg  font-semibold leading-8">
                  Competitive exchange rates
                </p>
                <p className="text-base leading-7">
                  Follow The Leaf exists to connect young Europeans with the
                  natural beauty of Sicily. At our core, there is our love for
                  the nature, from the newly planted tree in the nearby forest
                  to the bicentenary oak, from the little hermit crab to the
                  majestic whale.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
              </div>
              <div className="mr-10 sm:min-w-0 sm:flex-1">
                <p className="text-lg  font-semibold leading-8">
                  No hidden fees
                </p>
                <p className="text-base leading-7">
                  Our goal is to raise awarennes about sustainability and the
                  role that each and everyone one of us can play. One leaf
                  doesn't mean much. But thousands of them make beautiful and
                  strong trees.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center  rounded-xl text-white sm:shrink-0">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div className="mr-10 sm:min-w-0 sm:flex-1">
                <p className="text-lg  font-semibold leading-8">
                  Transfers are instant
                </p>
                <p className="text-base leading-7">
                  That's why at Follow The Leaf, we put you at the centre: young
                  generations are the world's future and it is by spreading the
                  word, leading by example and sharing knowledge and best
                  practices that we can all be the change we wanna see in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
