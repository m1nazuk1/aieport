import AttributeName from "./AttributeName.jsx";
import AttributeValue from "./AttributeValue.jsx";
import {useEffect, useState} from "react";

export default function CardData() {
    const [cardNumber, setCardNumber] = useState('-')
    const [CVV, setCVV] = useState('-')
    const [date, setDate] = useState('-')
    const [className, setClassName] = useState('')
    const [classNameToEdit, setClassNameToEdit] = useState('active')

    useEffect(() => {
        fetch('http://localhost:8080/paymentSystem/getInformation', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('JWT')}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not auth')
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                if (data.paymentSystem === 'данных нет, Надо их ввести') {
                    setClassNameToEdit('active')
                }
                else {
                    setClassName('active')
                    setCardNumber(data.cardNumber)
                    setCVV(data.cvv)
                    setDate(data.date)
                }
            })
    }, []);

    function openCardForm() {
        document.getElementById('modal-card-buying').classList.add('active')
        document.querySelector('body').classList.add('modal-open')
    }

    return (
        <div id='card'>
            <div id='card-data'>
                <div id='attribute-names-card'>
                    <AttributeName text='Card number:' className='attribute-name-card'/>
                    <AttributeName text='CVV:' className='attribute-name-card'/>
                    <AttributeName text='Date:' className='attribute-name-card'/>
                </div>
                <div id='attribute-values-card'>
                    <AttributeValue value={cardNumber} className='attribute-value-card'/>
                    <AttributeValue value={CVV} className='attribute-value-card'/>
                    <AttributeValue value={date} className='attribute-value-card'/>
                </div>
            </div>
            <div id='if-not-card' className={className}>
                <span>
                    Card not added. To add a card click button.
                </span>
                <button onClick={openCardForm}>
                    Add card
                </button>
            </div>
            <div id='edit-card' className={classNameToEdit}>
                <span>
                    To edit card data click button.
                </span>
                <button onClick={openCardForm}>
                    Edit card data
                </button>
            </div>
        </div>
    )
}