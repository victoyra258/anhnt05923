import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "./../../../../firebase";

const Addcate = ({ onAddCate }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const onHandleSubmit = (data) => {
    const newDataCate = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    onAddCate(newDataCate);
    console.log(newDataCate);
    history.push("/admin/category");
  };

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thêm Danh Mục</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
              <label htmlFor="inputCateName">Tên Danh Mục</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="InputCateName"
                ref={register({ required: true, minLength: 5 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span>Không được để trống </span>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <span>Nhập ít nhất 5 kí tưj </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Addcate.propTypes = { onAddCate: PropTypes.func };

export default Addcate;
