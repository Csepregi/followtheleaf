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
          <Disclosure.Panel className={classNames(
           scrollPositions
             ? "tablet:hidden fixed top-0  w-full bg-white transition opacity-100"
             : "tablet:hidden invisible top-0 transition-opacity delay-500 duration-300 ease-out bg-opacity-100"
         )}>
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
