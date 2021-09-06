import { createContext, useState, useContext } from "react";

const RegionFilterContext = createContext();

export default function RegionFilterProvider({ children }) {
  const [regionFilterValue, setRegionFilterValue] = useState("");

  return (
    <RegionFilterContext.Provider
      value={{ regionFilterValue, setRegionFilterValue }}
    >
      {children}
    </RegionFilterContext.Provider>
  );
}

export function useRegionFilterContext() {
  const context = useContext(RegionFilterContext);
  const { regionFilterValue, setRegionFilterValue } = context;
  return { regionFilterValue, setRegionFilterValue };
}
