import React, {useEffect, useState} from "react";
import UserBio from "./UserBio";
import UserUtilities from "../utils/user";

const UserProfile = () => {
    const [userData, setUserData] = useState("");
    const userUtil = new UserUtilities();

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            setUserData(localStorage.getItem("user-account-data"))
        }
    }, [localStorage.getItem("user-account-data")])


    return (
        <div id="user-profile">
            <UserBio
                username={userData ? userUtil.setUserAccountField(userData,"login") : ""}
                image={userData ? userUtil.setUserAccountField(userData,"avatar_url") : ""}
                name={userData ? userUtil.setUserAccountField(userData,"name") : ""}
                location={userData ? userUtil.setUserAccountField(userData,"location") : ""}
                profileURL={userData ? userUtil.setUserAccountField(userData,"html_url") : ""}
                />
        </div>
    )
}

export default UserProfile ;