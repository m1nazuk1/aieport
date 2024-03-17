import ProfilePhoto from "./ProfilePhoto.jsx";
import UserData from "./UserData.jsx";
import CardData from "./CardData.jsx";

export default function UserInfo() {
    return (
        <div>
            <div id='profile-header'>
                PROFILE
            </div>
            <div id='user-info'>
                <ProfilePhoto />
                <UserData />
                <CardData />
            </div>
        </div>
    )
}