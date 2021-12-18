import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";

FilterByPrice.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&>span": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    //e.persist()
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtittle2">Giá</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
