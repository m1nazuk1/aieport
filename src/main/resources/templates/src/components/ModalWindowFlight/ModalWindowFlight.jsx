import s from "./ModalWindowFlight.module.css";
import side from "../MainPageContent/MainPageContent.module.css";

export default function ModalWindowFlight(){
    function closeWindow(){
        document.querySelector('body').classList.remove('modal_open')
        document.getElementById('modal-flight').classList.add(side.modal_flight_close)
    }

    return (
        <div className={s.modal}>
            <div className={s.modal_window}>
                <div className={s.title}>
                    Ticket is purchased!
                </div>
                <div>
                    <button className={s.ok_button} onClick={closeWindow}>
                        ok
                    </button>
                </div>
            </div>
            <div className={s.overlay}></div>
        </div>
    )
}