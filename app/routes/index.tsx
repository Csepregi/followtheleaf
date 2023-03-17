import Navbar from "./navbar";
import Aboutus from "./aboutus";
import OurActivities from "./ouractivities";
import OurTeam from "./ourTeam";

export default function Index() {
  return (
    <>
      <div className="min-h-screen w-full bg-opacity-70 bg-turk-steps bg-cover bg-center object-cover">
        <Navbar />
      </div>
      <Aboutus />
      <OurActivities />

      <div className=" bg-gray-900">
        <div className="mx-auto max-w-2xl py-10 text-black">
          <div className="text-center">
            <h3 className="mb-3 text-3xl"> Let's keep in touch! </h3>
            <p> e-mail: followtheleaf.sicily@gmail.com </p>
            <div className="my-10 flex justify-center">
              <div className="mx-2 flex w-auto w-52 items-center rounded-lg border px-4 py-2">
                <img
                  src="./logoLeaf.png"
                  className="md:w-16 w-max"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
