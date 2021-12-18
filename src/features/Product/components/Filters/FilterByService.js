import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

FilterByService.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      margin: 0,
    },
  },
}));

function FilterByService({ fillters = {}, onChange }) {
  const classes = useStyle();

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;

    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtittle2">Dịch vụ</Typography>
      <ul className={classes.list}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Vận chuyễn miễn phí" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(fillters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
