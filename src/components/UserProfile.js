import React, {useEffect, useState} from "react";
import UserBio from "./UserBio";

const UserProfile = () => {
    const [userData, setUserData] = useState(localStorage.getItem("user-account-data"));

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            setUserData(localStorage.getItem("user-account-data"))
        }
    }, [localStorage.getItem("user-account-data")])

    const getUserAccountField = (data, fieldName) => {
        const dataObj = JSON.parse(data);

        return dataObj[fieldName];
    }

    const setUserAccountField = (fieldName) => {
        return getUserAccountField(
            userData,
            fieldName
        );
    }

    return (
        <div id="user-profile">
            <UserBio
                username={userData ? setUserAccountField("login") : ""}
                image={userData ? setUserAccountField("avatar_url") : ""}
                name={userData ? setUserAccountField("name") : ""}
                location={userData ? setUserAccountField("location") : ""}
                profileURL={userData ? setUserAccountField("html_url") : ""}
                />
        </div>
    )
}

export default UserProfile ;