import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      {/*Footer*/}
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        {/*Call to action*/}

        {/*/.Call to action*/}
        <hr className="my-4" />
        {/* Social icons */}
        <div className="pb-4">
          <a href="/" target="_blank">
            <i className="fab fa-facebook-f mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-twitter mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-youtube mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-google-plus-g mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-dribbble mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-pinterest mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-github mr-3" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-codepen mr-3" />
          </a>
        </div>
        {/* Social icons */}
        {/*Copyright*/}
        <div className="footer-copyright py-3">
          © 2019 Copyright:
          <a
            href="https://mdbootstrap.com/education/bootstrap/"
            target="_blank"
          >
            {" "}
            MDBootstrap.com{" "}
          </a>
        </div>
        {/*/.Copyright*/}
      </footer>
      {/*/.Footer*/}
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
