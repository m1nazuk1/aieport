import Toggle from './Toggle.jsx'
import Input from './Input.jsx'
import Passangers from './Passangers.jsx'

export default function BuyingForm() {
    function flightActive() {
        document.getElementById('flight-cap').classList.add('active')
        document.getElementById('hotel-cap').classList.remove('active')
        document.getElementById('flight-form').classList.add('active')
        document.getElementById('hotel-form').classList.remove('active')
    }

    function hotelActive() {
        document.getElementById('flight-cap').classList.remove('active')
        document.getElementById('hotel-cap').classList.add('active')
        document.getElementById('flight-form').classList.remove('active')
        document.getElementById('hotel-form').classList.add('active')
    }


    function submitFlight() {
        const fromPlace = document.getElementById('input-from').value;
        const toPlace = document.getElementById('input-to').value;

        fetch(`http://localhost:8080/ticket/payment?fromPlace=${fromPlace}&toPlace=${toPlace}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('JWT')}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw new Error('Flights not found')
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                if (data.HasFlights === 'true') {
                    const cardData = {
                        cardNumber: '1234567890',
                        cardDate: '07.26',
                        cvv: '123'
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

                    const dateBack = document.querySelector('.switch-input').checked ? document.getElementById('date-returning').value : null

                    const flight = {
                        whereFrom: document.getElementById('input-from').value,
                        whereTo: document.getElementById('input-to').value,
                        flightDateForth: document.getElementById('date-one-way').value,
                        flightDateBack: dateBack,
                        adults: parseInt(document.getElementById('adults').textContent),
                        children: parseInt(document.getElementById('children').textContent),
                    }

                    fetch('http://localhost:8080/ticket/save', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('JWT')}`
                        },
                        body: JSON.stringify(flight)
                    })
                        .then(response => {
                            if (!response) {
                                throw new Error('User not auth')
                            }
                            return response.json()
                        })
                }
            })

    }

    return (
        <div id="buying">
            <div id="flight-hotel-cap">
                <div id="flight-cap" className='active' onClick={flightActive}>
                    Flights
                </div>
                <div id="hotel-cap" onClick={hotelActive}>
                    Hotels
                </div>
            </div>
            <div id='flight-hotel-form'>
                <div id='flight-form' className='active'>
                    <Toggle />
                    <div>
                        <Input text='From' id='input-from' type='text' placeholder='London' />
                        <Input text='To' id='input-to' type='text' placeholder='Moscow' />
                    </div>
                    <div>
                        <Input text='Forward' id='date-one-way' type='date' placeholder='' />
                        <div id='back'>
                            <Input text='Back' id='date-returning' type='date' placeholder='' />
                        </div>
                    </div>
                    <div>
                        <Passangers id='adults' text='Adult (+16)' />
                        <Passangers id='children' text='Children (2-15)' />
                    </div>
                    <input type="submit" id='submit-flight-form' value='GO FLIGHT!' onClick={submitFlight} />
                </div>
                <div id="hotel-form">

                </div>
            </div>
        </div>
    )
}