import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <div>
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/admin/products"
          >
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link className="nav-link" to="/admin/products">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
          </li>
          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Interface</div>

          {/* Nav Item - Tables */}
          <li className="nav-item active">
            <Link className="nav-link" to="/admin/products">
              <i className="fas fa-fw fa-table" />
              <span>Product</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/admin/category">
              <i className="fas fa-fw fa-table" />
              <span>Category</span>
            </Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
