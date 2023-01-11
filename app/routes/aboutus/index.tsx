import Navbar from "../navbar";

const projects = [
  {
    id: 1,
    program: "Youth exchanges and young mobility programs.",
    href: "#",
    imageSrc: "card1.jpg",
    imageAlt: "youthExchange",
    moreInfo: "Explore more",
  },
  {
    id: 2,
    program:
      "Do you want to live an amazing experience abroad? Discover the project that interest you the most.",
    href: "#",
    imageSrc: "card2.jpg",
    imageAlt: "experience",
    moreInfo: "Explore more",
  },
  {
    id: 3,
    program: "Local activities. Explore what we do for our community.",
    href: "#",
    imageSrc: "card3.jpg",
    imageAlt: "activities",
    moreInfo: "Explore more",
  },
];

export default function WhatWeIndexPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-whatwe-pic bg-cover bg-center object-cover">
      {/* <Navbar /> */}
      <h2 className="text-gray-900 mt-10 pt-10 text-center text-2xl font-bold   tracking-tight sm:py-32 lg:px-8 lg:pt-10">
        What we do
      </h2>

      <div className="mx-10 mt-6 mr-10 grid  grid-cols-1 content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-gray-700 text-sm">
                  <a href={project.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {project.program}
                  </a>
                </h3>
                <p className="text-gray-500 mt-1 text-sm">{project.moreInfo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
