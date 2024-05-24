import TicketProperty from "../TicketProperty/TIcketProperty.jsx";
import s from "./TicketCard.module.css";

export default function TicketCard(props){
    return (
        <div className={s.container}>
            <TicketProperty
                text='From:'
                value={props.ticket.whereFrom} />
            <TicketProperty
                text='To:'
                value={props.ticket.whereTo} />
            <TicketProperty
                text='Date to:'
                value={props.ticket.flightDateForth} />
            <TicketProperty
                text='Date back:'
                value={props.ticket.flightDateBack} />
            <TicketProperty
                text='Adults:'
                value={props.ticket.adults} />
            <TicketProperty
                text='Children:'
                value={props.ticket.children} />
        </div>
    )
}