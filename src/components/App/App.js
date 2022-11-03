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
import React, {useCallback, useEffect, useState} from "react";
import InfoPopup from "../InfoTooltip/InfoPopup";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../context/CurrentUserContext";


function App() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [infoPopupOption, setInfoPopupOption] = useState({
    popupOpen: false,
    popupType: "success",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const tokenCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoading(true);
      auth.authorize()
        .then(res => {
          if (res) {
            const {email, name} = res;
            setCurrentUser({email, name})
            setIsLoggedIn(true);
            // navigate('/', {replace: true})
          } else {
            setIsLoggedIn(false);
            localStorage.removeItem('token')
          }
        })
        .catch(e => {
          console.log(e)
        })
        .finally(() => setIsLoading(false))
    }
  }, [navigate])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  const onRegister = (name, email, password) => {
    auth.register(name, email, password)
      .then(res => {
        if (res) {
          navigate("/signin", {replace: true});
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

  const onLogin = (email, password) => {
    auth.login(email, password)
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem('token', res.token);
          navigate('/', {replace: true})
        } else {
          setInfoPopupOption({popupOpen: true, popupType: "failure"})
        }
      })
      .catch(e => {
        console.log(e)
        setInfoPopupOption({popupOpen: true, popupType: "failure"})
      })
  }

  const closePopup = () => {
    setInfoPopupOption((state) => ({...state, popupOpen: false}));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
          <Header isLoading={isLoading} loggedIn={isLoggedIn}/> : null}
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route element={<ProtectedRoutes loggedIn={isLoggedIn}/>}>
            <Route path={'/movies'} element={<Movies/>}/>
            <Route path={'/saved-movies'} element={<SavedMovies/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
          </Route>
          <Route path={"/signup"} element={<Register onRegister={onRegister}/>}/>
          <Route path={"/signin"} element={<Login onLogin={onLogin}/>}/>
          <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : null}
        <InfoPopup settings={infoPopupOption} onClose={closePopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
