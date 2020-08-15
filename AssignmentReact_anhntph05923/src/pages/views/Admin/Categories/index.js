import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
const CategoryManager = ({ categories, onRemoveCate }) => {
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Thêm Danh Mục</h1>
      <Link className=" btn btn-primary" to="/admin/addcate">
        Thêm Danh Mục
      </Link>

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

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ id, name }, index) => (
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{name}</td>

                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          if (window.confirm("Bạn chắc muốn xoá ?"))
                            onHandleRemoveCate(id);
                        }}
                      >
                        Xóa
                      </button>
                      {/* <Link
                                                className="btn btn-primary"
                                                to={`/admin/products/${id}`}
                                            >
                                                Sửa
                      </Link> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryManager.propTypes = {
  categories: PropTypes.array,
  onRemove: PropTypes.func,
};

export default CategoryManager;
