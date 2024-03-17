import AttributeName from "./AttributeName.jsx";
import AttributeValue from "./AttributeValue.jsx";
import {useEffect, useState} from "react";

export default function CardData() {
    const [cardNumber, setCardNumber] = useState('-')
    const [CVV, setCVV] = useState('-')
    const [date, setDate] = useState('-')

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
            })
    }, []);

    return (
        <div id='card-data'>
            <div id='attribute-names-card'>
                <AttributeName text='Card number:' className='attribute-name-card' />
                <AttributeName text='CVV:' className='attribute-name-card' />
                <AttributeName text='Date:' className='attribute-name-card' />
            </div>
            <div id='attribute-values-card'>
                <AttributeValue value={cardNumber} className='attribute-value-card' />
                <AttributeValue value={CVV} className='attribute-value-card' />
                <AttributeValue value={date} className='attribute-value-card' />
            </div>
        </div>
    )
}