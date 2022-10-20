import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path={'/*'} element={
          <>
          <Header/>
            <Routes>
              <Route path={'/*'} element={<Main/>}/>
              <Route path={'/movies'} element={<Movies/>}/>
            </Routes>
          <Footer/>
        </>
        }/>
        <Route path={"signup"} element={<Register />} />
        <Route path={"signin"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
