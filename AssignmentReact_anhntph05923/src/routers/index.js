import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../pages/layouts/LayoutMain";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";

//Admin
import Dashboard from "../pages/views/Admin/Dashboard";
import ProductsManager from "../pages/views/Admin/Products";
import AddForm from "../pages/views/Admin/AddProducts";
import EditProduct from "../pages/views/Admin/EditProducts";
import CategoryManager from "../pages/views/Admin/Categories";
import Addcate from "../pages/views/Admin/AddCate";
//Views
import About from "../pages/views/Main/About";
import Home from "../pages/views/Main/Home";

const Routers = ({
  categories,
  products,
  onRemove,
  onAdd,
  onUpdate,
  onAddCate,
  onRemoveCate,
}) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };

  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard />
              </Route>
              <Route path="/admin/add">
                <AddForm onAdd={onAdd} categories={categories} />
              </Route>

              <Route path="/admin/products" exact>
                <ProductsManager
                  products={products}
                  onRemove={onHandleRemove}
                />
              </Route>
              <Route path="/admin/products/:id">
                <EditProduct
                  products={products}
                  onUpdate={onUpdate}
                  categories={categories}
                />
              </Route>
            </Switch>
            <Route path="/admin/addcate">
              <Addcate onAddCate={onAddCate} />
            </Route>

            <Route path="/admin/category">
              <CategoryManager
                categories={categories}
                onRemoveCate={onHandleRemoveCate}
              />
            </Route>
          </LayoutAdmin>
        </Route>
        <Route>
          <LayoutMain>
            <Switch>
              <Route path="/" exact>
                <Home products={products} />
              </Route>

              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </LayoutMain>
        </Route>
      </Switch>
    </Router>
  );
};

Routers.propTypes = {};

export default Routers;
