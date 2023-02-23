import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function OurActivities() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-white py-32 py-24">
      {location.pathname === "/ouractivities" && <Navbar />}
      <div className="mx-auto max-w-2xl laptop:text-center">
        <h1 className="text-indigo-600 text-5xl font-semibold  tracking-tight">
          Our activities
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
        <div className=" my-8 max-w-sm overflow-hidden rounded shadow-lg">
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
          <div className="px-6 py-4"></div>
        </div>
      </div>
    </div>
  );
}
