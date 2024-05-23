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
                errorMessage.textContent = data.message;
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
                document.getElementById('not-find-user').classList.remove('active')
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
            user.surname = data.surname
            user.name = data.name
            user.patronimyc = data.patronimyc
            user.email = data.email
            localStorage.setItem('email', data.email)
            user.phone = data.phone
            user.birthday = data.birthday
        })
        return user
    }

    static getUserCardInfo(){
        const card = {
            exist: false
        }
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
                
            }
            else {
                card.cardNumber = data.cardNumber
                card.cvv = data.cvv
                card.date = data.date
                card.exist = true
            }
        })
        return card
    }
}