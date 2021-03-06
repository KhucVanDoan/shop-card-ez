import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@material-ui/core";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onchange: PropTypes.func,
};

function ProductSort({ currentSort, onchange }) {
  const handleSortChange = (e, newValue) => {
    if (onchange) onchange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      textColor="primary"
      indicatorColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp đến cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao đến thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
