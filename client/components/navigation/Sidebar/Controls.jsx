import { useState } from "react";
import {
  ButtonGroup,
  Toggle,
  Checkbox,
  Base as Button,
} from "../../core/button";
import { Base as Pill } from "../../core/pill";
import KeywordList from "./Keywords";

const Controls = ({
  cities,
  filterType,
  keywords,
  selectedKeywords,
  onChangeFilterType,
  isDptView,
  onClickGroupDpt,
  onClickKeyword,
}) => {
  const [sKeywords, setSKeywords] = useState(selectedKeywords);
  const [sIsDptView, setSIsDptView] = useState(isDptView);

  const onValidate = () => {
    onClickGroupDpt(sIsDptView);
    onClickKeyword(sKeywords);
  };

  const updateKeywords = (keyword) => {
    const newKeywords = [...sKeywords];

    // Add or remove keyword from list
    if (keyword !== null) {
      const keywordIndex = sKeywords.indexOf(keyword);
      if (keywordIndex >= 0) {
        newKeywords.splice(keywordIndex, 1);
      } else {
        newKeywords.push(keyword);
      }
    }

    setSKeywords(newKeywords);
  };

  return (
    <div className="flex-none">
      {/* <ButtonGroup
        buttons={[
          { name: "Villes", id: "cities" },
          { name: "Technos", id: "technologies" },
        ]}
        selectedId={filterType}
        onChange={onChangeFilterType}
      /> */}

      <div className="flex justify-center flex-wrap items-center  border-0 border-yellow-100 mt-2 mb-2">
        <Checkbox
          enabled={sIsDptView}
          onChange={() => setSIsDptView(!sIsDptView)}
        />
        {/* <Toggle enabled={isDptView} onChange={onClickGroupDpt} /> */}
        <span className="pl-2 py-2 text-white font-sans">
          Voir que les départements ?
        </span>
      </div>
      <div className="mt-2 flex flex-col flex-wrap justify-center px-4 text-white font-sans">
        {sKeywords.length > 0 && (
          <p
            className="font-sans text-left"
            style={{
              width: "17vw",
            }}
          >
            Lieux contenants des offres avec :{" "}
            {sKeywords.map((s) => (
              <Pill>{s}</Pill>
            ))}
          </p>
        )}
        <p className="text-right font-sans font-bold my-2">
          Total: {cities.length}
        </p>
      </div>

      <KeywordList
        keywords={keywords}
        selectedKeywords={sKeywords}
        onClick={updateKeywords}
      />
      <div className="py-2 mt-4 flex justify-center">
        <Button
          className="border text-center border-yellow-100 rounded-md p-2 text-yellow-100 hover:bg-yellow-100 hover:text-yellow-900"
          onClick={onValidate}
        >
          Valider la sélection
        </Button>
      </div>
    </div>
  );
};

export default Controls;
