import React from "react";
import "./coursecard.css";
import {Stars} from './Stars/Stars'

export const CourseCard = () => {
  return (
<div className='courseCard'>
<div class="card text-white bg-primary mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Coursera</h5>
    <p class="card-text">Python-разарбочтик</p>

    <Stars/>

  </div>
</div>
<div class="card text-white bg-secondary mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Stepik</h5>
    <p class="card-text">UI/UX design</p>
    <Stars/>
    
  </div>
</div>
<div class="card text-white bg-success mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Яндекс-Практикум</h5>
    <p class="card-text">Веб-разрабочтик</p>
    <Stars/>
  </div>
</div>
<div class="card text-white bg-danger mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Нетология</h5>
    <p class="card-text">Data scientist: от 0 до Pro</p>
    <Stars/>
  </div>
</div>
<div class="card text-white bg-warning mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Skillbox</h5>
    <p class="card-text">Дизайн интерьеров</p>
    <Stars/>
  </div>
</div>
<div class="card text-white bg-info mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">Udemy</h5>
    <p class="card-text">React+Redux</p>
    <Stars/>
  </div>
</div>

<div class="card text-white bg-dark mb-3" style={{maxWidth:'18rem'}}>
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">HTML-Academy</h5>
    <p class="card-text">PHP-профессиональная веб-разаботка</p>
    <Stars/>
  </div>
</div></div>

  );
};
