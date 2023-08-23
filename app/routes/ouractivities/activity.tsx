import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

export default function Activity() {
  let location = useLocation();
  return (
    <section className="p-4 desktop:p-8 dark:bg-gray-800 dark:text-gray-100">
         {location.pathname === "/ouractivities/activity" && <Navbar />}
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row pt-20">
			<img src="/circular-economy.jpg" alt="circular-economy" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">Circular economy/zero waste</h3>
				<p className="my-6 dark:text-gray-400 text-xl ">Circular economy is not only a lifestyle for individuals but it can also be a successful business model for companies and entrepreneurs. Through our projects, we aim to create a new generation of users rather than owners.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/sustainable-agriculture.jpg" alt="sustainable-agriculture" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">Sustainable agriculture</h3>
				<p className="my-6 dark:text-gray-400 text-xl">Farming is still trendy! With the help of local communities we learn more about rural life, traditions and culture from our ancestors. In return, we promote education and training of the rural population regarding innovation, entrepreneurship and digitalisation.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row">
			<img src="/sustainable-mobility.jpg" alt="sustainable-mobility" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">New and sustainable mobility </h3>
				<p className="my-6 dark:text-gray-400 text-xl">Living in rural areas presents its challenges, first and foremost due to the lack of well-developed infrastructures. At Follow the Leaf we encourage the usage of bikes, for both locals and tourists, while also taking advantage of the tools offered by the e-mobility revolution.</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/cleaner-oceans.jpg" alt="cleaner-oceans" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">Cleaner oceans </h3>
				<p className="my-6 dark:text-gray-400 text-xl">“The ocean is the lifeblood of our planet,” said UN Secretary-General António Guterres. Help us keep them clean during our clean-up days; or join forces with us in raising awareness about sustainable-managed fish stocks and the importance of marine protected areas.</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row">
			<img src="/biodiversity.jpg" alt="biodiversity" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">Biodiversity protection</h3>
				<p className="my-6 dark:text-gray-400 text-xl ">Did you know that in Sicily, there are more than 3,000 types of plants, over 200 bird species and 40 different mammals? Moreover, 245 Natura 2000 sites protect 470,000 hectares of land, in other words, 18% of the island. But all of this is at risk and it is also our job to protect what surrounds us, without taking it for granted. Let’s keep in touch with us and Mother Nature!</p>
				
			</div>
		</div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm tablet:flex-row-reverse">
			<img src="/sustainable-tourism.jpg" alt="" className="h-50 w-90 tablet:h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<h3 className="text-center text-3xl font-bold">Sustainable architecture/tourism</h3>
				<p className="my-6 dark:text-gray-400 text-xl">Sicily thrives on tourism. Can it be more sustainable? Yes it can. Old buildings can be more efficient and new ones can create added value by showcasing what the territory has to offer. Join us in building a more sustainable approach to tourism, so that we can all enjoy the beauty of this land.</p>
				
			</div>
		</div>
	</div>
</section>
  );
}
