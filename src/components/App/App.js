import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import * as auth from '../../utils/Auth';
import React, {useState} from "react";
import InfoPopup from "../InfoTooltip/InfoPopup";


function App() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [infoPopupOption, setInfoPopupOption] = useState({
    popupOpen: false,
    popupType: "success",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onRegister = (name, email, password) => {
    auth.register(name, email, password)
      .then(res => {
        if (res) {
          navigate("../signin", {replace: true});
          setInfoPopupOption({popupOpen: true, popupType: "success"});
        } else {
          setInfoPopupOption({popupOpen: true, popupType: "failure"});
        }
      })
      .catch(e => {
        console.log(e);
        setInfoPopupOption({popupOpen: true, popupType: "failure"})
      })
  }

  const closePopup = () => {
    setInfoPopupOption((state) => ({...state, popupOpen: false}));
  };

  return (
    <div className="page">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
        <Header loggedIn={isLoggedIn}/> : null}
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/movies'} element={<Movies/>}/>
        <Route path={'/saved-movies'} element={<SavedMovies/>}/>
        <Route path={'profile'} element={<Profile/>}/>
        <Route path={"signup"} element={<Register onRegister={onRegister}/>}/>
        <Route path={"signin"} element={<Login/>}/>
        <Route path={"*"} element={<PageNotFound/>}/>
      </Routes>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : null}
      <InfoPopup settings={infoPopupOption} onClose={closePopup}/>
    </div>
  );
}

export default App;
