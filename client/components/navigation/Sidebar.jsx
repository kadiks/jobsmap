import { useState } from "react";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { EditActiveIcon } from "@heroicons/react/solid";

import { ButtonGroup } from '../core/button';

import CityList from "./Cities";
import KeywordList from "./Keywords";

const Sidebar = ({
  cities,
  filterType,
  keywords,
  selectedKeywords,
  onChangeFilterType,
  onClickCity,
  onClickKeyword
}) => {
  
  return (
    <div className="bg-indigo-600 h-screen">
      <div className="px-12 pb-4 pt-2 border-b border-indigo-900">
        <h2 className="text-white text-2xl italic font-sans">Jobsmap</h2>
      </div>
      <ButtonGroup
        buttons={[{name: "Villes", id: "cities"}, {name: "Technos", id: "technologies"}]}
        selectedId={filterType}
        onChange={onChangeFilterType} />
      <div className="mt-2 flex flex-col items-center justify-center px-4 text-white">
        {selectedKeywords.length > 0 && <p>Villes contenants des offres avec : {selectedKeywords.join(', ')}</p>}
        <p>Total: {cities.length}</p>

      </div>
      <div className="pt-4 flex flex-col space-x-px">
        <div className="flex-1">
          {filterType === "cities" && <CityList cities={cities} onClick={onClickCity} />}
          {filterType === "technologies" && <KeywordList keywords={keywords} selectedKeywords={selectedKeywords} onClick={onClickKeyword} />}
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
