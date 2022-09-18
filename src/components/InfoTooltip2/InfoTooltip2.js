import React from "react";
import ok from "../../images/ok.svg";

import './infotooltip.css'


function InfoTooltip2({ onClose, isOpen }) {
  return (
    <section className={"popup" + (isOpen ? " popup_opened" : "")} >
      <div className="popup__container">
        <img
          src={ ok }
          alt={"Correct sign"}
          className={"popup__isCorrectImage"}
        ></img>

        <h2 className="popup__title" style={{maegin:'10px'}}>
          Cпасибо за обратную связь! Мы свяжемся с Вами в ближайшее время!
        </h2>

        <button
          id="popupAdClose"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default InfoTooltip2;
