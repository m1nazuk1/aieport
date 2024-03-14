export default function HeaderButton(props) {
    return (
        <button id={props.id} onClick={props.click}>
            {props.text}
        </button>
    )
}