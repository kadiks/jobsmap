import { useState } from "react";

import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronUpIcon,
  FilterIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

import Title from "./Title";
import Controls from "./Controls";
import Scrollbar from "./Scrollbar";
import Credits from "./Credits";

const Sidebar = ({
  cities,
  filterType,
  keywords,
  selectedKeywords,
  isDptView,
  onChangeFilterType,
  onClickCity,
  onClickKeyword,
  onClickGroupDpt,
}) => {
  const [selectedAccordion, setSelectedAccordion] = useState(["location"]);

  const onSelectAccordion = (selected) => {
    const accIndex = selectedAccordion.indexOf(selected);
    if (accIndex >= 0) {
      const oldAcc = [...selectedAccordion];
      oldAcc.splice(accIndex, 1);
      setSelectedAccordion(oldAcc);
    } else {
      setSelectedAccordion([...selectedAccordion, selected]);
    }
  };

  return (
    <div
      className="bg-gray-800 h-screen flex flex-col"
      style={{
        boxShadow: "-3px 0px 6px rgb(38 53 74) inset",
      }}
    >
      <Title />
      <Disclosure
        as="div"
        className="px-2 my-2"
        onClick={() => onSelectAccordion("search")}
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <FilterIcon className="w-5 h-5 text-yellow-500" />
              <span>RECHERCHE</span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-yellow-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <div className="py-2">
                  <Controls
                    cities={cities}
                    keywords={keywords}
                    filterType={filterType}
                    selectedKeywords={selectedKeywords}
                    onChangeFilterType={onChangeFilterType}
                    isDptView={isDptView}
                    onClickGroupDpt={onClickGroupDpt}
                    onClickKeyword={onClickKeyword}
                  />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure
        as="div"
        className="px-2"
        defaultOpen={true}
        onClick={() => onSelectAccordion("location")}
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
              <LocationMarkerIcon className="w-5 h-5 text-yellow-500" />
              <span>LIEUX</span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-yellow-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <div className="py-2">
                  <Scrollbar
                    cities={cities}
                    filterType={filterType}
                    keywords={keywords}
                    selectedKeywords={selectedKeywords}
                    onClickCity={onClickCity}
                    onClickKeyword={onClickKeyword}
                    scrollbarHeight={
                      selectedAccordion.length === 2 ? "13vh" : "65vh"
                    }
                  />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Credits />
    </div>
  );
};

export default Sidebar;
