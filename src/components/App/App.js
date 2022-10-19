import './App.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path={'/*'} element={
          <>
          <Header/>
          <Main>
            <Promo>
              <NavTab/>
            </Promo>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
          </Main>
          <Footer/>
        </>
        }/>
        <Route path={"register"} element={<Register />} />
        <Route path={"login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
