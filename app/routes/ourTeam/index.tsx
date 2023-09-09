import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function OurTeam() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-white py-32 py-24">
      {location.pathname === "/ourteam" && <Navbar />}
    <section className="max-w-6xl mx-auto px-4 px-6 desktop:px-4 py-12">
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6">
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col laptop:flex-row">
                <div className="w-full laptop:w-2/5 h-80">
                    <img className="object-center object-cover w-full h-full" src="./claudiaprofile.jpeg" alt="claudia"/>
                </div>
                <div className="w-full laptop:w-3/5 text-left px-6 laptop:px-4 pt-0">
                    <p className="text-2xl text-base font-bold">Claudia Patricolo</p>
                    <p className="text-base text-gray-400 font-bold pb-2">Founder</p>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">Claudia is a professional energy journalist, with expertise that ranges from environmental protection to climate change, from the geopolitics of energy to the effects of biodiversity loss on our health and everyday life. After participating in several youth exchanges, training and EVS, she decided it was time to give back and share her knowledge.</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col laptop:flex-row">
                <div className="w-full laptop:w-2/5 h-80">
                    <img className="object-center object-cover w-full h-full" src="./gabiprofile.jpg" alt="gabi"/>
                </div>
                <div className="w-full laptop:w-3/5 text-left px-6 laptop:px-4 pt-0">
                    <p className="text-2xl text-base font-bold">Gábor Csepregi</p>
                    <p className="text-base text-gray-400 font-bold pb-2">Project Coordinator</p>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">Gábor is an IT developer and a former member of the Hungarian rowing national team. A profound nature lover, he envisions a future in which younger generations can enjoy the same wonders we are so lucky to be surrounded by today.</p>
                </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col laptop:flex-row">
                <div className="w-full laptop:w-2/5 h-80">
                    <img className="object-center object-cover w-full h-full" src="./agnese.jpg" alt="agnese"/>
                </div>
                <div className="w-full laptop:w-3/5 text-left px-6 laptop:px-4 pt-0">
                    <p className="text-2xl text-base font-bold">Agnese Patricolo</p>
                    <p className="text-base text-gray-400 font-bold pb-2">Project Coordinator</p>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">Agnese is an elementary school teacher with a degree in psychology. Since her childhood she had a heartfelt love for animals and any living creature that habits our planet. In her daily life she helps changing young mindsets by raising awareness about the importance of taking care of the others.</p>
                </div>
            </div>
        </div>
    </section>

      {/* <div>
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
                          src="./claudiaprofile.jpeg"
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
                      Claudia is a professional energy journalist, with expertise that ranges from environmental protection to climate change, from the geopolitics of energy to the effects of biodiversity loss on our health and everyday life. After participating in several youth exchanges, training and EVS, she decided it was time to give back and share her knowledge.
                      </p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        
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
                          src="./gabiprofile.jpg"
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
                        Project Coordinator
                      </p>
                      <p className="text-gray-600 pt-3 text-center text-base font-normal">
                      Gábor is an IT developer and a former member of the Hungarian rowing national team. A profound nature lover, he envisions a future in which younger generations can enjoy the same wonders we are so lucky to be surrounded by today.
                      </p>
                      <div className="flex w-full justify-center pt-5 pb-5">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
