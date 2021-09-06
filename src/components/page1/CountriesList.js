import styles from "./Countries.module.css";
import { useSearchValue } from "../../context/SearchContext";
import { useRegionFilterContext } from "../../context/RegionContext";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  const { searchValue } = useSearchValue("");
  const { regionFilterValue } = useRegionFilterContext("");

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
        console.log(response);
      });
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <ul className={styles.countriesList}>
      {countries
        .filter((country) => {
          if (searchValue === "") return country;
          else if (
            country.name.toLowerCase().includes(searchValue.toLowerCase())
          )
            return country;
        })
        .filter((country) => {
          if (regionFilterValue === "") return country;
          else if (
            country.region
              .toLowerCase()
              .includes(regionFilterValue.toLowerCase())
          )
            return country;
        })
        .map((item, idx) => {
          return (
            <li className={styles.countryContainer} key={idx}>
              <Link to={`/${item.name}`} className={styles.country}>
                <img src={item.flag} alt={item.name} />
                <h1 className="countryName">{item.name}</h1>
                <div className={styles.informations}>
                  <h3>
                    <span> Population: </span>{" "}
                    {numberWithCommas(item.population)}
                  </h3>
                  <h3>
                    <span> Region: </span> {item.region}
                  </h3>
                  <h3>
                    <span> Capital: </span> {item.capital}
                  </h3>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
export default CountriesList;
