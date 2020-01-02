import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchNews, changeDisplay } from "../actions";

const Navbar = props => {
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState("none");

  const onClick = async type => {
    setLoad(true);
    await setTimeout(() => {
      props.fetchNews(type);
      setLoad(false);
    }, 500);
  };

  const showDropDown = () => {
    setShow(show === "block" ? "none" : "block");
  };

  const changeDisplay = async num => {
    props.changeDisplay(num);
    await setTimeout(() => {
      setShow("none");
    }, 200);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
      <a className="navbar-brand text-danger" href="/">
        VNEXPRESS LEECHER SITE
      </a>
      {load ? (
        <i
          className="fa fa-spinner fa-spin"
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
          <li className="nav-item m-1 position-relative">
            <button
              onClick={() => {
                showDropDown();
              }}
              type="button"
              className="btn btn-info w-100 dropdown-toggle"
            >
              Số bài viết
            </button>
            <div style={{ display: `${show}` }} className="dropdown-menu">
              <button
                onClick={() => {
                  changeDisplay(8);
                }}
                className="dropdown-item"
              >
                Hiển thị 8
              </button>
              <button
                onClick={() => {
                  changeDisplay(16);
                }}
                className="dropdown-item"
              >
                Hiển thị 16
              </button>
              <button
                onClick={() => {
                  changeDisplay(25);
                }}
                className="dropdown-item"
              >
                Hiển thị 25
              </button>
            </div>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => {
                onClick("normal");
              }}
              type="button"
              className="btn btn-info w-100"
            >
              Thời Sự
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick("business")}
              type="button"
              className="btn btn-info w-100"
            >
              Kinh tế
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick("world")}
              type="button"
              className="btn btn-info w-100"
            >
              Thế giới
            </button>
          </li>
          <li className="nav-item m-1">
            <button
              onClick={() => onClick("entertain")}
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
  changeDisplay
};

export default connect(null, mapDispatchToProps)(Navbar);
