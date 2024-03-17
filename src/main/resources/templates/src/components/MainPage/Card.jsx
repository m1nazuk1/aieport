import cancel from '../../images/white_cancel.jpg'
import {useState} from "react";

export default function Card() {
    const dateNow = new Date()
    const day = parseInt(dateNow.toISOString().slice(8, 10)) + 1
    const month = dateNow.toISOString().slice(5, 7)
    const year = dateNow.toISOString().slice(0, 4)

    const [CVV, setCVV] = useState('')

    function CVVChanged() {
        const textCVV = document.getElementById('CVV-input').value
        if (textCVV.length > 3) {
            setCVV(prev => textCVV.slice(0, 3))
        }
        else {
            setCVV(textCVV)
        }
    }

    function submitCard() {
        const cardData = {
            cardNumber: document.getElementById('card-number').value,
            cardDate: document.getElementById('month-input').value + '.' + '20' + document.getElementById('year-input').value,
            cvv: document.getElementById('CVV-input').value
        }

        fetch('http://localhost:8080/paymentSystem/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('JWT')}`
            },
            body: JSON.stringify(cardData)
        })
            .then(response => {
                if (!response) {
                    throw new Error('User not auth')
                }
                return response.json()
            })
        closeModalWindow()
        location.reload()
    }

    function closeModalWindow() {
        document.getElementById('modal-card-buying').classList.remove('active')
        document.querySelector('body').classList.remove('modal-open')
    }

    return (
        <div id="cards">
            <img src={cancel} alt="close" onClick={closeModalWindow}/>
            <div id='front-card'>
                <input type="text" id='card-number' placeholder='Card number'/>
                <div>
                    <input type="text" placeholder='MM' id='month-input'/>
                    <span>  /  </span>
                    <input type="text" placeholder='YY' id='year-input'/>
                </div>
            </div>
            <div id='back-card'>
                <div id="black-line">

                </div>
                <input type="text" id='CVV-input' placeholder='CVV' onChange={CVVChanged} value={CVV}/>
                <button onClick={submitCard}>
                    Add card
                </button>
            </div>
        </div>
    )
}