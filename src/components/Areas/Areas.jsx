import React from "react";
import './areas.css'
import { Link } from "react-router-dom";

export const Areas = () => {
  return (
    <div className="areas" id='areas'>
      <h2 className="areas__title">Направления обучения</h2>
       <div className="areas__grid">
       <Link  to="/coding" style={{ textDecoration: 'none' }}>
        <div className="area">
        
            <h3 className="areas__subtitle">Программирование</h3>
            <ul className="areas__list">
                <li>Python</li>
                <li>C++</li>
                <li>Java Script</li>
                <li>C#</li>
            </ul>
        </div>
        </Link>
        <div className="area">
            <h3 className="areas__subtitle">Маркетинг</h3>
            <ul className="areas__list">
                <li>Digital Marketing</li>
                <li>SMM-менеджер</li>
                <li>Копирайтер</li>
                <li>SEO-специалист</li>
            </ul>
        </div>
        <div className="area">
            <h3 className="areas__subtitle">Аналитика</h3>
            <ul className="areas__list">
                <li>Data Scientist</li>
                <li>Системный аналитик</li>
                <li>Аналитик данных</li>
                <li>1C-аналитик</li>
            </ul>
        </div>
        <div className="area">
            <h3 className="areas__subtitle">Дизайн</h3>
            <ul className="areas__list">
                <li>UX/UI дизайнер</li>
                <li>Графический дизайнер</li>
                <li>Геймдизайнер</li>
                <li>Моушен дизайн, 3D</li>
            </ul>
        </div>
        <div className="area">
            <h3 className="areas__subtitle">Финансы и инвестиции</h3>
            <ul className="areas__list">
                <li>Бухгалтер</li>
                <li>Трейдер</li>
                <li>Финансовый аналитик</li>
                <li>Личные финансы</li>
            </ul>
        </div>
        <div className="area">
            <h3 className="areas__subtitle">Творчество</h3>
            <ul className="areas__list">
                <li>Стилист</li>
                <li>Имиджмейкер</li>
                <li>Арт-менеджер</li>
                <li>Fashion бизнес</li>
            </ul>
        </div>

       </div>
    </div>
  );
};