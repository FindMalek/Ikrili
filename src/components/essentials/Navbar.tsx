import { Disclosure } from "@headlessui/react";

import Logo from "@/components/essentials/Logo";

import DesktopNavigationItems from "@/components/essentials/navigation/DesktopNavigationItems";
import MobileMainMenu from "@/components/essentials/navigation/MobileMainMenu";
import MobileNavigationItems from "@/components/essentials/navigation/MobileNavigationItems";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-ikrili-bg shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center">
                {" "}
                {/* Adjusted to align items vertically */}
                <div className="flex flex-shrink-0 items-center">
                  <Logo className="block h-8 w-auto lg:hidden" />
                  <Logo className="hidden h-8 w-auto lg:block" />
                  <h1 className="xs:hidden sm:block md:block lg:block pl-4 font-semibold text-gray-900">
                    Ikrili
                  </h1>
                </div>
              </div>
              <DesktopNavigationItems />
              <MobileMainMenu open={open} />
            </div>
          </div>
          <MobileNavigationItems />
        </>
      )}
    </Disclosure>
  );
}
