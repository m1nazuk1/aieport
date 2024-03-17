import profilePhoto from '../../images/profile_photo.jpg'

export default  function ProfilePhoto() {
    return (
        <div>
            <img src={profilePhoto} alt="profile photo"/>
            <label htmlFor="download-profile-photo">
                Edit profile photo.
            </label>
            <input type="file" id='download-profile-photo'/>
        </div>
    )
}