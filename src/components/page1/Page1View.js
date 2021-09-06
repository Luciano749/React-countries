import Header from "./Header";
import SearchBar from "./SearchBar";
import CountriesList from "./CountriesList";
import SearchProvider from "../../context/SearchContext";
import RegionFilterProvider from "../../context/RegionContext";

const Page1View = () => {
  return (
    <>
      <Header />
      <SearchProvider>
        <RegionFilterProvider>
          <SearchBar />
          <CountriesList />
        </RegionFilterProvider>
      </SearchProvider>
    </>
  );
};

export default Page1View;
