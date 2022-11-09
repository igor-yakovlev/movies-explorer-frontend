import './App.css';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoPopup from '../InfoPopup/InfoPopup';
import ProtectedRoutes from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../context/CurrentUserContext';
import useMainApi from '../../utils/MainApi';
import useMoviesData from '../../utils/MoviesApi';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [infoPopupOption, setInfoPopupOption] = useState({
    popupOpen: false,
    popupType: 'success',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const {
    login, register, authorize, updateUser, addMovie, getSavedMovies, deleteSavedMovies,
  } = useMainApi();
  const { getMovies } = useMoviesData();

  const getAllMovies = () => {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem('movies', JSON.stringify(res));
        }
      })
      .catch((e) => {
        console.log(e);
        setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
      })
      .finally(() => setIsLoading(false));
  };
  const getSaveMovies = () => {
    setIsLoading(true);
    getSavedMovies()
      .then((res) => {
        if (res) {
          setSavedMovies(res);
        }
      })
      .catch((e) => {
        console.log(e);
        setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
      })
      .finally(() => setIsLoading(false));
  };

  const tokenCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoading(true);
      authorize()
        .then((res) => {
          if (res) {
            if (pathname === '/signin' || pathname === '/signup') navigate('/', { replace: true });
            const { email, name } = res;
            setCurrentUser({ email, name });
            setIsLoggedIn(true);
            if (pathname === '/movies' || pathname === '/saved-movies') getSaveMovies();
          } else {
            setIsLoggedIn(false);
            localStorage.removeItem('token');
            localStorage.removeItem('searchMovies');
            localStorage.removeItem('searchMoviesCheck');
            localStorage.removeItem('moviesSearchString');
            localStorage.removeItem('movies');
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [navigate]);

  useEffect(() => {
    tokenCheck();
  }, []);

  const onLogin = (email, password) => {
    login(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem('token', res.token);
          navigate('/movies', { replace: true });
        } else {
          setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
        }
      })
      .catch((e) => {
        console.log(e);
        setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
      });
  };

  const onRegister = (name, email, password) => {
    register(name, email, password)
      .then((res) => {
        if (res) {
          onLogin(email, password);
          setInfoPopupOption({ popupOpen: true, popupType: 'success' });
        } else {
          setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
        }
      })
      .catch((e) => {
        console.log(e);
        setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
      });
  };

  const handleUpdateUser = (email, name) => {
    updateUser(email, name)
      .then((res) => {
        if (res) {
          setCurrentUser({ email, name });
          setInfoPopupOption({ popupOpen: true, popupType: 'successChangeData' });
        }
      })
      .catch((e) => {
        console.log(e);
        setInfoPopupOption({ popupOpen: true, popupType: 'failure' });
      });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('searchMoviesCheck');
    localStorage.removeItem('moviesSearchString');
    localStorage.removeItem('movies');
    navigate('/', { replace: true });
    setIsLoggedIn(false);
  };

  const handleToggleMovies = (movie) => {
    const isSaved = savedMovies.some((film) => film.movieId === movie.movieId || film.movieId === movie.id);
    if (isSaved) {
      const deleteMovieId = !movie._id ? savedMovies.find((film) => film.movieId === movie.id)._id : movie._id;
      deleteSavedMovies(deleteMovieId)
        .then((res) => {
          if (res) {
            setSavedMovies(savedMovies.filter((film) => film.movieId !== res.movieId));
          }
        })
        .catch((e) => {
          console.log(e);
          setInfoPopupOption({ popupOpen: true, popupType: 'failureAddLike' });
          signOut();
        });
    } else {
      addMovie(movie)
        .then((res) => {
          if (res) {
            setSavedMovies((prevState) => [...prevState, res]);
          }
        })
        .catch((e) => {
          console.log(e);
          setInfoPopupOption({ popupOpen: true, popupType: 'failureAddLike' });
        });
    }
  };

  const closePopup = () => {
    setInfoPopupOption((state) => ({ ...state, popupOpen: false }));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile'
          ? <Header isLoading={isLoading} loggedIn={isLoggedIn} /> : null}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoutes loggedIn={isLoggedIn} />}>
            <Route
              path="/movies"
              element={(
                <Movies
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                  getMovies={getAllMovies}
                  handleToggleMovies={handleToggleMovies}
                />
)}
            />
            <Route
              path="/saved-movies"
              element={(
                <SavedMovies
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                  handleToggleMovies={handleToggleMovies}
                />
)}
            />
            <Route
              path="/profile"
              element={<Profile isLoading={isLoading} onUpdateUser={handleUpdateUser} signOut={signOut} />}
            />
          </Route>
          <Route path="/signup" element={<Register isLoading={isLoading} onRegister={onRegister} />} />
          <Route path="/signin" element={<Login isLoading={isLoading} onLogin={onLogin} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer /> : null}
        <InfoPopup settings={infoPopupOption} onClose={closePopup} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
