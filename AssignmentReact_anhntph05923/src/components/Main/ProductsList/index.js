// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import apiRequest from "./api/productApi";
// const index = (props) => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const { data } = await apiRequest.getAll();
//         setProducts(data);
//       } catch (error) {
//         console.log("failed to request API: ", error);
//       }
//     };
//     getProducts();
//   }, []);
//   return (
//     <div>
//       {this.state.products.map(({ id, name, image, price }, index) => (
//         <li key="index">
//           <div>{index.name}</div>
//         </li>
//       ))}
//       ;
//     </div>
//   );
// };

// index.propTypes = {};

// export default index;
