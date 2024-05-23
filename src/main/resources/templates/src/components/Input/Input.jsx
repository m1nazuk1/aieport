import s from "./Input.module.css";

export default function Input(props){
    const dateNow = new Date()
    const day = dateNow.toISOString().slice(8, 10)
    const month = dateNow.toISOString().slice(5, 7)
    const year = parseInt(dateNow.toISOString().slice(0, 4)) - 2

    return (
        <div className={s.input_container}>
            <div className={s.title}>
                {props.text}
            </div>
            <input type={props.type}
                   className={s.input}
                   id={props.id}
                   min={(props.type == 'date') ? `${year}-${month}-${day}` : ''}
                   placeholder={props.type == 'text' || props.type == 'email' ? props.placeholder : ''} 
                   defaultValue={props.type == 'date' ? `${year}-${month}-${day}` : ''}/>
        </div>
    )
}