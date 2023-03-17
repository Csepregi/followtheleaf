import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function OurTeam() {
  let location = useLocation();
  return (
    // <div className="relative min-h-screen ">
    //   <div className="100% absolute w-full bg-mare-pic bg-cover  bg-bottom">
    //     {location.pathname === "/ourteam" && <Navbar />}
    //     <section className="mx-auto max-w-6xl px-4 py-12 desktop:px-4">
    //       <div className="pb-12 text-center">
    //         <h2 className="text-indigo-600 text-base font-bold">Our Team</h2>
    //       </div>
    //       <div className="grid grid-cols-1 gap-6 desktop:grid-cols-2">
    //         <div className="bg-gray-900 sahdow-lg flex w-full flex-col overflow-hidden rounded-lg laptop:flex-row">
    //           <div className="h-80 w-full laptop:w-2/5">
    //             <img
    //               className="h-full w-full object-cover object-center"
    //               src="./claudia.jpeg"
    //               alt="claudia"
    //             />
    //           </div>
    //           <div className="w-full space-y-2 p-6 text-left laptop:w-3/5 laptop:p-4">
    //             <p className="text-xl font-bold text-white">Dany Bailey</p>
    //             <p className="text-gray-400 text-base font-normal">
    //               Software Engineer
    //             </p>
    //             <p className="text-gray-500 text-base font-normal leading-relaxed">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //             <div className="flex justify-start space-x-2"></div>
    //           </div>
    //         </div>
    //         <div className="bg-gray-900 sahdow-lg flex w-full flex-col overflow-hidden rounded-lg laptop:flex-row">
    //           <div className="h-80 w-full laptop:w-2/5">
    //             <img
    //               className="h-full w-full object-cover object-center"
    //               src="./gabi.jpeg"
    //               alt="gabi"
    //             />
    //           </div>
    //           <div className="w-full space-y-2 p-4 text-left laptop:w-3/5 laptop:p-4">
    //             <p className="text-xl font-bold text-white">Lucy Carter</p>
    //             <p className="text-gray-400 text-base font-normal">
    //               Graphic Designer
    //             </p>
    //             <p className="text-gray-500 text-base font-normal leading-relaxed">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //             <div className="flex justify-start space-x-2"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div className="min-h-screen w-full bg-white py-32 py-24">
      {location.pathname === "/ourteam" && <Navbar />}
      <div className="mb-16">
        <div>
          <div className="container mx-auto flex justify-center pt-16">
            <div>
              <h1 className="text-gray-800 mx-auto pb-6 text-center text-3xl font-extrabold desktop:text-4xl">
                Our Team
              </h1>
            </div>
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
                            className="h-16 w-max"
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
                            className="h-16 w-max"
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
