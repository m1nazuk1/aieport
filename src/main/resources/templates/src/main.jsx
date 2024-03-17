import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage/MainPage.jsx'
import LoginedMainPage from "./components/MainPage/LoginedMainPage.jsx";
import Cap from "./components/MainPage/Cap.jsx";
import LoginedCap from "./components/MainPage/LoginedCap.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import LoginedHeader from "./components/MainPage/LoginedHeader.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Cap />} />
              <Route path='/logined' element={<LoginedCap />} />
              <Route path='/logined/Profile' element={<LoginedHeader />} />
          </Routes>
      </BrowserRouter>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/logined' element={<LoginedMainPage />} />
              <Route path='/logined/Profile' element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
