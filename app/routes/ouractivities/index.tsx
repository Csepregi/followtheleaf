import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import { Link } from "@remix-run/react";

export default function OurActivities() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-white py-32 py-24">
      {location.pathname === "/ouractivities" && <Navbar />}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="tracking-widest text-indigo-600 text-5xl font-semibold">
          OUR ACTIVITIES 
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="my-8 max-w-sm overflow-hidden rounded shadow-lg">
          <img className="w-full" src="/youth.jpg" alt="Zingaro" />
          <div className="px-6 py-4">
            <div className="mb-2 text-center text-xl font-bold">
              Youth exchanges
            </div>
            <p className="text-gray-600 text-center text-base">
              Participate in our young mobility programs: meet, learn, develop
              and grow.
            </p>
          </div>
          <div className="px-6 py-4"></div>
        </div>
        <div className="my-8 max-w-sm overflow-hidden rounded shadow-lg">
          <img className="w-full" src="/spain.jpg" alt="spain" />
          <div className="px-6 py-4">
            <div className="mb-2 text-center text-xl font-bold">
              Volunteering abroad
            </div>
            <p className="text-gray-600 text-center text-base">
              Do you want to live an amazing experience abroad? Discover the
              project that interests you the most among our partner
              organisations.
            </p>
          </div>
          <div className="px-6 py-4"></div>
        </div>
        <Link to="/ouractivities/activity" className=" my-8 max-w-sm overflow-hidden rounded shadow-lg">
          <img
            className="w-full"
            src="/animals.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-center text-xl font-bold">
              Local activities
            </div>
            <p className="text-gray-600 text-center text-base">
              Explore what we do for our community and what you can do to help.
            </p>
          </div>
          <div className="text-center">
          <a href="/ouractivities/activity" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-black">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Find Out More</span>
          </a>
         
          </div>
         
         
        </Link>
      </div>
    </div>
  );
}
