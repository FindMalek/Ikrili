import React from "react";
import { Disclosure } from "@headlessui/react";

export default function MobileNavigationItems() {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {/* Current: "bg-indigo-50 border-ikrili-primary text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-ikrili-primary bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        >
          About Us
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          How it Works
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Services
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          FAQs
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Contact Us
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
}
