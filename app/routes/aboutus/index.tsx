import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

const features = [
  {
    name: "Who we are",
    description:
      "Follow the Leaf exists to connect young Europeans with the natural beauty of Sicily. It was born from a couple of nature lovers and sustainability experts, with a desire to embark on a new adventure.",
  },
  {
    name: "Our mission",
    description:
      "At our core, there is our love for the nature, from the newly planted tree in the nearby forest to the bicentenary oak, from the little hermit crab to the majestic whale.",
  },
  {
    name: "Our goals",
    description:
      "Our goal is to raise awarennes about sustainability and the role that each and everyone one of us can play. One leaf doesn't mean much. But thousands of them make beautiful and strong trees. That's why at Follow the Leaf, we put you at the centre: young generations are the world's future and it is by spreading the word, leading by example and sharing knowledge and best practices that we can all be the change we wanna see in the world.",
  },
  {
    name: "Our priorities",
    description:
      "Enhance a change that is sustainable and at the same time inclusive. A broader change of mindset that leaves no one behind.",
  },
];

export default function AboutUs() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-intro-back bg-cover bg-center object-cover py-32 py-24">
      {location.pathname === "/aboutus" && <Navbar />}
      <section className="bg-gray-800 text-gray-100">
        <div className="container mx-auto max-w-xl space-y-24 p-6 py-12 desktop:max-w-7xl desktop:px-8">
          <div className="grid desktop:grid-cols-2 desktop:items-center desktop:gap-8">
            <div>
              <div className="mt-12 space-y-12">
                {features.map((feature) => (
                  <div key={feature.name} className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-violet-400 text-gray-900 flex h-12 w-12 items-center justify-center rounded-md">
                        <img
                          className="h-6 w-max laptop:h-10"
                          src="./Logo.png"
                          alt="logo"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg text-gray-50 font-medium leading-6">
                        {feature.name}
                      </h4>
                      <p className="text-gray-400 mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 desktop:mt-0">
              <img
                src="https://source.unsplash.com/random/400x650/?sicily"
                alt=""
                className="bg-gray-500 mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
