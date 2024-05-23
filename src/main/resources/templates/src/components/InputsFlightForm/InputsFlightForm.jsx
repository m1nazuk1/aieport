import Counter from "../Counter/Counter";
import Input from "../Input/Input";
import s from "./InputsFlightForm.module.css";

export default function InputsFlightForm(){
    return (
        <div className={s.inputs_container}>
            <Input type='text' text='From:' id='from_input' placeholder='Kaluga'/>
            <Input type='text' text='To:' id='to_input' placeholder='London' />
            <Input type='date' text='Forward:' id='forward_date_input' />
            <div className={s.back_date} id='back_date_container'>
                <Input type='date' text='Back:' id='back_date_input' />
            </div>
            <Counter text='Adults:' id='adults_counter'/>
            <Counter text='Children:' id='children_counter' />
            <div className={s.button_container}>
                <button className={s.go_flight} id='go_flight'>
                    GO FLIGHT
                </button>
            </div>
        </div>
    )
}