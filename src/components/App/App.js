import './App.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
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
    </div>
  );
}

export default App;
