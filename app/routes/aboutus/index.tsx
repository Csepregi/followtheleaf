import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

const features = [
  {
    name: "Who we are",
    description:
      "Follow the Leaf exists to connect young Europeans with the natural beauty of Sicily. It was born from a couple of nature lovers and sustainability experts, with a desire to embark on a new adventure.",
    icon: "./tropical-leaves.png"
  },
  {
    name: "Our goals",
    description:
      "Our goal is to raise awareness about sustainability and the role that each and every one of us can play. One leaf doesn't mean much. But thousands of them make beautiful and strong trees.",
    icon: "./leaf_leafs.png"
  },
  {
    name: "Our priorities",
    description:
      "Enhance a change that is sustainable and at the same time inclusive. A broader change of mindset that leaves no one behind.",
    icon: "./fern_leaves.png"
  },
];

export default function AboutUs() {
  let location = useLocation();
  return (
    <div className="w-full  object-cover py-32 py-24">
      {location.pathname === "/aboutus" && <Navbar />}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto w-full ">
    
    <div className="flex flex-wrap -m-2 -mx-8 -mb-10 -mt-4 tablet:space-y-0 space-y-2 text-center grid place-items-center">
    {features.map((feature) => (
      <div key={feature.name}  className="p-2 tablet:w-1/3  space-y-16  grid  place-items-center  overflow-x-auto">
        <img alt={feature.icon} src={feature.icon} className="w-20 h-20"/>
        {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            
          </svg>
        </div> */}
        <div className="">
          <h2 className="text-gray-900  title-font font-bold text-xl mb-2">{feature.name}</h2>
          <p className="leading-relaxed text-lg"> {feature.description}</p>
        </div>
      </div>
      ))}
     
    </div>
    {/* <div aria-hidden="true" className="hidden mt-10 desktop:block mt-30">
        <img
          src="https://source.unsplash.com/random/400x650/?sicily"
          alt=""
          className="bg-gray-500 mx-auto rounded-lg shadow-lg"
        />
    </div> */}
  </div>
</section>
    </div>
  );
}
