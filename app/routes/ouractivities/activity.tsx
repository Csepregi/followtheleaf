import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function Activity() {
  let { t } = useTranslation();
  let location = useLocation();
  return (
    <section className="p-4 desktop:p-8 dark:bg-gray-800 dark:text-gray-100">
         {location.pathname === "/ouractivities/activity" && <Navbar />}
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row pt-20">
			<img src="/circular-economy.jpg" alt="circular-economy" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold"> {t("ACTIVITY_CIRCULAR_TITLE")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl ">{t("ACTIVITY_CIRCULAR_DESCRIPTION")}</p>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/sustainable-agriculture.jpg" alt="sustainable-agriculture" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">{t("ACTIVITY_SUSTAINABLE_NAME")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl">{t("ACTIVITY_SUSTAINABLE_DESCTIPTION")}</p>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row">
			<img src="/sustainable-mobility.jpg" alt="sustainable-mobility" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">{t("ACTIVITY_MOBILITY_NAME")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl"> {t("ACTIVITY_MOBILITY_DESCTIPTION")}</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/cleaner-oceans.jpg" alt="cleaner-oceans" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold"> {t("ACTIVITY_OCEANS_NAME")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl">{t("ACTIVITY_OCEANS_DESCRIPTION")}</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row">
			<img src="/biodiversity.jpg" alt="biodiversity" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">{t("ACTIVITY_BIODIVERSITY_NAME")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl ">{t("ACTIVITY_BIODIVERSITY_DESCRIPTION")}</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/sustainable-tourism.jpg" alt="" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">{t("ACTIVTIY_ARCHITECT_NAME")}</h3>
				<p className="my-6 dark:text-gray-400 text-xl">{t("ACTIVTIY_ARCHITECT_DESCTIPTION")}</p>
				
			</div>
		</div>
	</div>
</section>
  );
}
