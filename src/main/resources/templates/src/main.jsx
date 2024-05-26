import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPageHeader from "./components/MainPageHeader/MainPageHeader.jsx";
import MainPageContent from "./components/MainPageContent/MainPageContent.jsx";
import LoginedMainPageHeader from './components/LoginedMainPageHeader/LoginedMainPageHeader.jsx';
import ProfileHeader from './components/ProfileHeader/ProfileHeader.jsx';
import ProfilePageContent from './components/ProfilePageContent/ProfilePageContent.jsx';
import LoginedMainPageContent from "./components/LoginedMainPageContent/LoginedMainPageContent.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPageHeader />} />
            <Route path='/logined' element={<LoginedMainPageHeader/>} />
            <Route path='/logined/profile' element={<ProfileHeader/>} />
        </Routes>
        <Routes>
            <Route path='/' element={<MainPageContent />} />
            <Route path='/logined' element={<LoginedMainPageContent />} />
            <Route path='/logined/profile' element={<ProfilePageContent/>} />
        </Routes>
    </BrowserRouter>,
)
