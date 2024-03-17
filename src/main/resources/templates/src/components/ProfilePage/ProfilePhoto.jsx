import {useEffect, useState} from "react";
import photo from '../../images/profile_photo.jpg'

export default  function ProfilePhoto() {
    const [profilePhoto, setProfilePhoto] = useState(photo)

    useEffect(() => {
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
    }, []);
    function submitPhotoForm(e){
        e.preventDefault()
        const image = document.getElementById('download-profile-photo').files[0]
        console.log(typeof image)
        const formData = new FormData();
        formData.append('image', image);
        const token = localStorage.getItem('JWT');
        console.log('dsadsadsad')
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

    return (
        <div>
            <form id='profile-photo-editing' encType='multipart/form-data' onSubmit={e => submitPhotoForm(e)}>
                <img src='' alt="profile photo" id='profile-photo'/>
                <label htmlFor="download-profile-photo">
                    Edit profile photo
                </label>
                <input type="file" id='download-profile-photo' name='profile-photo' required/>
                <input type="submit"/>
            </form>
        </div>
    )
}