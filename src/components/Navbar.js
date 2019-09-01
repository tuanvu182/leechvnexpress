import React, { useState } from "react";
import { connect } from "react-redux";
import {
  fetchNews,
  fetchNewsEco,
  fetchNewsWorld,
  fetchNewsRel
} from "../actions";

const Navbar = props => {
  const [load, setLoad] = useState(false);

  const onClick = async func => {
    setLoad(true);
    await setTimeout(() => {
      func();
      setLoad(false);
    }, 500);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand text-danger" href="index.html">
        VNEXPRESS LEECHER SITE
      </a>
      {load ? (
        <i
          class="fa fa-spinner fa-spin"
          style={{ fontSize: "24px", color: "red" }}
        ></i>
      ) : null}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon text-dark" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-1">
            <button
              onClick={() => {
                onClick(props.fetchNews);
              }}
              type="button"
              className="btn btn-info w-100"
            >
              Thời Sự
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick(props.fetchNewsEco)}
              type="button"
              className="btn btn-info w-100"
            >
              Kinh tế
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick(props.fetchNewsWorld)}
              type="button"
              className="btn btn-info w-100"
            >
              Thế giới
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick(props.fetchNewsRel)}
              type="button"
              className="btn btn-info w-100"
            >
              Giải trí
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  fetchNews,
  fetchNewsEco,
  fetchNewsWorld,
  fetchNewsRel
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
