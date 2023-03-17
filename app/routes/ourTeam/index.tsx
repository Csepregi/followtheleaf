import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function OurTeam() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-white py-32 py-24">
      {location.pathname === "/ourteam" && <Navbar />}
      <div className="mb-16">
        <div>
          <div className="container mx-auto flex justify-center pt-16">
            <div></div>
          </div>
          <div className="bg-gray-100 w-full px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="xl:justify-between sm:justify-around flex flex-wrap items-center laptop:flex laptop:justify-around desktop:flex desktop:justify-around"
              >
                <div
                  role="listitem"
                  className="relative  mb-24 mt-16 mb-32 laptop:w-2/5 desktop:w-1/3 desktop:w-2/5 desktop:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-white shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="./claudia.jpeg"
                          alt="claudia"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <h1 className="mb-1 text-center text-3xl font-bold">
                        Claudia Patricolo
                      </h1>
                      <p className="text-gray-800 text-center text-sm">
                        Founder
                      </p>
                      <p className="text-gray-600 pt-3 text-center text-base font-normal">
                        Professional energy journalist, with expertise that
                        ranges from environmental protection to climate change,
                        from renewables to flexible electricity, from the
                        geopolitics of energy to the effects of biodiversity
                        loss on our health and everyday life.
                      </p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <div aria-label="FollowTheLeaf" role="img">
                          <img
                            className="h-8 w-max laptop:h-16"
                            src="./Logo.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="relative  mb-24 mt-16 mb-32 laptop:w-2/5 desktop:w-1/3 desktop:w-2/5 desktop:max-w-sm"
                >
                  <div className="overflow-hidden rounded bg-white shadow-md">
                    <div className="absolute -mt-20 flex w-full justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="./gabi.jpeg"
                          alt="gabi"
                          className="h-full w-full rounded-full object-cover shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mt-16 px-6">
                      <h1 className="mb-1 text-center text-3xl font-bold">
                        Csepregi Gábor
                      </h1>
                      <p className="text-gray-800 text-center text-sm">
                        {" "}
                        Vice President
                      </p>
                      <p className="text-gray-600 pt-3 text-center text-base font-normal">
                        IT developer and believes that digital skills must be
                        acquired by everybody. Hungarian national and former
                        member of the rowing national team,
                      </p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        <div aria-label="FollowTheLeaf" role="img">
                          <img
                            className="h-8 w-max laptop:h-16"
                            src="./Logo.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
