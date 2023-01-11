import IntroductionIndexPage from "./introduction";
import WhatWeIndexPage from "./aboutus";
import Navbar from "./navbar";

export default function Index() {
  return (
    <div className="mx:auto h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <div className="flex  h-screen w-screen snap-start">
        <div className="min-h-screen w-full bg-cover-pic bg-cover bg-center object-cover">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
          <Navbar />
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="max-w-3xl items-start pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                  <div>
                    <h1 className="text-heading-md max-w-550     text-orange sm:text-6xl">
                      Follow The Leaf
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-orange ">
                      Explore together the way to live in a more sustainable
                      world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex  h-screen w-screen snap-start">
        <IntroductionIndexPage />
      </div>
      <div className="flex  h-screen w-screen snap-start">
        <WhatWeIndexPage />
      </div>
    </div>
  );
}
