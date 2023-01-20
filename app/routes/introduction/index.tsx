import Navbar from "../navbar";

export default function IntroductionIndexPage() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <div className="w-full bg-introduction-pic bg-cover bg-center object-cover md:block">
          {/* <div className="min-h-screen w-full">
            <Navbar />
          </div> */}
        </div>
        <div className="group relative bg-white">
          <div className="mt-10 sm:text-center">
            <p className="mt-2  text-3xl font-bold tracking-tight  sm:text-4xl">
              Who we are
            </p>
          </div>

          <div className="mt-12 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16  md:gap-x-12 md:gap-y-16">
              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="mr-12 sm:min-w-0 sm:flex-1">
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
                <div className="mr-10 sm:min-w-0 sm:flex-1">
                  <p className="text-base leading-7">
                    Our goal is to raise awarennes about sustainability and the
                    role that each and everyone one of us can play. One leaf
                    doesn't mean much. But thousands of them make beautiful and
                    strong trees.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="mr-10 sm:min-w-0 sm:flex-1">
                  <p className="text-base leading-7">
                    That's why at Follow The Leaf, we put you at the centre:
                    young generations are the world's future and it is by
                    spreading the word, leading by example and sharing knowledge
                    and best practices that we can all be the change we wanna
                    see in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
