import s from "./ProfileHeader.module.css"
import {useEffect} from "react";

export default function ProfileHeader(){
    useEffect(() => {
        const header = document.querySelector("#header")
        const header__title = document.querySelector("#header__title")
        const header__logo = document.querySelector("#header__logo")
        const header__phone = document.querySelector("#header__phone")
        const header__buying = document.querySelector("#header__buying")
        const header__log_out = document.querySelector("#header__log_out")
        window.addEventListener('scroll', function () {
            const scrollCoordinate = window.scrollY
            if (scrollCoordinate >= 100){
                header.classList.add(`${s.header_minim}`)
                header__title.classList.add(`${s.header__title_minim}`)
                header__logo.classList.add(`${s.header__logo_minim}`)
                header__phone.classList.add(`${s.header__phone_minim}`)
                header__buying.classList.add(`${s.header__buying_minim}`)
                header__log_out.classList.add(`${s.header__log_out_minim}`)
                header.classList.remove(`${s.header}`)
                header__title.classList.remove(`${s.header__title}`)
                header__logo.classList.remove(`${s.header__logo}`)
                header__phone.classList.remove(`${s.header__phone}`)
                header__buying.classList.remove(`${s.header__buying}`)
                header__log_out.classList.remove(`${s.header__log_out}`)
                return
            }
            header.classList.add(`${s.header}`)
            header__title.classList.add(`${s.header__title}`)
            header__logo.classList.add(`${s.header__logo}`)
            header__phone.classList.add(`${s.header__phone}`)
            header__buying.classList.add(`${s.header__buying}`)
            header__log_out.classList.add(`${s.header__log_out}`)
            header.classList.remove(`${s.header_minim}`)
            header__title.classList.remove(`${s.header__title_minim}`)
            header__logo.classList.remove(`${s.header__logo_minim}`)
            header__phone.classList.remove(`${s.header__phone_minim}`)
            header__buying.classList.remove(`${s.header__buying_minim}`)
            header__log_out.classList.remove(`${s.header__log_out_minim}`)
        });
    }, []);

    function buying(){
        location.href = location.href.slice(0, 29)
    }

    function logOut(){
        
    }

    function goHome(){
        location.href = 'http://localhost:5173/logined'
    }

    return (
        <div className={s.header} id="header">
            <div className={s.header__title} id="header__title" onClick={goHome}>
                <div className={s.header__logo} id="header__logo">
                    T
                </div>
                ravel
            </div>
            <div className={s.header__phone} id="header__phone">
                +7 922 906-07-64
            </div>
            <div>
                <button className={s.header__buying} id="header__buying" onClick={buying}>
                    Buying
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