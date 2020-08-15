import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "./../../../../firebase";

export const AddForm = ({ onAdd, categories }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  // const onSubmit = (data) => console.log(data);
  // const [valueInput, setValueInput] = useState({});
  const [desc, setDesc] = useState("");

  const onHandleSubmit = (data) => {
    console.log(data.image[0]);
    let file = data.image[0];
    // tạo reference chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          desc,
          image: url,
        };
        onAdd(newData);
        history.push("/admin/products");
      });
    });
  };
  const handleEditorChange = (content, editor) => {
    setDesc(content);
  };
  return (
    <div>
      <div
        className="card shadow 
      mb-4"
      >
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
              <label htmlFor="inputProductName">Product Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="InputProductName"
                ref={register({ required: true, minLength: 5 })}
              />
              {errors.name && errors.name.type === "required" && (
                <span>Không được để trống </span>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <span>Nhập ít nhất 5 kí tưj </span>
              )}
            </div>
            <div className="form-group">
              <p>Danh mục sản phẩm</p>

              <select
                name="cate"
                ref={register}
                className="custom-select"
                id="inputGroupSelect01"
              >
                {categories.map(({ id, name }, index) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputProductImage">Product Image</label>
              <div className="input-group">
                <input
                  type="file"
                  name="image"
                  className="custom-file-input"
                  id="inputGroupFile02"
                  ref={register}
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile02"
                  aria-describedby="imageHelp"
                >
                  Choose image
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputProductPrice">Product Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                id="inputProductPrice"
                ref={register({
                  required: true,
                  validate: {
                    positiveNumber: (value) => parseFloat(value) > 0,
                  },
                })}
              />
              {errors.price && errors.price.type === "required" && (
                <span>Không được để trống </span>
              )}
              {errors.price && errors.price.type === "positiveNumber" && (
                <p>vui lòng nhập lại</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="inputProductSalePrice">Product Sale Price</label>
              <input
                type="text"
                name="sale"
                className="form-control"
                id="inputProducSaletPrice"
                ref={register({
                  required: true,
                  validate: {
                    positiveNumber: (value) => parseFloat(value) > 0,
                  },
                })}
              />
              {errors.sale && errors.sale.type === "required" && (
                <span>Không được để trống </span>
              )}
              {errors.sale && errors.sale.type === "positiveNumber" && (
                <p>vui lòng nhập lại</p>
              )}
            </div>
            <div className="form-group">
              <p>mô tả chi tiết sản phẩm</p>
              <Editor
                init={{
                  height: 500,
                  images_upload_url: "postAcceptor.php",
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help",
                }}
                onEditorChange={handleEditorChange}
              />
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
AddForm.propTypes = {
  onAdd: PropTypes.func,
};

export default AddForm;
