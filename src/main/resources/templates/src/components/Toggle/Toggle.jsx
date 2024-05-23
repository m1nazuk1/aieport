import s from "./Toggle.module.css";
import side from "../InputsFlightForm/InputsFlightForm.module.css";

export default function Toggle(){
    function toggleDate(){
        document.getElementById('back_date_container').classList.toggle(side.back_date)
    }

    return (
        <div className={s.toggle}>
            <span className={s.one_way_text}>One way</span>
            <label className={s.switch}>
                <input type="checkbox" className={s.switch_input} onChange={toggleDate} />
                <span className={s.switch_slider}></span>
            </label>
            <span className={s.returning_text}>Returning</span>
        </div>
    )
}