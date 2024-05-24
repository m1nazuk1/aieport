import UserAttribute from "../UserAttribute/UserAttribute";
import s from "./ProfilePageContent.module.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { useEffect, useState } from "react";
import API from "../../assets/API";
import CardForm from "../CardForm/CardForm.jsx";
import CardBuyingForm from "../CardBuyingForm/CardBuyingForm.jsx";
import TicketCard from "../TicketCard/TicketCard.jsx";

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

    API.getUserTickets()
    const tickets = JSON.parse(localStorage.getItem('myTickets'))


    useEffect(() => {
        API.getUserInfo()
        API.getUserCardInfo()
        setSurname(localStorage.getItem('surname'))
        setName(localStorage.getItem('name'))
        setPatronimyc(localStorage.getItem('patronymic'))
        setEmail(localStorage.getItem('email'))
        setPhone(localStorage.getItem('phone'))
        setBirthday(localStorage.getItem('birthday'))
        if (localStorage.getItem('cardExist')){
            setCardNumber(localStorage.getItem('cardNumber'))
            setCVV(localStorage.getItem('cvv'))
            setDate(localStorage.getItem('cardDate'))
            document.getElementById('add-card').classList.add(s.disactive)
        }
        else{
            document.getElementById('edit-card').classList.add(s.disactive)
        }
    }, [])

    function openCardForm() {
        document.getElementById('modal-card-buying').classList.add('active')
        document.querySelector('body').classList.add('modal_open')
    }


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
                        <UserAttribute text='Number:' value={cardNumber}/>
                        <UserAttribute text='Date:' value={CVV}/>
                        <UserAttribute text='CVV:' value={date}/>
                        <button id='add-card' className={s.add_card} onClick={openCardForm}>Add card</button>
                        <button id='edit-card' className={s.add_card} onClick={openCardForm}>Edit card</button>
                    </div>
                </div>
                <div className={s.profile__attributes}>
                    <UserAttribute text='Surname:' value={surname}/>
                    <UserAttribute text='Name:' value={name} />
                    <UserAttribute text='Patronimyc:' value={patronimyc} />
                    <UserAttribute text='Email:' value={email} />
                    <UserAttribute text='Phone:' value={phone} />
                    <UserAttribute text='Birthday:' value={birthday} />
                </div>
                <div className={s.container}>
                    <div className={s.tickets_title}>
                        My tickets
                    </div>
                    {tickets.map((ticket, index) => {
                        return (
                            <div key={index}>
                                <TicketCard
                                    ticket={ticket} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <CardBuyingForm />
        </div>
    )
}