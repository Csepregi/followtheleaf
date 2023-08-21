import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScrollPostion } from "~/hooks/useScrollPosition";
import { Disclosure } from '@headlessui/react'

export default function Navbar() {
  const scrollPositions = useScrollPostion();

  // const activeclassName = "underline text-2xl font-bold";
  // const navLink = "text-2xl font-semibold";
  console.log("scrollpo ", scrollPositions);

  function classNames(...classNamees: any) {
    return classNamees.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/aboutus', current: false },
    { name: 'Our Activities', href: '/ouractivities', current: false },
    { name: 'Our Team', href: '/ourteam', current: false },
  ]

  return (
    // <Popover
    //   className={classNames(
    //     scrollPositions
    //       ? "fixed top-0  w-full bg-white transition opacity-100"
    //       : "invisible top-0 transition-opacity delay-500 duration-300 ease-out bg-opacity-100"
    //   )}
    // >
    //   <div className="mx-auto max-w-7xl  px-6 bg-opacity-100">
    //     <div className="flex items-center justify-between  py-2 ">
    //       <div className="flex desktop:flex-1 font-bold">
    //         <a href="/" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Your Company</span>
    //           <img
    //             className="stroke-zinc-950 h-16 w-30 w-auto "
    //             src="./logoLeaf.png"
    //             alt=""
    //           />
    //         </a>
    //       </div>
    //       <div className="-my-2 -mr-2 laptop:hidden">
    //         <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
    //           <span className="sr-only">Open menu</span>
    //           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //         </Popover.Button>
    //       </div>
    //       <Popover.Group
    //         as="nav"
    //         className="hidden space-x-10 tablet:flex laptop:items-center "
    //       >
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive ? activeclassName : navLink
    //           }
    //         >
    //           Home
    //         </NavLink>
    //         <NavLink
    //             to="/aboutus"
    //             className={({ isActive }) =>
    //               isActive ? activeclassName : navLink
    //             }
    //           >
    //             About us
    //           </NavLink>
    //         <NavLink
    //           to="/ouractivities"
    //           className={({ isActive }) =>
    //             isActive ? activeclassName : navLink
    //           }
    //         >
    //           Our activities
    //         </NavLink>
    //         <NavLink
    //           to="/ourteam"
    //           className={({ isActive }) =>
    //             isActive ? activeclassName : navLink
    //           }
    //         >
    //           Our team
    //         </NavLink>
    //       </Popover.Group>
    //     </div>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-200 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel
    //       focus
    //       className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition laptop:hidden"
    //     >
    //       <div className="divide-gray-50 divide-y-2 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-100">
    //         <div className="px-5 pt-5 pb-6">
    //           <div className="flex items-center justify-between">
    //             <div className="-mr-2">
    //               <Popover.Button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-indigo-500 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset">
    //                 <span className="sr-only">Close menu</span>
    //                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="laptop:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           <Link to="/" className="bg-gray-900 text-black block rounded-md px-3 py-2 text-base font-medium" >Home</Link>
    //           <Link to="/aboutus" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</Link>
    //           <Link to="/ouractivities" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Our activities</Link>
    //           <Link to="/ourteam" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"> Our team</Link>
    //         </div>
    //       </div>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
    <Disclosure as="nav" className={classNames(
           scrollPositions
             ? "fixed top-0  w-full bg-white transition opacity-100"
             : "invisible top-0 transition-opacity delay-500 duration-300 ease-out bg-opacity-100"
         )}
         >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 tablet:px-6 desktop:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center tablet:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  tablet:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="stroke-zinc-950 h-16 w-auto "
                    src="/logoLeaf.png"
                    alt="LeafLogo"
                  />
                </div>
                <div className="hidden tablet:ml-6 tablet:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-green' : 'text-gray-300 hover:bg-gray-700 hover:text-black',
                          'rounded-md px-3 py-2 text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <Disclosure.Panel className="tablet:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-green' : 'text-gray-300 hover:bg-gray-700 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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
