import "./App.css";
import { Routes, Route } from "react-router-dom";
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

const handleLogin = (email, password) => {};

const handleRegister = (email, password) => {};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Promo /> <FindPath /> <Areas /> <Trust />{" "}
              <SuccessStory /> <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Header /> <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/coding"
          element={
            <>
              <Header /> <Programming /> <Footer />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Header /> <Register handleRegister={handleRegister} />
              <Footer />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <Header /> <Login handleLogin={handleLogin} /> <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
