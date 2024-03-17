import whiteLogo from '../../images/web_logo_white.png'
import blackLogo from '../../images/web_logo_black.png'
import HeaderButton from './HeaderButton.jsx'
import './MainPageStyles.css'
import { useState } from 'react'

export default function LoginedHeader() {
    const [logo, setLogo] = useState(whiteLogo)

    function openProfile() {
        document.location.href += '/Profile'
    }

    function exitFromAccount() {
        localStorage.removeItem('JWT')
        document.location.href = '../'
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
                <div id='profile-log-out'>
                    <HeaderButton text='Profile' id='profile-button' click={openProfile} />
                    <HeaderButton text='Log Out' id='log-out-button' click={exitFromAccount} />
                </div>
            </header>
        </div>
    )
}