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
          <div>
            {location.pathname === "/aboutus" && <Navbar />}
                <div className="container mx-auto grid smallScreen:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
                 {features.map((feature) => ( 
                    <div key={feature.name}>
                       <div className="flex flex-col items-center justify-center mt-10">
                            <img alt={feature.icon} src={feature.icon} className="mb-10 w-24 h-24"/>
                            <p className="text-base font-semibold leading-4 my-2 text-xl text-gray-800">{feature.name}</p>
                        </div>
                        <div className="group w-full bg-white relative flex flex-col items-center  shadow-md laptop:p-12 p-6">
                            <div className="text-gray-600  flex flex-col items-center">
                                <p className="xl:w-80 text-lg leading-normal text-center mt-4">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    );
}
