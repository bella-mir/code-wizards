import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


export const Header = (props) => {




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

        {!props.email  ? (
          <Link className="header__link" to="/sign-up">
            <button className="header__button">Присоединиться</button>
          </Link>
        ) : (
          <>
            <p className="header__link" style={{margin:'0', color:'#3456f3'}}>{props.email}</p>
            <Link className="header__link"   to="/rate-your-course">
            <button className="header__button" style={{backgroundColor:'green'}}>
              Оставить отзыв
            </button>
            </Link>
            <button className="header__button" style={{backgroundColor:'gray'}} onClick={props.handleLogout}>
              Выйти
            </button>
          </>
        )}
      </div>
    </div>
  );
};
