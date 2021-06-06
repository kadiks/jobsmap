import { ButtonGroup, Toggle, Checkbox } from "../../core/button";

const Controls = ({
  cities,
  filterType,
  selectedKeywords,
  onChangeFilterType,
  isDptView,
  onClickGroupDpt,
}) => {
  return (
    <div className="flex-none">
      <ButtonGroup
        buttons={[
          { name: "Villes", id: "cities" },
          { name: "Technos", id: "technologies" },
        ]}
        selectedId={filterType}
        onChange={onChangeFilterType}
      />
      <div className="flex justify-center flex-wrap items-center border-t border-b border-indigo-900 mt-2 mb-2">
        <Checkbox enabled={isDptView} onChange={onClickGroupDpt} />
        {/* <Toggle enabled={isDptView} onChange={onClickGroupDpt} /> */}
        <span className="pl-2 text-white text-xs">
          Grouper les départements ?
        </span>
      </div>
      <div className="mt-2 flex flex-col items-center justify-center px-4 text-white">
        {selectedKeywords.length > 0 && (
          <p>
            Lieux contenants des offres avec : {selectedKeywords.join(", ")}
          </p>
        )}
        <p>Total: {cities.length}</p>
      </div>
    </div>
  );
};

export default Controls;
