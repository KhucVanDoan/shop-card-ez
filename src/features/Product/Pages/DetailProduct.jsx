import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import ProductThumbnail from "../components/ProductThumbnail";

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
}));
DetailProduct.propTypes = {};

function DetailProduct(props) {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={{}} />
            </Grid>
            <Grid item className={classes.right}>
              hihih
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailProduct;
