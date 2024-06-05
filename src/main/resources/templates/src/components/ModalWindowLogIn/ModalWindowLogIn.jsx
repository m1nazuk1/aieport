import s from "./ModalWindowLogIn.module.css";
import cancel from "../../assets/images/cancel.png";
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import side from "../MainPageContent/MainPageContent.module.css";
import { useEffect } from "react";
import API from "../../assets/API";
import LogInInput from "../LogInInput/LogInInput";

export default function ModalWindowLogIn(){
    function closeLogIn(){
        document.getElementById('log-in-email').value = ''
        document.getElementById('log-in-password').value = ''
        document.querySelector('body').classList.remove('modal_open')
        document.getElementById('modal-log-in').classList.add(side.modal_log_in_close)
    }

    useEffect(() => {
        document.getElementById('log_in_button').addEventListener('click', () => {
            const data = {
                email: document.getElementById('log-in-email').value,
                password: document.getElementById('log-in-password').value
            }
            API.logIn(data)
        })
    }, [])

    return (
        <div className={s.modal}>
            <div className={s.modal_window}>
                <div className={s.title}>
                    <span>
                        Log In
                    </span>
                    <img src={cancel} alt="cancel" className={s.img_cancel} onClick={closeLogIn} />
                </div>
                <div className={s.input_area}>
                    <LogInInput
                        text='Email:'
                        type='email'
                        id='log-in-email'
                        placeholder='example@yandex.ru' />
                    <LogInInput
                        text='Password:'
                        type='password'
                        id='log-in-password' />
                </div>
                <div className={s.not_find_user} id='not_find_user'>
                    User not found
                </div>
                <div className={s.button_box}>
                    <button id='log_in_button'>
                        Login
                    </button>
                </div>
            </div>
            <div className={s.overlay}></div>
        </div>
    )
}