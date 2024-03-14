export default function FormInput(props) {
    const dateNow = new Date()
    const day = dateNow.toISOString().slice(8, 10)
    const month = dateNow.toISOString().slice(5, 7)
    const year = parseInt(dateNow.toISOString().slice(0, 4)) - 2

    return (
        <div className="registration-container">
            <span>
                {props.text}
            </span>
            <input type={props.type} id={props.id} placeholder={(props.type != 'password' && props.type != 'date') ? props.placeholder : ''} min={(props.type == 'date' && props.today) ? `${year}-${month}-${day}` : ''} defaultValue={props.type == 'date' ? `${year}-${month}-${day}` : ''} />
        </div>
    )
}