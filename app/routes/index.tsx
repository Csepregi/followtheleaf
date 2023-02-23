import Navbar from "./navbar";
import Aboutus from "./aboutus";
import OurActivities from "./ouractivities";

export default function Index() {
  return (
    <>
      <div className="min-h-screen w-full bg-opacity-70 bg-cover-pic bg-cover bg-center object-cover">
        <Navbar />
        <main>
          <div className="lg:px-8  px-6">
            <div className="sm:pt-48 sm:pb-40 max-w-3xl items-start pt-20 pb-32">
              <div>
                <h2 className="leading-19 mt-6 text-5xl  text-orange ">
                  Explore together the way to live in a more sustainable world
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Aboutus />
      <OurActivities />
    </>
  );
}
