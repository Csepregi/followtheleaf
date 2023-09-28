import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScrollPostion } from "~/hooks/useScrollPosition";
import { Disclosure } from '@headlessui/react'
import { useTranslation } from "react-i18next";

export let handle = {
  i18n: "common",
};


export default function Navbar() {
  let { i18n, t } = useTranslation(["common"]);
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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
                <div className="flex-auto">
  <div className="flex justify-end items-center">
    <div className="flex gap-2 ">
      <div className="inline-flex items-center pt-2"> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

      </div>
      <div className="inline-flex items-center">
        <div className="w-full">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="peer opacity-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="default-radio-1" className="flex cursor-pointer bg-gray-200 h-10 w-full peer-checked:bg-rose-500 peer-checked:text-green text-[17px] text-sm font-medium text-gray-900 dark:text-gray-300" onClick={() => changeLanguage("it")}>it</label>
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="w-full">
          <input id="default-radio-2" type="radio" value="" name="default-radio" className="peer opacity-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="default-radio-2" className="flex cursor-pointer bg-gray-200 h-10 w-full peer-checked:bg-rose-500 peer-checked:text-green text-[17px] text-sm font-medium text-gray-900 dark:text-gray-300" onClick={() => changeLanguage("en")}>en</label>
        </div>
      </div>
    </div>
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
