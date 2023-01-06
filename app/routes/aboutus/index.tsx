import Navbar from "../navbar";

// export default function WhatWeIndexPage() {
//   return (
//     <div className="min-h-screen w-full bg-whatwe-pic bg-cover bg-center object-cover">
//       <Navbar />
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="sm:text-center">
//           <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
//             What we do
//           </p>
//         </div>

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none ">
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
//               <div className="group relative">
//                 <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
//                   <img
//                     src="card1.jpg"
//                     alt="Collection of four insulated travel bottles on wooden shelf."
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>

//                 <p className="mt-2  text-base font-semibold text-black">
//                   Youth exchanges and young mobility programs.
//                 </p>
//                 <h3 className="mt-2  text-sm text-black">
//                   <a href="#">
//                     <span className="absolute inset-0"></span>
//                     Explore more
//                   </a>
//                 </h3>
//               </div>

//               <div className="group relative">
//                 <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
//                   <img
//                     src="card2.jpg"
//                     alt="Collection of four insulated travel bottles on wooden shelf."
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>

//                 <p className="mt-2  text-base font-semibold text-black">
//                   Do you want to live an amazing experience abroad? Discover the
//                   project that interest you the most.
//                 </p>
//                 <h3 className="mt-2  text-sm text-black">
//                   <a href="#">
//                     <span className="absolute inset-0"></span>
//                     Explore more
//                   </a>
//                 </h3>
//               </div>

//               <div className="group relative">
//                 <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
//                   <img
//                     src="card3.jpg"
//                     alt="Collection of four insulated travel bottles on wooden shelf."
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>

//                 <p className="mt-2 text-base font-semibold  text-black">
//                   Local activities. Explore what we do for our community.
//                 </p>
//                 <h3 className="mt-2  text-sm text-black">
//                   <a href="#">
//                     <span className="absolute inset-0"></span>
//                     Explore more
//                   </a>
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
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
      <Navbar />
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
