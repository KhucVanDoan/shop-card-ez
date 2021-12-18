import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "../../Todo/pages/ListPage";
import DetailProduct from "./DetailProduct";
function ProductFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="/products" exact element={<ListPage />} />
        <Route path="/products/:productId" exact element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
