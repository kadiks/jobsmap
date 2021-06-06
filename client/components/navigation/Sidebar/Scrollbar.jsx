import CityList from "./Cities";
import KeywordList from "./Keywords";

import styles from "../../../styles/Scrollbar.module.css";

const Scrollbar = ({
  cities,
  filterType,
  keywords,
  selectedKeywords,
  onClickCity,
  onClickKeyword,
}) => {
  const scrollHeight = "65vh";
  return (
    <div className={styles.scrollbar}>
      <div className="flex-1">
        {filterType === "cities" && (
          <CityList
            scrollHeight={scrollHeight}
            cities={cities}
            onClick={onClickCity}
          />
        )}
        {filterType === "technologies" && (
          <KeywordList
            scrollHeight={scrollHeight}
            keywords={keywords}
            selectedKeywords={selectedKeywords}
            onClick={onClickKeyword}
          />
        )}
      </div>
    </div>
  );
};

export default Scrollbar;
