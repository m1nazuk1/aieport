export default function Input(props) {
    const dateNow = new Date()
    const day = dateNow.toISOString().slice(8, 10)
    const month = dateNow.toISOString().slice(5, 7)
    const year = dateNow.toISOString().slice(0, 4)

    return (
        <div className="input-container">
            <div className="text-input">
                <span>
                    {props.text}
                </span>
            </div>
            <div className="some-input">
                <input type={props.type} id={props.id} placeholder={props.placeholder} defaultValue={props.type == 'date' ? `${year}-${month}-${day}` : ''} min={props.type == 'date' ? `${year}-${month}-${day}` : ''} />
            </div>
        </div>
    )
}