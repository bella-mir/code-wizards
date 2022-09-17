import React from "react";
import './promo.css'
import netology from '../../images/image_1.png'
import practicum from '../../images/image_2.png'
import skillbox from '../../images/image_3.png'
import geek from '../../images/image_4.png'
import { Link } from "react-router-dom";


export const Promo = () => {
  return (
    <div className="promo">
      <h1 className="promo__title">Честные отзывы от реальных студентов</h1>
      <p className="promo__subtitle">Не знаете, куда пойти учиться? Выбирайте курсы по отзывам студентов, цене, сложности и многим другим критериям!</p>
      <div className="promo__images">
        {/* <Link to="#areas" smooth style={{alignItems: "left"}}> */}
      <button className="promo__button" style={{marginBottom: "50px"}} >Смотреть курсы</button>
      {/* </Link> */}
      <div className="grid">
      <img src={netology} alt='netology' className="promo__image"  />
      <img src={practicum} alt='practicum' className="promo__image"  />
      <img src={geek} alt='geekbrains' className="promo__image" />
      <img src={skillbox} alt='skillbox' className="promo__image" style={{ width:"100px"}} />
      
      </div>
      
      </div>
      
    </div>
  );
};
