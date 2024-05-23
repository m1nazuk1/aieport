import { useEffect } from "react";
import API from "../../assets/API";
import profilePhoto from "../../assets/images/standart_profile_photo.jpg";
import s from "./ProfilePhoto.module.css";

export default function ProfilePhoto(){

    useEffect(() => {
        API.setImage()
    }, [])

    function clickSubmit(){
        document.getElementById('submit-photo-button').click()
    }

    return (
        <div>
            <form id='profile-photo-editing' encType='multipart/form-data' className={s.form__container} onSubmit={e => API.sendPhoto(e)}>
                <img src='' alt="profile photo" className={s.profile_photo} id='profile-photo' />
                <label htmlFor="download-profile-photo">
                    Edit profile photo
                </label>
                <input type="file" id='download-profile-photo' name='profile-photo' required onChange={clickSubmit} />
                <input type="submit" className={s.submit_photo_button} id='submit-photo-button' />
            </form>
        </div>
    )
}