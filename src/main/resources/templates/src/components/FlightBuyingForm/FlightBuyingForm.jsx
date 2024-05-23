import s from "./FlightBuyingForm.module.css";
import Toggle from "../Toggle/Toggle.jsx";
import InputsFlightForm from "../InputsFlightForm/InputsFlightForm.jsx";

export default function FlightBuyingForm(){
    return (
        <div className={s.container}>
            <div className={s.flight_form_container}>
                <div className={s.flight_form_container__title}>
                    Flight
                </div>
                <Toggle />
                <div className={s.flight_inputs}>
                    <InputsFlightForm />
                </div>
            </div>
        </div>
    )
}