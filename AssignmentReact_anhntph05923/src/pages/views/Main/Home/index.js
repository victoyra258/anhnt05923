import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LayoutMain from "../../../layouts/LayoutMain";
import apiRequest from "./../../../../api/productApi";

const Home = ({ products }) => {
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
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        {/* Navbar brand */}
        <span className="navbar-brand">Categories:</span>
        {/* Collapse button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="basicExampleNav">
          {/* Links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                All
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shirts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sport wears
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Outwears
              </a>
            </li>
          </ul>
          {/* Links */}
          <form className="form-inline">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
        {/* Collapsible content */}
      </nav>

      <div className="row wow fadeIn">
        {products.map(({ id, name, image, price, sale, cate }, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img className="card-img-top" src={image} alt="" />
              </a>

              <div className="card-body">
                <h4 className="card-body text-center">
                  {categories.map((categories) =>
                    categories.id === cate ? categories.name : ""
                  )}
                  <h4 className="card-body text-center red-text"></h4>
                  <a href="#" className="dark-grey-text">
                    {name}
                  </a>
                </h4>

                <h5 className="font-weight-bold blue-text">
                  <strike>
                    <p style={{ color: "red" }}>
                      Price:&nbsp;
                      <strong>{price}</strong>
                    </p>
                  </strike>
                </h5>
                <h5 className="font-weight-bold blue-text">
                  <p>
                    Giảm Giá:&nbsp;
                    <strong>{sale}</strong>
                  </p>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
