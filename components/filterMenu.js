import React, { PropTypes } from 'react';
import FilterItems from './filterItems';

const FilterMenu = ({ selectTab, filters }) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems filters={ filters } selectTab={ selectTab } />
      </div>
	  </div>
  );
};

FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
};

export default FilterMenu;

