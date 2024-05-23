import s from "./UserAttribute.module.css";

export default function UserAttribute(props){
    return (
        <div className={s.attribute_container}>
            <div>
                {props.text}
            </div>
            <div className={s.attribute__value}>
                <div>
                    {props.value}
                </div>
            </div>
        </div>
    )
}