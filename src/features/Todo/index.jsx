import React from "react";
import { Route, Routes, useRoutes } from "react-router";
import NotFount from "../../components/NotFount";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        {/* <Route path={match.path} element={<ListPage />} exact />
        <Route path={`${match.path}/:todoId`} element={<DetailPage />} exact />
        <Route element={<NotFount />} /> */}
      </Routes>
    </div>
  );
}

export default TodoFeature;
