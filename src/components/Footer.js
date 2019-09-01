import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <h3 className="text-center">Vnexpress Leech Website</h3>
      <p className="lead text-center">
        Copyright &copy;{new Date().getFullYear()}, by Tuan. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
