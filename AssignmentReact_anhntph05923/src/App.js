import React, { useState, useEffect } from "react";
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
// import dataFake from "./dataFake";
import Routers from "./routers";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddForm from "./pages/views/Admin/AddProducts";
import apiRequest from "./api/productApi";
import categoryRequest from "./api/categoryApi";

function App() {
  // const [products, setProduct] = useState(dataFake);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // Danh Sách Sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getProducts();
  }, []);
  const onHandleRemove = async (id) => {
    try {
      const newProducts = products.filter((product) => product.id !== id);
      // const { data } = await
      apiRequest.remove(id);

      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm SẢn phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Cập nhật product
  const onHandleUpdate = (updateProduct) => {
    try {
      apiRequest.update(updateProduct.id, updateProduct);
      const newProducts = products.map(
        (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
      );
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // danh sách danh mục
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await categoryRequest.getAll();
        setCategories(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getCategories();
  }, []);
  // thêm danh mịc
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await categoryRequest.create(category);
      setCategories([...categories, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // xoá danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const newCategory = categories.filter((category) => category.id !== id);
      // const { data } = await
      categoryRequest.remove(id);

      setCategories(newCategory);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  return (
    <div className="App">
      <Routers
        products={products}
        onAdd={onHandleAdd}
        onRemove={onHandleRemove}
        onUpdate={onHandleUpdate}
        categories={categories}
        onAddCate={onHandleAddCate}
        onRemoveCate={onHandleRemoveCate}
      />
    </div>
  );
}
export default App;
