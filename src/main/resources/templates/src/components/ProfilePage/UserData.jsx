import {useEffect, useState} from "react";
import AttributeName from "./AttributeName.jsx";
import AttributeValue from "./AttributeValue.jsx";

export default function UserData() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronimyc, setPatronimyc] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/user/personalInformation', {
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
                setSurname(data.surname)
                setName(data.name)
                setPatronimyc(data.patronimyc)
                setEmail(data.email)
                localStorage.setItem('email', data.email)
                setPhone(data.phone)
                setBirthday(data.birthday)
            })
    }, []);

    return (
        <div id='user-data'>
            <div id='attribute-names'>
                <AttributeName text='Surname:' />
                <AttributeName text='Name:' />
                <AttributeName text='Patronimyc:' />
                <AttributeName text='Email:' />
                <AttributeName text='Phone:' />
                <AttributeName text='Birthday:' />
            </div>
            <div id='attribute-values'>
                <AttributeValue value={surname} />
                <AttributeValue value={name} />
                <AttributeValue value={patronimyc} />
                <AttributeValue value={email} />
                <AttributeValue value={phone} />
                <AttributeValue value={birthday} />
            </div>
        </div>
    )
}