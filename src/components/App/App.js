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
import React, {useCallback, useEffect, useState} from "react";
import InfoPopup from "../InfoTooltip/InfoPopup";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import {useMainApi} from "../../utils/MainApi";
import {useMoviesData} from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";


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
  const [movies, setMovies] = useState([]);
  const {login, register, authorize, updateUser} = useMainApi();
  const {getMovies} = useMoviesData();

  const tokenCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoading(true);
      authorize()
        .then(res => {
          if (res) {
            const {email, name} = res;
            setCurrentUser({email, name})
            setIsLoggedIn(true);
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
  }, [navigate]);


  const getAllMovies = () => {
    getMovies()
      .then(res => {
        if (res) {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res));
        }
      })
  }

  useEffect(() => {
    tokenCheck();
    getAllMovies();
  }, []);

  const onRegister = (name, email, password) => {
    register(name, email, password)
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
    login(email, password)
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

  const handleUpdateUser = (email, name) => {
    updateUser(email, name)
      .then(res => {
        if (res) {
          setCurrentUser({email, name})
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const closePopup = () => {
    setInfoPopupOption((state) => ({...state, popupOpen: false}));
  };

  const signOut = () => {
    localStorage.removeItem('token')
    navigate('/', {replace: true})
    setIsLoggedIn(false);
  }

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
            <Route path={'/profile'} element={<Profile isLoading={isLoading} onUpdateUser={handleUpdateUser} signOut={signOut}/>}/>
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
