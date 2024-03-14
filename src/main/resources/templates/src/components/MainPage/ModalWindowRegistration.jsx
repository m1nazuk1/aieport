import cancel from '../../images/cancel.png'
import FormInput from './FormInput.jsx'
import Button from './Button.jsx'

export default function ModalWindowRegistration() {
    function closeRegistration() {
        document.getElementById('modal-registration').classList.remove('active')
        document.querySelector('body').classList.remove('modal-open')
    }

    function sendRegistrationForm() {
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

        fetch('http://localhost:8080/api/auth/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                errorMessage.textContent = data.message;
            } else {
                console.log('JWT Token:', data['jwt-token']);
                localStorage.setItem('JWT', data['jwt-token'])
            }
        })
        .catch(error => console.error('Ошибка:', error));
        closeRegistration();
    }

    return (
        <div id='modal-registration'>
            <div id='modal-registration-content'>
                <div id="close-container-registration">
                    <span>
                        Registration
                    </span>
                    <img src={cancel} alt="cancel" onClick={closeRegistration} />
                </div>
                <div id='container-registration-blocks'>
                    <div>
                        <FormInput placeholder='Ivanov' text='Surname:' type='text' id='registration-surname' />
                        <FormInput placeholder='Ivan' text='Name:' type='text' id='registration-name' />
                        <FormInput placeholder='Ivanov' text='Patronimyc:' type='text' id='registration-patronimyc' />
                        <FormInput text='Birthday:' type='date' id='registration-birthday' today={false} />
                    </div>
                    <div>
                        <FormInput placeholder='89993728812' text='Phone:' type='text' id='registration-phone' />
                        <FormInput placeholder='example@domen.com' text='Email:' type='email' id='registration-email' />
                        <FormInput text='Password:' type='password' id='registration-password' />
                        <FormInput text='Repeat password:' type='password' id='registration-repeat-password' />
                    </div>
                </div>
                <div id='remember-me-checkbox-registration'>
                            <div className='checkbox-container'>
                                <input type="checkbox" />
                                <span>
                                    Remember me
                                </span>
                            </div>
                            <div>
                                <Button id='registration-submit-button' text='Registration' click={sendRegistrationForm} />
                            </div>
                        </div>
            </div>
        </div>
    )
}