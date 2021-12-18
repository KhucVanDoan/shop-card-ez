import { Box, Chip, makeStyles } from "@material-ui/core";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
FilterViewer.propTypes = {
  fillters: PropTypes.object,
  onchange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    padding: 0,
    margin: theme.spacing(2, 0),
    listStyleType: "none",
    "&>li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Giao hàng miễn phí",
    isActive: (fillters) => fillters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (fillters) => {
      const newfillters = { ...fillters };
      if (newfillters.isFreeShip) {
        delete newfillters.isFreeShip;
      } else {
        newfillters.isFreeShip = true;
      }
      return newfillters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mại",
    isActive: (fillters) => true,
    isVisible: (fillters) => Object.keys(fillters).includes("isPromotion"),
    isRemovable: true,
    onRemove: (fillters) => {
      const newfillters = { ...fillters };
      delete newfillters.isPromotion;
      return newfillters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (fillters) =>
      `Tu ${fillters.salePrice_gte} dden ${fillters.salePrice_lte}`,
    isActive: (fillters) => true,
    isVisible: (fillters) => {
      Object.keys(fillters).includes("salePrice_lte") &&
        Object.keys(fillters).includes("salePrice_gte");
    },
    isRemovable: true,
    onRemove: (fillters) => {
      const newfillters = { ...fillters };
      delete newfillters.salePrice_lte;
      delete newfillters.salePrice_gte;
      return newfillters;
    },
    onToggle: () => {},
  },
  // {
  //   id: 4,
  //   getLabel: (fillters) => "Danh mục",
  //   isActive: (fillters) => true,
  //   isVisible: (fillters) => {},
  //   isRemovable: true,
  //   onRemove: (fillters) => {},
  //   onToggle: (fillters) => {},
  // },
];

function FilterViewer({ fillters = {}, onChange }) {
  const classes = useStyle();
  const visibleFilter = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(fillters));
  }, [fillters]);
  return (
    <Box component="ul" className={classes.root}>
      {visibleFilter.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel()}
            color={x.isActive(fillters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newfillter = x.onToggle(fillters);
                    onChange(newfillter);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newfillter = x.onRemove(fillters);
                    onChange(newfillter);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
