import IntroductionIndexPage from "./introduction";
import WhatWeIndexPage from "./aboutus";

const navigation = [
  { name: "Who we are", href: "/introduction" },
  { name: "What We Do", href: "/aboutus" },
];

export default function Index() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <div className="flex h-screen w-screen snap-start">
        <div className="min-h-screen w-full bg-cover-pic bg-cover bg-center object-cover">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
          <div className="px-6 pt-6 lg:px-8">
            <div>
              <nav
                className="flex h-9 items-center justify-between"
                aria-label="Global"
              >
                <div className="mr-9 flex" aria-label="Global">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8" src="./Logo.png" alt="" />
                  </a>
                </div>
                <div className="hidden lg:left-0 lg:flex lg:min-w-0 lg:flex-1  lg:gap-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="hover:text-gray-900 font-semibold text-black"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <main>
            <div className="relative px-6 lg:px-8">
              <div className="max-w-3xl items-start pt-20 pb-32 sm:pt-48 sm:pb-40">
                <div>
                  <div>
                    <h1 className="text-heading-md max-w-550     text-orange sm:text-6xl">
                      Follow The Leaf
                    </h1>
                    {/* <p className="mt-6 text-lg leading-8 text-orange ">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex h-screen w-screen snap-start">
        <IntroductionIndexPage />
      </div>
      <div className="flex h-screen w-screen snap-start bg-white">
        <WhatWeIndexPage />
      </div>
    </div>
  );
}
