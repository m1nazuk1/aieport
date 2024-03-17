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
                <AttributeName text='Surname:' className='attribute-name' />
                <AttributeName text='Name:' className='attribute-name' />
                <AttributeName text='Patronimyc:' className='attribute-name' />
                <AttributeName text='Email:' className='attribute-name' />
                <AttributeName text='Phone:' className='attribute-name' />
                <AttributeName text='Birthday:' className='attribute-name' />
            </div>
            <div id='attribute-values'>
                <AttributeValue value={surname} className='attribute-value' />
                <AttributeValue value={name} className='attribute-value' />
                <AttributeValue value={patronimyc} className='attribute-value' />
                <AttributeValue value={email} className='attribute-value' />
                <AttributeValue value={phone} className='attribute-value' />
                <AttributeValue value={birthday} className='attribute-value' />
            </div>
        </div>
    )
}