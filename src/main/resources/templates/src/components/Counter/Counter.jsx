import { useState } from "react";
import s from "./Counter.module.css";

export default function Counter(props){
    const [count, setCount] = useState(0)
    
    function goMinus(){
        if (count > 0){
            setCount((prev) => prev - 1)
        }
    }

    function goPlus(){
        setCount((prev) => prev + 1)
    }

    return (
        <div className={s.counter_container}>
            <div className={s.title}>
                {props.text}
            </div>
            <div className={s.calculate}>
                <span className={s.minus} onClick={goMinus}>
                    -
                </span>
                <span id={props.id} className={s.value}>
                    {count}
                </span>
                <span className={s.plus} onClick={goPlus}>
                    +
                </span>
            </div>
        </div>
    )
}