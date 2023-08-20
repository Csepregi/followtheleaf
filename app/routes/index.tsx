import Navbar from "./navbar";
import Aboutus from "./aboutus";
import OurActivities from "./ouractivities";
import OurTeam from "./ourTeam";

export default function Index() {
  return (
    <>
      <Navbar />
        <main>
    
          <section className="tablet:flex justify-between 
                          items-center
                          py-20 px-10 bg-turk-steps  bg-cover  min-h-screen w-full text-white
                          "
                  id="About">
              <div className="absolute tablet:top-40 tablet:left-0 tablet:right-0 text-center">
                  <h2 className="text-3xl tablet:text-4xl 
                            desktop:text-6xl text-gray-100 
                            tablet:mb-6">
                    In nature, nothing is perfect and everything is perfect.
                  </h2>
                  <p className="mb-6">
                  Alice Walker
                  </p> 
              </div>
            
          </section>    
        </main>
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
