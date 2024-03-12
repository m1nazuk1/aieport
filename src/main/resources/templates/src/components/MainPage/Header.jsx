import whiteLogo from '../../images/web_logo_white.png'
import blackLogo from '../../images/web_logo_black.png'
import './MainPageStyles.css'
import { useState } from 'react'
import HeaderButton from './HeaderButton.jsx'

export default function Header() {
    const [logo, setLogo] = useState(whiteLogo)

    function openRegistration() {
        document.getElementById('modal-registration').classList.add('active')
        document.querySelector('body').classList.add('modal-open')
    }

    function openLogIn() {
        document.getElementById('modal-log-in').classList.add('active')
        document.querySelector('body').classList.add('modal-open')
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY
        if (scrollPosition > 20) {
            document.querySelector('header').classList.add('transform-to-small')
            setLogo(blackLogo)
        }
        else{
            setLogo(whiteLogo)
            document.querySelector('header').classList.remove('transform-to-small')
        }
    })

    return (
        <div>
            <header>
                <div id='logo-title'>
                    <img src={logo} alt="logo" />
                    <span id='title'>TRAVEL</span>
                </div>
                <div id='registration-log-in'>
                    <HeaderButton text='Registration' id='registration-button' click={openRegistration} />
                    <HeaderButton text='Log In' id='log-in-button' click={openLogIn} />
                </div>
            </header>
        </div>
    )
}