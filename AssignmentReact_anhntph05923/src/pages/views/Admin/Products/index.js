import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import apiRequest from "./../../../../api/productApi";

export const ProductsManager = ({ products, onRemove }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await apiRequest.getCateAll();
        setCategories(response.data);
      } catch (error) {}
    };
    getCategories();
  }, []);
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  return (
    <div>
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Thêm Sản Phẩm</h1>
      <Link className=" btn btn-primary" to="/admin/add">
        Thêm Sản Phẩm
      </Link>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sale Price</th>
                  <th scope="col">Mô Tả</th>
                  <th scope="col">Danh Mục</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  ({ id, name, image, price, sale, desc, cate }, index) => (
                    <tr key={index}>
                      <th scope="row">{id}</th>
                      <td>{name}</td>
                      <td>
                        <img src={image} alt="" width="50" />
                      </td>
                      <td>{price}</td>
                      <td>{sale}</td>
                      <td>{desc}</td>
                      <td>
                        {categories.map((categories) =>
                          categories.id === cate ? categories.name : ""
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you wish to delete this item?"
                              )
                            )
                              onHandleRemove(id);
                          }}
                        >
                          Xóa
                        </button>
                        <Link
                          className="btn btn-primary"
                          to={`/admin/products/${id}`}
                        >
                          Sửa
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsManager.propTypes = {
  products: PropTypes.array,
  onRemove: PropTypes.func,
};

export default ProductsManager;
