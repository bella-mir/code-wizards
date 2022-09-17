import React from "react";
import './trust.css'
import icon1 from '../../images/icon_1.svg'
import icon2 from '../../images/icon_2.svg'
import icon3 from '../../images/icon_3.svg'
import icon4 from '../../images/icon_4.svg'

export const Trust = () => {
  return (
    <div className="trust">
        <h2 className="trust__title">Почему нам доверяют студенты?</h2>
        <div className="trust__grid">
            
            <div className="trust__element">
                <img src={icon1} className="trust__image"/>
                <h3 className="trust__subtitle">Большая база курсов</h3>
                <p className="trust__text">50 направлений, сотни школ, тысячи курсов</p>
            </div>
            <div className="trust__element">
                <img src={icon2} className="trust__image"/>
                <h3 className="trust__subtitle">Честные отзывы</h3>
                <p className="trust__text">Только реальные студенты, нет проплаченных рекомендаций</p>
            </div>
            
           
            <div className="trust__element">
                <img src={icon3} className="trust__image"/>
                <h3 className="trust__subtitle">Удобная фильтрация</h3>
                <p className="trust__text">Сортировка по цене, продолжительности, рейтингу и другим критериям</p>
            </div>
            <div className="trust__element">
                <img src={icon4} className="trust__image"/>
                <h3 className="trust__subtitle">Разные форматы</h3>
                <p className="trust__text">Видео, аудио-отзывы, лонгриды</p>
            </div>
          
        </div>

    </div>
  );
};