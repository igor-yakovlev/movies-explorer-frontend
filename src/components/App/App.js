import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes, useLocation} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const {pathname} = useLocation();

  return (
    <div className="page">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? <Header/> : null}
      <Routes>
        <Route path={'/*'} element={<Main/>}/>
        <Route path={'/movies'} element={<Movies/>}/>
        <Route path={'/saved-movies'} element={<SavedMovies/>}/>
        <Route path={'profile'} element={<Profile/>}/>
        <Route path={"signup"} element={<Register/>}/>
        <Route path={"signin"} element={<Login/>}/>
      </Routes>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : null}
    </div>
  );
}

export default App;
