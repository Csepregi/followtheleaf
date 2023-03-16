import Navbar from "./navbar";
import Aboutus from "./aboutus";
import OurActivities from "./ouractivities";

export default function Index() {
  return (
    <>
      <div className="min-h-screen w-full bg-opacity-70 bg-turk-steps bg-cover bg-center object-cover">
        <Navbar />
      </div>

      <Aboutus />
      <OurActivities />
      <div className="flex flex-col-reverse divide-x-[3px] divide-black">
        <footer className="bg-blueGray-200 relative pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="lg:text-left flex flex-wrap text-left">
              <div className="lg:w-6/12 w-full px-4">
                <h4 className="fonat-semibold text-blueGray-700 text-3xl">
                  Let's keep in touch!
                </h4>
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <div className="items-top mb-6 flex flex-wrap">
                  <div className="lg:w-4/12 ml-auto w-full px-4">
                    <ul className="list-unstyled">
                      <li>
                        <span>e-mail: followtheleaf.sicily@gmail.com </span>
                      </li>
                      <li>
                        <span>Address: Castellammare Del Golfo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
