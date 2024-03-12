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
        const from = document.getElementById('input-from').value
        const to = document.getElementById('input-to').value
        const forwardDate = document.getElementById('date-one-way').value
        console.log(forwardDate)
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