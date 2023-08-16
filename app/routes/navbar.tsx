import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "@remix-run/react";
import { useScrollPostion } from "~/hooks/useScrollPosition";

export default function Navbar() {
  const scrollPositions = useScrollPostion();

  const activeClassName = "underline decoration-green-800";
  console.log("scrollpo ", scrollPositions);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover
      className={classNames(
        scrollPositions
          ? "fixed top-0  w-full bg-white transition opacity-100"
          : "invisible top-0 transition-opacity delay-500 duration-300 ease-out bg-opacity-100"
      )}
    >
      <div className="mx-auto max-w-7xl  px-6 bg-opacity-100">
        <div className="flex items-center justify-between  py-2 laptop:justify-start">
          <div className="flex desktop:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="stroke-green-900 h-16 w-auto"
                src="./logoLeaf.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 laptop:hidden">
            <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden space-x-10 tablet:flex laptop:items-center "
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/ouractivities"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Our activities
            </NavLink>
            <NavLink
              to="/ourteam"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Our team
            </NavLink>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition laptop:hidden"
        >
          <div className="divide-gray-50 divide-y-2 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-100">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  About us
                </NavLink>
                <NavLink
                  to="/ouractivities"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Our activities
                </NavLink>
                <NavLink
                  to="/ourteam"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Our team
                </NavLink>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
