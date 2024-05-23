import s from "./LoginedMainPageHeader.module.css"
import {useEffect} from "react";

export default function LoginedMainPageHeader(){
    useEffect(() => {
        const header = document.querySelector("#header")
        const header__title = document.querySelector("#header__title")
        const header__logo = document.querySelector("#header__logo")
        const header__phone = document.querySelector("#header__phone")
        const header__profile = document.querySelector("#header__profile")
        const header__log_out = document.querySelector("#header__log_out")
        window.addEventListener('scroll', function () {
            const scrollCoordinate = window.scrollY
            if (scrollCoordinate >= 100){
                header.classList.add(`${s.header_minim}`)
                header__title.classList.add(`${s.header__title_minim}`)
                header__logo.classList.add(`${s.header__logo_minim}`)
                header__phone.classList.add(`${s.header__phone_minim}`)
                header__profile.classList.add(`${s.header__profile_minim}`)
                header__log_out.classList.add(`${s.header__log_out_minim}`)
                header.classList.remove(`${s.header}`)
                header__title.classList.remove(`${s.header__title}`)
                header__logo.classList.remove(`${s.header__logo}`)
                header__phone.classList.remove(`${s.header__phone}`)
                header__profile.classList.remove(`${s.header__profile}`)
                header__log_out.classList.remove(`${s.header__log_out}`)
                return
            }
            header.classList.add(`${s.header}`)
            header__title.classList.add(`${s.header__title}`)
            header__logo.classList.add(`${s.header__logo}`)
            header__phone.classList.add(`${s.header__phone}`)
            header__profile.classList.add(`${s.header__profile}`)
            header__log_out.classList.add(`${s.header__log_out}`)
            header.classList.remove(`${s.header_minim}`)
            header__title.classList.remove(`${s.header__title_minim}`)
            header__logo.classList.remove(`${s.header__logo_minim}`)
            header__phone.classList.remove(`${s.header__phone_minim}`)
            header__profile.classList.remove(`${s.header__profile_minim}`)
            header__log_out.classList.remove(`${s.header__log_out_minim}`)
        });
    }, []);

    function openProfile(){
        location.href += '/profile'
    }

    function logOut(){
        
    }

    return (
        <div className={s.header} id="header">
            <div className={s.header__title} id="header__title">
                <div className={s.header__logo} id="header__logo">
                    T
                </div>
                ravel
            </div>
            <div className={s.header__phone} id="header__phone">
                +7 922 906-07-64
            </div>
            <div>
                <button className={s.header__profile} id="header__profile" onClick={openProfile}>
                    Profile
                </button>
            </div>
            <div>
                <button className={s.header__log_out} id="header__log_out" onClick={logOut}>
                    Log Out
                </button>
            </div>
        </div>
    )
}