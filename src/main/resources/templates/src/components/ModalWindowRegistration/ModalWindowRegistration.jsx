import s from "./ModalWindowRegistration.module.css";
import sideReg from "../RegistrationInput/RegistrationInput.module.css";
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
            const surname = document.getElementById('registration-surname').classList
            const name = document.getElementById('registration-name').classList
            const patronimyc = document.getElementById('registration-patronimyc').classList
            const phone = document.getElementById('registration-phone').classList
            const email = document.getElementById('registration-email').classList
            const password = document.getElementById('registration-password').classList
            const repeatPassword = document.getElementById('registration-repeat-password').classList
            const match = document.getElementById('match').classList
            const incorrect = (Array.from(surname).indexOf(sideReg.incorrect_input) != -1 || Array.from(name).indexOf(sideReg.incorrect_input) != -1 || Array.from(patronimyc).indexOf(sideReg.incorrect_input) != -1 || Array.from(phone).indexOf(sideReg.incorrect_input) != -1 || Array.from(email).indexOf(sideReg.incorrect_input) != -1 || Array.from(password).indexOf(sideReg.incorrect_input) != -1 || Array.from(repeatPassword).indexOf(sideReg.incorrect_input) != -1 || Array.from(match).indexOf(s.passwords) != - 1)
            console.log(incorrect)
            if (!incorrect){
                console.log('correct')
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
            }
        })
    }, [])

    function surnameChange(){
        const element = document.getElementById('registration-surname')
        const str = element.value
        const re = /[A-Z][a-z]{1,99}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[0]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function nameChange(){
        const element = document.getElementById('registration-name')
        const str = element.value
        const re = /[A-Z][a-z]{1,99}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[1]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function patronimycChange(){
        const element = document.getElementById('registration-patronimyc')
        const str = element.value
        const re = /[A-Z][a-z]{1,99}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[2]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function phoneChange(){
        const element = document.getElementById('registration-phone')
        const str = element.value
        const re = /[1-9]{1}[0-9]{7,14}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[4]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function emailChange(){
        const element = document.getElementById('registration-email')
        const str = element.value
        const re = /[A-Za-z.0-9]{1,64}@[A-Za-z]{1,255}\.[A-Za-z]{1,3}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[5]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function passwordChange(){
        const element = document.getElementById('registration-password')
        const str = element.value
        const re = /.{2,100}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[6]
        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

    function repeatPasswordChange(){
        const element = document.getElementById('registration-repeat-password')
        const password = document.getElementById('registration-password')
        const matching = document.getElementById('match')
        const str = element.value
        const re = /.{2,100}/
        let result = str.match(re)
        const incorrectText = document.getElementsByClassName('text')[7]

        if (element.value == password.value && Array.from(matching.classList).indexOf(s.passwords) != -1){
            matching.classList.toggle(s.passwords)
            matching.classList.toggle(s.passwords_match)
        }
        
        if (element.value != password.value && Array.from(matching.classList).indexOf(s.passwords_match) != -1){
            matching.classList.toggle(s.passwords)
            matching.classList.toggle(s.passwords_match)
        }

        if (!result){
            result = ['']
        }
        if (result[0] != str){
            if (Array.from(element.classList).indexOf(sideReg.correct_input) != -1){
                element.classList.toggle(sideReg.correct_input)
                element.classList.toggle(sideReg.incorrect_input)
            }
            if (Array.from(incorrectText.classList).indexOf(sideReg.correct_text) != -1){
                incorrectText.classList.toggle(sideReg.incorrect_text)
                incorrectText.classList.toggle(sideReg.correct_text)
            }
            return
        }
        if (Array.from(element.classList).indexOf(sideReg.incorrect_input) != -1){
            element.classList.toggle(sideReg.incorrect_input)
            element.classList.toggle(sideReg.correct_input)
        }
        if (Array.from(incorrectText.classList).indexOf(sideReg.incorrect_text) != -1){
            incorrectText.classList.toggle(sideReg.incorrect_text)
            incorrectText.classList.toggle(sideReg.correct_text)
        }
    }

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
                            id='registration-surname'
                            onChange={surnameChange} />
                        <RegistrationInput
                            text='Name:'
                            type='text'
                            placeholder='Ivan'
                            id='registration-name'
                            onChange={nameChange} />
                        <RegistrationInput
                            text='Patronimyc:'
                            type='text'
                            placeholder='Ivanov'
                            id='registration-patronimyc'
                            onChange={patronimycChange} />
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
                            id='registration-phone'
                            onChange={phoneChange} />
                        <RegistrationInput
                            text='Email:'
                            type='email'
                            placeholder='example@yandex.ru'
                            id='registration-email'
                            onChange={emailChange} />
                        <RegistrationInput
                            text='Password:'
                            type='password'
                            placeholder='Ivanov'
                            id='registration-password'
                            onChange={passwordChange} />
                        <RegistrationInput
                            text='Password:'
                            type='password'
                            placeholder='Ivanov'
                            id='registration-repeat-password'
                            onChange={repeatPasswordChange} />
                        <div className={s.passwords_match} id='match'>
                            Passwords don't match.
                        </div>
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