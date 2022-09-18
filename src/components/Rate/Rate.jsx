import React from "react";
import "./rate.css";

export const Rate = (props) => {
  return (
    <div class="container contact-form">
      <div
        style={{
          display: "flex",
          flexDirecton: "row",
          gap: "15px",
          margin: "auto 0",
        }}
      >
        <div className="header">
          <div>
            <h3>
              Оставьте отзыв - помогите новым студентам определиться с выбором
              курсов
            </h3>
            <p>
              Вы смотрите бета-версию сайта. Оставьте свой отзыв, расскажите,
              понравился ли вам наш сервис
            </p>
          </div>
        </div>

        <form
          style={{
            width: "400px",
            display: "flex",
            flexDirecton: "column",
            gap: "15px",
            margin: "25px ",
          }}
          onSubmit={props.handleRateForm}
        >
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
            <label for="customRange3" class="form-label">
              Оценка курса
            </label>
            <input
              type="range"
              class="form-range"
              min="0"
              max="5"
              step="0.5"
              id="customRange3"
            ></input>
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Текст отзыва *"
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
    </div>
  );
};
