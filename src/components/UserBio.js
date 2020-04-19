import React from "react";

const UserBio = ({image, name, username, location, profileURL}) => {
    return (
        <div id="user-bio">
            <div style={{display: 'flex'}}>
                <img src={image} alt="No avatar" />
                <div style={{display: 'block', textAlign: 'left', margin: '30px 0px 0px 0px'}}>
                    <p style={{margin: '0px 0px 5px 0px', fontSize: '20px'}}>{name}</p>
                    <div style={{display: 'flex'}}>
                        <ion-icon name="location"></ion-icon>
                        <p style={{margin: '0px 0px 0px 5px', fontSize: '13px'}}>{location}</p>
                    </div>
                    <a href={profileURL}>{username}</a>
                </div>
            </div>
        </div>
    )
}

export default UserBio;