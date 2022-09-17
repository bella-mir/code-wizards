import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div class="container contact-form">
      <div className="header">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <div>
        <h3>Свяжитесь с нами</h3>
        <p>
          Вы смотрите бета-версию сайта. Оставьте свой отзыв, расскажите,
          понравился ли вам наш сервис
        </p>
        </div>
      </div>

      <form method="post" style={{width: '400px', display: 'flex', flexDirecton:'column', gap: '15px', margin: 'auto 0'}}>
        <div class="row">

            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Имя *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Номер телефона *"
                value=""
              />
            </div>



            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Текст сообщения *"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btnContact btn btn-primary"
                value="Отправить"
              />
            </div>

        </div>
      </form>
    </div>
  );
};
