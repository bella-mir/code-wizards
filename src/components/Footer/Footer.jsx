import React from "react";
import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">Code Wizards х CodenRock</div>
      <div className="footer__menu">
        <div className="footer__year">© 2022</div>
        <div className="footer__links"> 
        <a className="footer__link" href="https://codenrock.com/">CodenRock</a>
        </div>
      </div>
    </div>
  );
};