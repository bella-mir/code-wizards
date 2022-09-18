import React from "react";
import "./success.css";

export const SuccessStory = () => {
  return (
    <div className="success">
         <h2 className="success_title">Истории пользователей</h2>
      {/* <div>
       
        <p className="success_description" style={{textAlign:'left'}}>
          Долго сомневалась в выборе школы, но через EdRate я нашла интересный
          для себя курс и смогла обучаться во время отпуска по уходу за
          ребенком. Теперь мне не страшно вновь выходить на рынок труда! Спасибо
          EdRate за толчок к знаниям!{" "}
        </p>
      </div>
      <img src={nataly} alt="nataly" style={{height:'300px'}} /> */}
             <div class="row" style={{justifyContent: 'center'}}>
        <div class="card col-md-3 mt-100">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile"> <img src="https://i.imgur.com/J6l19aF.jpg"/> </div>
                    <div class="card-title"> Наталья<br /> <small>Дизайнер</small> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> Долго сомневалась в выборе школы, но через EdRate я нашла интересный
          для себя курс и смогла обучаться во время отпуска по уходу за
          ребенком. Теперь мне не страшно вновь выходить на рынок труда! Спасибо
          EdRate за толчок к знаниям! </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 mt-100">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile"> <img src="https://i.imgur.com/8RKXAIV.jpg"/> </div>
                    <div class="card-title"> Михаил<br /> <small>Руководитель проектов</small> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> Раньше управлял небольшой командой в сфере проектирования и строительства, но не хватало драйва, хотелось оказаться в более технологически развитой отрасли. Зашел на EdTech, узнал о курсе "Управление проектами в IT"! Теперб руковожу командой разработчиков и очень доволен </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 mt-100">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile"> <img src="https://i.imgur.com/Ur43esv.jpg"/> </div>
                    <div class="card-title"> Петр<br /> <small>Начинающий веб-разработчик</small> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> В школе мне больше всего нравилась математика! Но последние годы я работал в доставке, так как времени на образование не было, нужно было кормить семью. Случайно наткнулся на EdTech, и тут увидел, что можно учиться онлайн в любое время  и есть курсы по доступной цене.  </small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
