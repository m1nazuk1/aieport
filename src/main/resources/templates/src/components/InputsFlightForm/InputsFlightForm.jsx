import Input from "../Input/Input";
import s from "./InputsFlightForm.module.css";
import API from "../../assets/API.js";
import {useState} from "react";
import side from "../MainPageContent/MainPageContent.module.css";

export default function InputsFlightForm(){
    function submitFlight(){
        const ticket = {}
        ticket.whereFrom = document.getElementById('from_input').value
        ticket.whereTo = document.getElementById('to_input').value
        ticket.flightDateForth = document.getElementById('forward_date_input').value
        ticket.children = countChildren
        ticket.adults = countAdults
        if (document.getElementById('toggle_back').checked){
            ticket.flightDateBack = document.getElementById('back_date_input').value
        }
        console.log(ticket)
        API.pushTicket(ticket)
        document.querySelector('body').classList.add('modal_open')
        document.getElementById('modal-flight').classList.remove(side.modal_flight_close)
    }

    const [countAdults, setCountAdults] = useState(0)

    function goMinusAdults(){
        if (countAdults > 0){
            setCountAdults((prev) => prev - 1)
        }
    }

    function goPlusAdults(){
        setCountAdults((prev) => prev + 1)
    }

    const [countChildren, setCountChildren] = useState(0)

    function goMinusChildren(){
        if (countChildren > 0){
            setCountChildren((prev) => prev - 1)
        }
    }

    function goPlusChildren(){
        setCountChildren((prev) => prev + 1)
    }

    return (
        <div className={s.inputs_container}>
            <Input type='text' text='From:' id='from_input' placeholder='Kaluga'/>
            <Input type='text' text='To:' id='to_input' placeholder='London'/>
            <Input type='date' text='Forward:' id='forward_date_input'/>
            <div className={s.back_date} id='back_date_container'>
                <Input type='date' text='Back:' id='back_date_input'/>
            </div>

            <div className={s.counter_container}>
                <div className={s.title}>
                    Adults
                </div>
                <div className={s.calculate}>
                <span className={s.minus} onClick={goMinusAdults}>
                    -
                </span>
                    <span id='adults_counter' className={s.value}>
                    {countAdults}
                </span>
                    <span className={s.plus} onClick={goPlusAdults}>
                    +
                </span>
                </div>
            </div>

            <div className={s.counter_container}>
                <div className={s.title}>
                    Children
                </div>
                <div className={s.calculate}>
                <span className={s.minus} onClick={goMinusChildren}>
                    -
                </span>
                    <span id='children_counter' className={s.value}>
                    {countChildren}
                </span>
                    <span className={s.plus} onClick={goPlusChildren}>
                    +
                </span>
                </div>
            </div>

            <div className={s.button_container}>
                <button className={s.go_flight} id='go_flight' onClick={submitFlight}>
                    GO FLIGHT
                </button>
            </div>
        </div>
    )
}