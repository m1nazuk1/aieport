import s from "./ModalWindowRegistration.module.css";
import cancel from "../../assets/images/cancel.png";
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import side from "../MainPageContent/MainPageContent.module.css";
import { useEffect } from "react";
import API from "../../assets/API";

export default function ModalWindowRegistration(){
    function closeRegistration(){
        document.getElementById('registration-surname').value = ''
        document.getElementById('registration-name').value = ''
        document.getElementById('registration-patronimyc').value = ''
        document.getElementById('registration-phone').value = ''
        document.getElementById('registration-email').value = ''
        document.getElementById('registration-password').value = ''
        document.getElementById('registration-repeat-password').value = ''
        document.querySelector('body').classList.remove('modal_open')
        document.getElementById('modal-reg').classList.add(side.modal_reg_close)
    }

    useEffect(() => {
        document.getElementById('register_button').addEventListener('click', () => {
            const data = {
                surname: document.getElementById('registration-surname').value,
                userName: document.getElementById('registration-name').value,
                patronimyc: document.getElementById('registration-patronimyc').value,
                birthday: document.getElementById('registration-birthday').value,
                phone: document.getElementById('registration-phone').value,
                email: document.getElementById('registration-email').value,
                password: document.getElementById('registration-password').value,
                repeatPassword: document.getElementById('registration-repeat-password').value
            }
            API.registrate(data)
        })
    }, [])

    return (
        <div className={s.modal}>
            <div className={s.modal_window}>
                <div className={s.title}>
                    <span>
                        Registration
                    </span>
                    <img src={cancel} alt="cancel" className={s.img_cancel} onClick={closeRegistration} />
                </div>
                <div className={s.flex_container}>
                    <div className={s.first_column}>
                        <RegistrationInput
                            text='Surname:'
                            type='text'
                            placeholder='Ivanov'
                            id='registration-surname' />
                        <RegistrationInput
                            text='Name:'
                            type='text'
                            placeholder='Ivan'
                            id='registration-name' />
                        <RegistrationInput
                            text='Patronimyc:'
                            type='text'
                            placeholder='Ivanov'
                            id='registration-patronimyc' />
                        <RegistrationInput
                            text='Birthday:'
                            type='date'
                            placeholder='Ivanov'
                            id='registration-birthday' />
                    </div>
                    <div className={s.second_column}>
                        <RegistrationInput
                            text='Phone:'
                            type='text'
                            placeholder='89994561853'
                            id='registration-phone' />
                        <RegistrationInput
                            text='Email:'
                            type='email'
                            placeholder='example@yandex.ru'
                            id='registration-email' />
                        <RegistrationInput
                            text='Password:'
                            type='password'
                            placeholder='Ivanov'
                            id='registration-password' />
                        <RegistrationInput
                            text='Password:'
                            type='password'
                            placeholder='Ivanov'
                            id='registration-repeat-password' />
                    </div>
                </div>
                <div className={s.button_box}>
                    <button id='register_button'>
                        Registrate
                    </button>
                </div>
            </div>
            <div className={s.overlay}></div>
        </div>
    )
}