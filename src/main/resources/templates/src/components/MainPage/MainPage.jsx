import './MainPageStyles.css'
import Cap from './Cap.jsx'
import ModalWindowRegistration from './ModalWindowRegistration.jsx'
import ModalWindowLogIn from './ModalWindowLogIn.jsx'

export default function MainPage() {
    return (
        <div>
            <Cap />
            <ModalWindowRegistration />
            <ModalWindowLogIn />
        </div>
    )
}