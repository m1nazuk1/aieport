import './MainPageStyles.css'
import Cap from './Cap.jsx'
import ModalWindwowRegistration from './ModalWindwowRegistration.jsx'
import ModalWindwowLogIn from './ModalWindwowLogIn.jsx'

export default function MainPage() {
    return (
        <div>
            <Cap />
            <ModalWindwowRegistration />
            <ModalWindwowLogIn />
        </div>
    )
}