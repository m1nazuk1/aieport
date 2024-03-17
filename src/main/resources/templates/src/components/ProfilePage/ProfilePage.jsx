import './ProfilePhotoStyles.css'
import UserInfo from "./UserInfo.jsx";
import TicketsInfo from "./TicketsInfo.jsx";
import BlackLine from "./BlackLine.jsx";

export default function ProfilePage() {
    function loadTickets() {
        fetch('http://localhost:8080/user/ticketInformation', {
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
    }

    function loadCard() {
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
    }

    return (
        <div>
            <div id='profile-background'>
                <div id='user-and-tickets-info'>
                    <UserInfo/>
                    <BlackLine/>
                    <TicketsInfo/>
                </div>
            </div>
            <button onClick={loadTickets}>Tickets</button>
            <button onClick={loadCard}>Card</button>
        </div>
    )
}