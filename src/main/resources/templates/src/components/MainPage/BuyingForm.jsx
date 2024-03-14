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
        const flightCheck = {
            fromPlace: document.getElementById('input-from'),
            toPlace: document.getElementById('input-to')
        }
        fetch(`${flightCheck}`, {
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
                const flight = {
                    fromPlace: document.getElementById('input-from'),
                    toPlace: document.getElementById('input-to'),
                    forwardDate: document.getElementById('date-one-way'),
                    backDate: document.getElementById('date-returning'),
                    adultsAmount: document.getElementById('adults'),
                    childrenAmount: document.getElementById('children'),
                    withReturning: document.querySelector('.switch-input').checked
                }

                fetch('', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(flight)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error flight')
                        }
                        return response.json
                    })
                    .then(success => {

                    })
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