import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './components/MainPage/MainPage.jsx'
import ProfilePage from './components/ProfilePage/ProfilePage.jsx'
import {Route, Routes, BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/Profile' element={<ProfilePage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
