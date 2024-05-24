import s from "./TicketProperty.module.css";

export default function TicketProperty(props){
    return (
        <div className={s.container}>
            <div className={s.text}>
                {props.text}
            </div>
            <div>
                {props.value}
            </div>
        </div>
    )
}