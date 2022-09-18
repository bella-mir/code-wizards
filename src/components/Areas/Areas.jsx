import React from "react";
import "./areas.css";
import { Link } from "react-router-dom";

export const Areas = () => {
  return (
    <div className="areas" id="areas">
      <h2 className="areas__title">Направления обучения</h2>
      <div className="areas__grid">
        <Link to="/coding" style={{ textDecoration: "none" }}>
          <div className="area">
            <h3 className="areas__subtitle">Программирование</h3>
          </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }} className="isDisabled">
        <div className="area">
          <h3 className="areas__subtitle">Маркетинг</h3>
        </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }} className="isDisabled">
        <div className="area">
          <h3 className="areas__subtitle">Аналитика</h3>
        </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }} className="isDisabled">
        <div className="area">
          <h3 className="areas__subtitle">Дизайн</h3>
        </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }} className="isDisabled">
        <div className="area">
          <h3 className="areas__subtitle">Финансы и инвестиции</h3>
        </div>
        </Link>
        <Link to="#" style={{ textDecoration: "none" }} className="isDisabled">
        <div className="area">
          <h3 className="areas__subtitle">Творчество</h3>
        </div>
        </Link>
      </div>
    </div>
  );
};
