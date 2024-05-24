import cancel from '../../assets/images/cancel.png';
import {useState} from "react";
import API from "../../assets/API.js";

export default function CardForm() {
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



    function addingCard() {
        const cardData = {
            cardNumber: document.getElementById('card-number').value,
            cardDate: document.getElementById('month-input').value + '.' + '20' + document.getElementById('year-input').value,
            cvv: document.getElementById('CVV-input').value
        }
        console.log(cardData)
        API.addCard(cardData)
        document.getElementById('modal-card-buying').classList.remove('active')
        document.querySelector('body').classList.remove('modal_open')
    }

    function closeModalWindow() {
        document.getElementById('modal-card-buying').classList.remove('active')
        document.querySelector('body').classList.remove('modal_open')
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
                <button onClick={addingCard}>
                    Add card
                </button>
            </div>
        </div>
    )
}