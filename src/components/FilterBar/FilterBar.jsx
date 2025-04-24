import "./FilterBar.css";

import SearchIcon from "../../assets/icons/search.svg?react";
import FilterIcon from "../../assets/icons/Filter.svg?react";

export const FilterBar = () => {
  return (
    <div className="card filter-bar">
      <SearchIcon />
      <input placeholder="Search here..." />

      <FilterIcon />
      <div>Filters</div>
    </div>
  );
};
