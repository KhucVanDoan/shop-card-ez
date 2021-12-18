import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../../apis/categoryApi";

FilterByCategory.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      transition: "all .25s",
      "&:hover": {
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    (async () => {
      const response = await categoryApi.getAll();
      setCategoryList(response.data.map((x) => ({ id: x.id, name: x.name })));
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
