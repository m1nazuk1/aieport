import profilePhoto from '../../images/profile_photo.jpg'

export default  function ProfilePhoto() {
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
    }

    return (
        <div>
            <form id='profile-photo-editing' encType='multipart/form-data' onSubmit={e => submitPhotoForm(e)}>
                <img src={profilePhoto} alt="profile photo"/>
                <label htmlFor="download-profile-photo">
                    Edit profile photo
                </label>
                <input type="file" id='download-profile-photo' name='profile-photo' required/>
                <input type="submit"/>
            </form>
        </div>
    )
}