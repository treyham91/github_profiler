import React, {useState} from "react";
import TestContainer from "../TestContainer";
import UserUtilities from "../utils/user";

const UserForm = () => {
    const [username, setUsername] = useState("");
    const [returnData, setReturnData] = useState("");

    const userUtil = new UserUtilities();

    const handleFormSubmit = () => {
        userUtil.getUserProfile(username)
            .then(data => {
                console.log(data);
                localStorage.setItem("user-account-data", JSON.stringify(data));
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div id="user-form">
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="GitHub username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="submit" value="Get account data" />
            </form>
            <TestContainer data={returnData ? returnData : null} />
        </div>
    )
}

export default UserForm;