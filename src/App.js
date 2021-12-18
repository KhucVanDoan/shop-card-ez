import { Route, Routes } from "react-router";
import "./App.css";
import NotFount from "./components/NotFount";
import DetailProduct from "./features/Product/Pages/DetailProduct";
import ListPage from "./features/Product/Pages/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<ListPage />} />
        <Route path="/products/:productId" element={<DetailProduct />} />
        <Route element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
