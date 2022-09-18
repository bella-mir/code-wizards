import React from "react";
import "./courses.css";
import icon from "../../../images/courses.svg";
import { CourseCard } from "../CourseCard/CourseCard";

export const Courses = () => {
  return (
    <div className="courses">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={icon} />
          <h1 className="courses__title">Курсы</h1>
        </div>
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control"
              placeholder="Название курса"
            />
            {/* <button class="btn btn-primary">Поиск</button> */}
          </div>
        </div>
      </div>

      <div class="dropdown" style={{ color: "white !important" }}>
        <button class="dropbtn" style={{ color: "white" }}>
          Направления
        </button>
        <div class="dropdown-content">
          <a class="dropdown-item" href="#" disabled>
            Программирование
          </a>
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
      
      <div class="dropdown" style={{ color: "white !important" }}>
        <button class="dropbtn" style={{ color: "white" }}>
          Стоимость
        </button>
        <div class="dropdown-content">
          <a class="dropdown-item" href="#" disabled>
            до 5 тысяч рублей
          </a>
          <a class="dropdown-item isDisabled" href="#" disabled>
            5 - 15 тысяч рублей
          </a>
          <a class="dropdown-item isDisabled" href="#">
            15 - 50 тысяч рублей
          </a>
          <a class="dropdown-item isDisabled" href="#">
            50 - 100 тысяч рублей
          </a>
          <a class="dropdown-item isDisabled" href="#">
            более 100 тысяч
          </a>
        
        </div>
      </div>
      <div class="dropdown" style={{ color: "white !important" }}>
        <button class="dropbtn" style={{ color: "white" }}>
          Наличие сертификата
        </button>
        <div class="dropdown-content">
          <a class="dropdown-item" href="#" disabled>
            Нет
          </a>
          <a class="dropdown-item isDisabled" href="#" disabled>
            Сертификат школы
          </a>
          <a class="dropdown-item isDisabled" href="#">
            Диплом государственного образца
          </a>
        </div>
      </div>
      <div class="dropdown" style={{ color: "white !important" }}>
        <button class="dropbtn" style={{ color: "white" }}>
          Уровень подготовки
        </button>
        <div class="dropdown-content">
          <a class="dropdown-item" href="#" disabled>
            Начальный
          </a>
          <a class="dropdown-item isDisabled" href="#" disabled>
            Средний
          </a>
          <a class="dropdown-item isDisabled" href="#">
            Продвинутый
          </a>
        </div>
      </div>
      <CourseCard />
    </div>
  );
};
