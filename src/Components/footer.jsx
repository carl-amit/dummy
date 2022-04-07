import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer-section ">
      <div class="container">
        <div class="row align-items-center ">
          <div class="col-lg-3">
            <nav>
              <Link to="/">
                <img
                  className="logo-image"
                  src="https://beta.tcc.workhorsewebit.com/wp-content/uploads/2022/03/TripleCrown_Logo_Blue_TXT.svg"
                  alt="logo"
                  height="70"
                  width="150"
                />
              </Link>
            </nav>
          </div>
          <div class="col-lg-6">
            <nav>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <nav>
              <ul>
                <li>
                  <Link to="/about">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/about">FAQ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <p className="copyright-text text-center">©2022 by XYX</p>
      </div>
    </div>
  );
}

export default Footer;
