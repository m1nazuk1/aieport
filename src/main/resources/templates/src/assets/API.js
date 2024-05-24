import MainPageContentStyles from "../components/MainPageContent/MainPageContent.module.css";
import ModalWindowLogInStyles from "../components/ModalWindowLogIn/ModalWindowLogIn.module.css";

export default class API{
    static registrate(data) {
        fetch('http://localhost:8080/api/auth/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log(data.message);
            }
            else {
                localStorage.setItem('JWT', data['jwt-token'])
                document.getElementById('registration-surname').value = ''
                document.getElementById('registration-name').value = ''
                document.getElementById('registration-patronimyc').value = ''
                document.getElementById('registration-phone').value = ''
                document.getElementById('registration-email').value = ''
                document.getElementById('registration-password').value = ''
                document.getElementById('registration-repeat-password').value = ''
                document.querySelector('body').classList.remove('modal_open')
                document.getElementById('modal-reg').classList.add(MainPageContentStyles.modal_reg_close)
            }
        })
        .catch(error => console.error('Ошибка:', error));
    }

    static logIn(data){
        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                document.getElementById("not_find_user").classList.remove(ModalWindowLogInStyles.not_find_user)
                document.getElementById("not_find_user").classList.add(ModalWindowLogInStyles.not_find_user_active)
            }
            else {
                localStorage.setItem('JWT', data['jwt-token'])
                document.getElementById('not_find_user').classList.remove('active')
                document.getElementById('log-in-email').value = ''
                document.getElementById('log-in-password').value = ''
                document.querySelector('body').classList.remove('modal_open')
                document.getElementById('modal-log-in').classList.add(MainPageContentStyles.modal_log_in_close)
                location.href += 'logined'
            }
        })
    }

    static sendPhoto(e){
        e.preventDefault()
        const image = document.getElementById('download-profile-photo').files[0]
        console.log(typeof image)
        const formData = new FormData();
        formData.append('image', image);
        const token = localStorage.getItem('JWT');
        fetch(`http://localhost:8080/api/auth/forImage`, {
            method: 'POST',
            body: formData,
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при обновлении данных пользователя');
            }
            return response.json();
        })
        .then(data => {
            if (data.message) {
                alert(data.message);
            }
        })
        .catch(error => console.error('Ошибка:', error));
        location.reload()
    }

    static setImage(){
        const imageUrl = `http://localhost:8080/image/${localStorage.getItem('email')}`;
        fetch(imageUrl)
        .then(response => response.blob())
        .then(imageBlob => {
            const imageObjectURL = URL.createObjectURL(imageBlob);
            if (imageObjectURL != '') {
                document.getElementById('profile-photo').src = imageObjectURL;
            }
        })
        .catch(error => console.error('Ошибка загрузки изображения:', error));
    }

    static getUserInfo(){
        const user = {}
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
            localStorage.setItem('surname', data.surname)
            localStorage.setItem('name', data.name)
            localStorage.setItem('patronymic', data.patronimyc)
            localStorage.setItem('email', data.email)
            localStorage.setItem('phone', data.phone)
            localStorage.setItem('birthday', data.birthday)
        })
    }

    static getUserCardInfo(){
        localStorage.setItem('cardExist', false)
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
            if (data.paymentSystem === 'данных нет, Надо их ввести') {
                console.log("илья лох")
                localStorage.setItem('cardNumber', '-')
                localStorage.setItem('cvv', '-')
                localStorage.setItem('cardDate', '-')
                localStorage.setItem('cardExist', false)
            }
            else {
                localStorage.setItem('cardNumber', data.cardNumber)
                localStorage.setItem('cvv', data.cvv)
                localStorage.setItem('cardDate', data.date)
                localStorage.setItem('cardExist', true)
            }
        })
    }

    static addCard(cardData){
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
            location.reload()
        })
    }

    static pushTicket(ticket){
        fetch(`http://localhost:8080/ticket/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('JWT')}`
            },
            body: JSON.stringify(ticket)
        })
    }

    static getUserTickets(){
        fetch('http://localhost:8080/ticket/ticketInformation', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('JWT')}`
            }
        })
            .then(response => {
                console.log(response)
                if (!response){
                    console.log('Error')
                }
                return response.json()
            })
            .then(data => {

                localStorage.setItem('myTickets', JSON.stringify(data.tickets))
            })
    }
}