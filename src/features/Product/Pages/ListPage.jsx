import { Box, Container, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import productApi from "../../../apis/productApi";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSekeleton from "../components/ProductSekeleton";
import ProductSort from "../components/ProductSort";
ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setloading] = useState(true);

  const [panigation, setPanigation] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  const [fillter, setFillter] = useState({
    _page: 1,
    _limit: 12,
    _sort: "salePrice:ASC",
  });
  // useEffect(() => {
  //   history.push({
  //     path: history.location.path,
  //     search: queryString.stringify(fillter),
  //   });
  // }, [history, fillter]);
  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll(fillter);
        console.log(response.data);
        setProductList(response.data.data);
        setPanigation(response.pagination);
        console.log(response.pagination);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    })();
  }, [fillter]);
  const handleChange = (e, page) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      _page: page,
    }));
  };
  const handleSortChange = (newSortValue) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      _sort: newSortValue,
    }));
  };
  const handleFilterChange = (newFilters) => {
    setFillter((prevFillter) => ({
      ...prevFillter,
      ...newFilters,
    }));
  };
  const setNewFilter = (newFilters) => {
    setFillter(newFilters);
  };
  return (
    <Box pt={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                fillters={fillter}
                onChange={handleFilterChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={fillter._sort}
                onchange={handleSortChange}
              />
              <FilterViewer fillters={fillter} onChange={setNewFilter} />
              {loading ? (
                <ProductSekeleton />
              ) : (
                <ProductList data={productList} />
              )}

              <Pagination
                count={Math.ceil(panigation.total.data / panigation.limit)}
                color="primary"
                page={panigation.page}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                onChange={handleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
