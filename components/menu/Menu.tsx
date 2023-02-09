import React, { Fragment } from "react";
import { Menu as MenuHeadless, Transition } from "@headlessui/react";

type Props = {};

const Menu: React.FC<Props> = ({}) => {
  return (
    <MenuHeadless as="div" className="relative inline-block text-left">
      <div>
        <MenuHeadless.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Options
        </MenuHeadless.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <MenuHeadless.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 "></div>
        </MenuHeadless.Items>
      </Transition>
    </MenuHeadless>
  );
};

export default Menu;
