import {useEffect, useState} from "react";

export default function TicketsInfo() {
    const [buyingTickets, setBuyingTickets] = useState([])

    useEffect(() => {
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
                console.log(data.tickets)
                setBuyingTickets(data.tickets)
            })
    }, []);

    return (
        <div>
            {buyingTickets.map((ticket, index) => (
                <div>

                </div>
            ))}
        </div>
    )
}