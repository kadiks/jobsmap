import { useState } from "react";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

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
  return (
    <div className="bg-indigo-600 h-screen flex flex-col">
      <Title />
      <Controls
        cities={cities}
        filterType={filterType}
        selectedKeywords={selectedKeywords}
        onChangeFilterType={onChangeFilterType}
        isDptView={isDptView}
        onClickGroupDpt={onClickGroupDpt}
      />
      <Scrollbar
        cities={cities}
        filterType={filterType}
        keywords={keywords}
        selectedKeywords={selectedKeywords}
        onClickCity={onClickCity}
        onClickKeyword={onClickKeyword}
      />
      <Credits />
    </div>
  );
};

export default Sidebar;
