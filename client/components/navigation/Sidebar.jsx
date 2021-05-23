import { Menu, Transition } from "@headlessui/react";
import { EditActiveIcon } from "@heroicons/react/solid";

import CityList from "./Cities";

const Sidebar = ({ cities, onClick }) => {
  return (
    <div className="bg-indigo-600 h-screen">
      <div className="px-12 pb-4 pt-2 border-b border-indigo-900">
        <h2 className="text-white text-2xl italic ">Jobsmap</h2>
      </div>
      <div className="pt-4">
        <CityList cities={cities} onClick={onClick} />
      </div>
    </div>
  );
};

export default Sidebar;
