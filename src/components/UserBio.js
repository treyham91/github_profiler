import React from "react";

const UserBio = ({image, name, username, location, profileURL}) => {
    return (
        <div id="user-bio">
            <img src={image} alt="No avatar" />
            <p>{name}</p>
            <div style={{display: 'flex'}}>
                <ion-icon name="location"></ion-icon>
                <p style={{margin: '0px 0px 0px 5px'}}>{location}</p>
            </div>
            <a href={profileURL}>{username}</a>
        </div>
    )
}

export default UserBio;