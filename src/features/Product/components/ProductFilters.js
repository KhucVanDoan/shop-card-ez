import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

import { Box } from "@material-ui/core";

ProductFilters.propTypes = {
  fillters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ fillters, onChange }) {
  const handleCategoreChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };
  const handleFilterChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoreChange} />
      <FilterByPrice onChange={handleFilterChange} />
      <FilterByService filters={fillters} onChange={handleFilterChange} />
    </Box>
  );
}

export default ProductFilters;
