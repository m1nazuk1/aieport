import cancel from '../../images/cancel.png'
import FormInput from './FormInput.jsx'
import Button from './Button.jsx'

export default function ModalWindwowLogIn() {
    function closeLogIn() {
        document.getElementById('modal-log-in').classList.remove('active')
        document.querySelector('body').classList.remove('modal-open')
    }

    function senLogInForm() {
        const data = {
            
        }
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
                    <FormInput placeholder='fadeyjo' text='Login:' type='text' id='log-in-login' />
                    <FormInput text='Password:' type='password' id='log-in-password' />
                    <div className='checkbox-submit-container'>
                        <div className='checkbox-container'>
                            <input type='checkbox' />
                            <span>
                                Remember me
                            </span>
                        </div>
                        <div>
                            <Button id='log-in-submit-button' text='Log In' click={senLogInForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}