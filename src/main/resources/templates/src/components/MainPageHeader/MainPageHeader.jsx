import s from "./MainPageHeader.module.css"
import {useEffect} from "react";
import side from "../MainPageContent/MainPageContent.module.css";

export default function MainPageHeader(){
    useEffect(() => {
        const header = document.querySelector("#header")
        const header__title = document.querySelector("#header__title")
        const header__logo = document.querySelector("#header__logo")
        const header__phone = document.querySelector("#header__phone")
        const header__log_in = document.querySelector("#header__log_in")
        const header__registration = document.querySelector("#header__registration")
        window.addEventListener('scroll', function () {
            const scrollCoordinate = window.scrollY
            if (scrollCoordinate >= 100){
                header.classList.add(`${s.header_minim}`)
                header__title.classList.add(`${s.header__title_minim}`)
                header__logo.classList.add(`${s.header__logo_minim}`)
                header__phone.classList.add(`${s.header__phone_minim}`)
                header__log_in.classList.add(`${s.header__log_in_minim}`)
                header__registration.classList.add(`${s.header__registration_minim}`)
                header.classList.remove(`${s.header}`)
                header__title.classList.remove(`${s.header__title}`)
                header__logo.classList.remove(`${s.header__logo}`)
                header__phone.classList.remove(`${s.header__phone}`)
                header__log_in.classList.remove(`${s.header__log_in}`)
                header__registration.classList.remove(`${s.header__registration}`)
                return
            }
            header.classList.add(`${s.header}`)
            header__title.classList.add(`${s.header__title}`)
            header__logo.classList.add(`${s.header__logo}`)
            header__phone.classList.add(`${s.header__phone}`)
            header__log_in.classList.add(`${s.header__log_in}`)
            header__registration.classList.add(`${s.header__registration}`)
            header.classList.remove(`${s.header_minim}`)
            header__title.classList.remove(`${s.header__title_minim}`)
            header__logo.classList.remove(`${s.header__logo_minim}`)
            header__phone.classList.remove(`${s.header__phone_minim}`)
            header__log_in.classList.remove(`${s.header__log_in_minim}`)
            header__registration.classList.remove(`${s.header__registration_minim}`)
        });
    }, []);

    function openRegistration(){
        document.querySelector('body').classList.add('modal_open')
        document.getElementById('modal-reg').classList.remove(side.modal_reg_close)
    }

    function openLogIn(){
        document.querySelector('body').classList.add('modal_open')
        document.getElementById('modal-log-in').classList.remove(side.modal_log_in_close)
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
                <button className={s.header__log_in} id="header__log_in" onClick={openLogIn}>
                    Log In
                </button>
            </div>
            <div>
                <button className={s.header__registration} id="header__registration" onClick={openRegistration}>
                    Registration
                </button>
            </div>
        </div>
    )
}