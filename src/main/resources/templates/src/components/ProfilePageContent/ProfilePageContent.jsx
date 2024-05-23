import UserAttribute from "../UserAttribute/UserAttribute";
import s from "./ProfilePageContent.module.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { useEffect, useState } from "react";
import API from "../../assets/API";

export default function ProfilePageContent(){
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronimyc, setPatronimyc] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')

    const [cardNumber, setCardNumber] = useState('-')
    const [CVV, setCVV] = useState('-')
    const [date, setDate] = useState('-')

    useEffect(() => {
        const user = API.getUserInfo()
        const card = API.getUserCardInfo()
        setSurname(user.surname)
        setName(user.name)
        setPatronimyc(user.patronimyc)
        setEmail(user.email)
        setPhone(user.phone)
        setBirthday(user.birthday)
        if (card.exist){
            setCardNumber(data.cardNumber)
            setCVV(data.cvv)
            setDate(data.date)
        }
    }, [])

    return (
        <div className={s.profile_container}>
            <div className={s.profile__content}>
                <div className={s.profile__title}>
                    <span>
                        Profile
                    </span>
                </div>
                <div className={s.profile__info}>
                    <ProfilePhoto />
                    <div className={s.profile__card_data}>
                        <div className={s.profile__card_title}>
                            Card
                        </div>
                        <UserAttribute text='Number:' value={cardNumber} />
                        <UserAttribute text='Date:' value={CVV} />
                        <UserAttribute text='CVV:' value={date} />
                    </div>
                </div>
                <div className={s.profile__attributes}>
                    <UserAttribute text='Surname:' value={surname} />
                    <UserAttribute text='Name:' value={name} />
                    <UserAttribute text='Patronimyc:' value={patronimyc} />
                    <UserAttribute text='Email:' value={email} />
                    <UserAttribute text='Phone:' value={phone} />
                    <UserAttribute text='Birthday:' value={birthday} />
                </div>
            </div>
        </div>
    )
}