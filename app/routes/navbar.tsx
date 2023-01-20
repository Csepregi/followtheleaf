import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Who we are", href: "/introduction", current: true },
  { name: "What We Do", href: "/aboutus", current: true },
  { name: "Programs", href: "/programs", current: true },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const HEADER_HIDE_THRESHOLD = 400;

export default function Navbar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let previousScrollValue: any;

    function handleScroll(ev: any) {
      const currentScroll = window.scrollY;

      if (typeof previousScrollValue !== "number") {
        previousScrollValue = currentScroll;
        return;
      }

      const direction = currentScroll > previousScrollValue ? "down" : "up";

      if (
        isHeaderVisible &&
        direction === "down" &&
        currentScroll > HEADER_HIDE_THRESHOLD
      ) {
        setIsHeaderVisible(false);
      } else if (!isHeaderVisible && direction === "up") {
        setIsHeaderVisible(true);
      }

      previousScrollValue = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible]);

  const transform = isHeaderVisible ? "translateY(0%)" : "translateY(-100%)";

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 max-w navbar"
      style={{ transform }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./Logo.png"
                    alt="Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./Logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-black"
                            : "text-gray-300 hover:bg-gray-700 hover:text-black",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
