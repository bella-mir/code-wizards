import React from "react";
import "./success.css";
import nataly from "../../images/Rectangle.png";

export const SuccessStory = () => {
  return (
    <div className="success">
      <div>
        <h2 className="success_title">История успеха от Натальи</h2>
        <p className="success_description" style={{textAlign:'left'}}>
          Долго сомневалась в выборе школы, но через EdRate я нашла интересный
          для себя курс и смогла обучаться во время отпуска по уходу за
          ребенком. Теперь мне не страшно вновь выходить на рынок труда! Спасибо
          EdRate за толчок к знаниям!{" "}
        </p>
      </div>
      <img src={nataly} alt="nataly" style={{height:'300px'}} />
    </div>
  );
};
