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
  scrollbarHeight,
}) => {
  const scrollHeight = scrollbarHeight;
  return (
    <div className={styles.scrollbar}>
      <div className="flex-1">
        <CityList
          scrollHeight={scrollHeight}
          cities={cities}
          onClick={onClickCity}
        />
      </div>
    </div>
  );
};

export default Scrollbar;
