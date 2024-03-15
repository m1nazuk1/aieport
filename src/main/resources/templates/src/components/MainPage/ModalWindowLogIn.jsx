import cancel from '../../images/cancel.png'
import FormInput from './FormInput.jsx'
import Button from './Button.jsx'

export default function ModalWindowLogIn() {
    function closeLogIn() {
        document.getElementById('modal-log-in').classList.remove('active')
        document.querySelector('body').classList.remove('modal-open')
    }

    function sendLogInForm() {
        const data = {
            email: document.getElementById('log-in-email').value,
            password: document.getElementById('log-in-password').value
        }

        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    errorMessage.textContent = data.message;
                    console.log(data.message)
                } else {
                    console.log('JWT Token:', data['jwt-token']);
                    localStorage.setItem('JWT', data['jwt-token'])
                }
            })
            .catch(error => console.error('Ошибка:', error));
        closeLogIn();
    }

    return (
        <div id='modal-log-in'>
            <div id='modal-log-in-content'>
                <div id='close-container-log-in'>
                    <span>
                        LogIn
                    </span>
                    <img src={cancel} alt='cancel' onClick={closeLogIn} />
                </div>
                <div id='container-log-in-blocks'>
                    <FormInput placeholder='example@domen.ru' text='Email:' type='email' id='log-in-email' />
                    <FormInput text='Password:' type='password' id='log-in-password' />
                    <div className='checkbox-submit-container'>
                        <div className='checkbox-container'>
                            <input type='checkbox' />
                            <span>
                                Remember me
                            </span>
                        </div>
                        <div>
                            <Button id='log-in-submit-button' text='Log In' click={sendLogInForm} />
                        </div>
                    </div>
                </div>
                <a href="/Profile">Profile</a>
            </div>
        </div>
    )
}