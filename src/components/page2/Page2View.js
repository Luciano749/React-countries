import Header from "../page1/Header";
import styles from "./Page2View.module.css";

import { useState, useEffect } from "react";

const Page2View = () => {
  const name = window.location.href.split("/").pop();

  const [contryInformations, setCountryInformations] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((response) => {
        setCountryInformations(response);
        console.log(response);
      });
  }, [name]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <>
      <Header />

      <button
        className={styles.backButton}
        onClick={() => window.history.back()}
      >
        <ion-icon name="arrow-back"></ion-icon>
        BACK
      </button>

      {contryInformations.map((item, idx) => {
        return (
          <div className={styles.container}>
            <img src={item.flag} alt={item.name} />
            <div className={styles.informations}>
              <div className={styles.countryMainInformations}>
                <h3>
                  <span>Native name:</span>
                  {item.nativeName}
                </h3>
                <h3>
                  <span>Population:</span>
                  {numberWithCommas(item.population)}
                </h3>
                <h3>
                  <span>Region:</span>
                  {item.region}
                </h3>
                <h3>
                  <span>Sub Region:</span>
                  {item.subregion}
                </h3>
                <h3>
                  <span>Capital:</span>
                  {item.capital}
                </h3>
                <h3>
                  <span>Top Level Domain:</span>
                  {item.topLevelDomain.map((e, idx) => (
                    <span key={idx}>{e.code}</span>
                  ))}
                </h3>
                <h3 className={styles.currencies}>
                  <span>Currencies:</span>
                  {item.currencies.map((e, idx) => (
                    <p key={idx}>-{e.code}</p>
                  ))}
                </h3>
                <h3 className={styles.languages}>
                  <span>Languages:</span>
                  {item.languages.map((e, idx) => (
                    <p key={idx}>-{e.name}</p>
                  ))}
                </h3>
              </div>

              <div className={styles.borderCountries}>
                <h2>Border Countries:</h2>

                <div className={styles.borderCountriesArea}>
                  {item.borders.map((e, idx) => {
                    return (
                      <>
                        <span className={styles.borderCountry} key={e}>
                          {e}
                        </span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Page2View;
