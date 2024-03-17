import './MainPageStyles.css'
import ModalWindowRegistration from './ModalWindowRegistration.jsx'
import ModalWindowLogIn from './ModalWindowLogIn.jsx'

export default function MainPage() {
    return (
        <div>
            <ModalWindowRegistration />
            <ModalWindowLogIn />
        </div>
    )
}