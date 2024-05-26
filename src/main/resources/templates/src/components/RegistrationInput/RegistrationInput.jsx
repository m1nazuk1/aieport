import s from "./RegistrationInput.module.css";

export default function RegistrationInput(props){
    const dateNow = new Date()
    const day = dateNow.toISOString().slice(8, 10)
    const month = dateNow.toISOString().slice(5, 7)
    const year = parseInt(dateNow.toISOString().slice(0, 4)) - 18

    return (
        <div>
            <div className={s.input_container}>
                <div className={s.title}>
                    {props.text}
                </div>
                <input type={props.type}
                       className={props.type === 'date' ? s.correct_input : s.incorrect_input}
                       id={props.id}
                       min={(props.type == 'date') ? `${year}-${month}-${day}` : ''}
                       placeholder={props.type == 'text' || props.type == 'email' ? props.placeholder : ''} 
                       defaultValue={props.type == 'date' ? `${year}-${month}-${day}` : ''}
                       onChange={props.onChange}
                       autoComplete="new-password" />
            </div>
            <div className={props.type === 'date' ? `${s.correct_text} text` : `${s.incorrect_text} text`}>
                Incorrect value
            </div>
        </div>
    )
}