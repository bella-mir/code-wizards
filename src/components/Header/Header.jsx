import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__menu">
        <div class="dropdown">
          <button class="dropbtn">Направления</button>
          <div class="dropdown-content">
            <Link className="dropdown-item" to="/coding">
              Программирование
            </Link>
            <a class="dropdown-item isDisabled" href="#" disabled>
              Маркетинг
            </a>
            <a class="dropdown-item isDisabled" href="#">
              Аналитика
            </a>
            <a class="dropdown-item isDisabled" href="#">
              Дизайн
            </a>
            <a class="dropdown-item isDisabled" href="#">
              Финансы и инвестиции
            </a>
            <a class="dropdown-item isDisabled" href="#">
              Творчество
            </a>
          </div>
        </div>
        <Link className="header__link" to="/contacts">
          Контакты
        </Link>
        <Link className="header__link" to="/sign-up">
          <button className="header__button">Присоединиться</button>
        </Link>
      </div>
    </div>
  );
};
