import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar";


export default function AboutUs() {
  let { t } = useTranslation();
  const features = [
    {
      name: t('ABOUTUS_WHO_NAME'),
      description: t('ABOUTUS_WHO_DESCRIPTION'),
      icon: "./tropical-leaves.png"
    },
    {
      name: t('ABOUTUS_GOALS_NAME'),
      description: t('ABOUTUS_GOALS_DESCRIPTION'),
      icon: "./leaf_leafs.png"
    },
    {
      name: t('ABOUTUS_PRIORITES_NAME'),
      description: t('ABOUTUS_PRIORITES_DESCRIPTION'),
      icon: "./fern_leaves.png"
    },
  ];

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
