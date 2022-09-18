import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Promo } from "./Promo/Promo";
import { FindPath } from "./FindPath/FindPath";
import { Trust } from "./Trust/Trust";
import { SuccessStory } from "./SuccessStory/SuccessStory";
import { Areas } from "./Areas/Areas";
import { Contact } from "./Contact/Contact";
import { Programming } from "./Programming/Programming";
import { Rate } from "./Rate/Rate";
import  ProtectedRoute  from "./ProtectedRoute";
import * as auth from "../utils/auth.js";
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import InfoTooltip2 from "./InfoTooltip2/InfoTooltip2";
import InfoTooltip3 from "./InfoTooltip3/InfoTooltip3";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterSuccess, setRegisterInfo] = useState(false);
  const [registerInfo, openRegisterInfo] = useState(false);
  const [contactInfo, openContactInfo] = useState(false);
  const [rateInfo, openRateInfo] = useState(false);

  // useEffect(() => {
  //   tokenCheck();
  // }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setEmail(data.data.email);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
        setEmail(email);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegister = (email, password) => {
    auth
      .register(password, email)
      .then((data) => {
        setRegisterInfo(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        setRegisterInfo(false);
        console.error(err);
      })
      .finally(() => {
        openRegisterInfo(true);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setEmail("");
    setIsLoggedIn(false);
    navigate("/sign-in");
  };

  const closeAllPopups = () => {
    openRegisterInfo(false);
    openContactInfo(false);
    openRateInfo(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    openContactInfo(true);
  };


  const handleRateForm = (e) => {
    e.preventDefault();
    openRateInfo(true);
  };

  const isOpen = registerInfo | contactInfo | rateInfo;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />{" "}
              <Promo /> <FindPath /> <Areas /> <Trust /> <SuccessStory />{" "}
              <Contact handleContactForm={handleContactForm} />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />{" "}
              <Contact handleContactForm={handleContactForm} />
              <Footer />
            </>
          }
        />
        <Route
          path="/coding"
          element={
            <>
              <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />{" "}
              <Programming /> <Footer />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />{" "}
              <Register handleRegister={handleRegister} />
              <Footer />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />{" "}
              <Login handleLogin={handleLogin} /> 
            </>
          }
        />
        <Route
          path="/rate-your-course"
          element={
            
            <ProtectedRoute isLoggedIn={isLoggedIn}>
               <Header
                isloggedIn={isLoggedIn}
                handleLogout={handleLogout}
                email={email}
              />
             <Rate handleRateForm={handleRateForm}/>
             <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
      <InfoTooltip
        isCorrect={isRegisterSuccess}
        onClose={closeAllPopups}
        isOpen={registerInfo}
      />
      <InfoTooltip2 onClose={closeAllPopups} isOpen={contactInfo} />
      <InfoTooltip3 onClose={closeAllPopups} isOpen={rateInfo} />
    </div>
  );
}

export default App;
