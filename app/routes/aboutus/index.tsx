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
    name: "Basic Tee",
    href: "#",
    imageSrc: "card1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "card2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "card3.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function WhatWeIndexPage() {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <h2 className="text-gray-900 mt-10 text-center   text-2xl font-bold tracking-tight lg:px-8">
        What we do
      </h2>

      <div className="mt-6 grid grid-cols-1 content-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 bg-gray-200 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
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
                    {project.name}
                  </a>
                </h3>
                <p className="text-gray-500 mt-1 text-sm">{project.color}</p>
              </div>
              <p className="text-gray-900 text-sm font-medium">
                {project.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
