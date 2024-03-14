import { useState } from "react"

export default function Passangers(props) {
    const [value, setValue] = useState(0)

    function decrement() {
        if (value != 0) {
            setValue(() => value - 1)
        }
    }

    function increment() {
        setValue(() => value + 1)
    }

    return (
        <div className="passanger-container">
            <div className="text-passanger">
                <span className="passenger">
                    {props.text}
                </span>
            </div>
            <div className="some-passenger">
                <span className="minus" onClick={decrement}>
                    -
                </span>
                <span id={props.id}>
                    {value}
                </span>
                <span className="plus" onClick={increment}>
                    +
                </span>
            </div>
        </div>
    )
}