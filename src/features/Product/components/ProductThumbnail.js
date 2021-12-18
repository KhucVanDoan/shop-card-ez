import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from "../../../constants/index";

ProductThumbnail.propTypes = {};

function ProductThumbnail({ product }) {
  const thumbnailurl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  return (
    <Box>
      <img src={thumbnailurl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
