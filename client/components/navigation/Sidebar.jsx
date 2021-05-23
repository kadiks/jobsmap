import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { EditActiveIcon } from "@heroicons/react/solid";

import CityList from "./Cities";

const Sidebar = ({ cities, onClick }) => {
  return (
    <div className="bg-indigo-600 h-screen">
      <div className="px-12 pb-4 pt-2 border-b border-indigo-900">
        <h2 className="text-white text-2xl italic ">Jobsmap</h2>
      </div>
      <div className="pt-4 flex flex-col space-x-px">
        <div className="flex-1">
          <CityList cities={cities} onClick={onClick} />
        </div>

        <Link href="/about">
          <a className="border text-center border-indigo-100 rounded-md p-2 text-white hover:text-indigo-600 hover:bg-indigo-100">
            A propos
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
