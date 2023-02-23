import { useLocation } from "react-router-dom";

import {
  StarIcon,
  ShieldCheckIcon,
  FlagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Navbar from "../navbar";

const features = [
  {
    name: "Who we are",
    description:
      "Follow the Leaf exists to connect young Europeans with the natural beauty of Sicily. It was born from a couple of nature lovers and sustainability experts, with a desire to embark on a new adventure.",
    icon: UserCircleIcon,
  },
  {
    name: "Our mission",
    description:
      "At our core, there is our love for the nature, from the newly planted tree in the nearby forest to the bicentenary oak, from the little hermit crab to the majestic whale.",
    icon: StarIcon,
  },
  {
    name: "Our goals",
    description:
      "Our goal is to raise awarennes about sustainability and the role that each and everyone one of us can play. One leaf doesn't mean much. But thousands of them make beautiful and strong trees. That's why at Follow the Leaf, we put you at the centre: young generations are the world's future and it is by spreading the word, leading by example and sharing knowledge and best practices that we can all be the change we wanna see in the world.",
    icon: FlagIcon,
  },
  {
    name: "Our priorities",
    description:
      "Enhance a change that is sustainable and at the same time inclusive. A broader change of mindset that leaves no one behind.",
    icon: ShieldCheckIcon,
  },
];

export default function AboutUs() {
  let location = useLocation();
  return (
    <div className="min-h-screen w-full bg-intro-back bg-cover bg-center object-cover py-32 py-24">
      {location.pathname === "/aboutus" && <Navbar />}
      <div className="mx-auto max-w-7xl px-6 laptop:px-8">
        <div className="mx-auto max-w-2xl laptop:text-center">
          <h1 className="text-indigo-600 text-5xl font-semibold  tracking-tight">
            About us
          </h1>
        </div>
        <div className="mx-auto mt-20 mt-16 max-w-2xl opacity-100 laptop:mt-24 laptop:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 laptop:max-w-none laptop:grid-cols-2 laptop:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-black-800 inline-block flex text-2xl text-green">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="text-gray-600 mt-2 text-xl leading-7">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
