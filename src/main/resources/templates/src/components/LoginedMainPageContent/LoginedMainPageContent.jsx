import s from "./LoginedMainPageContent.module.css"
import Slogan from "../Slogan/Slogan.jsx";
import Slider from "../Slider/Slider.jsx";
import FlightBuyingForm from "../FlightBuyingForm/FlightBuyingForm.jsx";
import ModalWindowRegistration from "../ModalWindowRegistration/ModalWindowRegistration.jsx";
import ModalWindowLogIn from "../ModalWindowLogIn/ModalWindowLogIn.jsx";
import ModalWindowFlight from "../ModalWindowFlight/ModalWindowFlight.jsx";

export default function LoginedMainPageContent(){
    return (
        <div>
            <Slogan />
            <FlightBuyingForm />
            <div className={s.slider_section}>
                <Slider />
            </div>
            <div className={s.modal_reg_close} id='modal-reg'>
                <ModalWindowRegistration />
            </div>
            <div className={s.modal_log_in_close} id='modal-log-in'>
                <ModalWindowLogIn />
            </div>
            <div className={s.modal_flight_close} id='modal-flight'>
                <ModalWindowFlight />
            </div>
        </div>
    )
}