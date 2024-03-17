import Input from './Input.jsx';
import CardInput from './CardInput.jsx'

export default function Card() {
    return (
        <div id="cards">
            <div id='front-card'>
                <input type="text" id='card-number'/>
                <input type="date" id='deadline-card'/>
            </div>
            <div id='back-card'>
                <div id="black-line">

                </div>
                <input type="text" id='CVV-input'/>
            </div>
        </div>
    )
}