import styles from "./SearchBar.module.css";

import { useSearchValue } from "../../context/SearchContext";
import { useRegionFilterContext } from "../../context/RegionContext";

const SearchBar = () => {
  const { setSearchValue } = useSearchValue("");
  const { setRegionFilterValue } = useRegionFilterContext("");

  return (
    <div className={styles.filterArea}>
      <div className={styles.inputArea}>
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          placeholder="Search for a country..."
          className={styles.searchBar}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <select
        className={styles.regions}
        onChange={(e) => setRegionFilterValue(e.target.value)}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          filter by region:
        </option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchBar;
