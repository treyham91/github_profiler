import React, {useState} from "react";
import TestContainer from "../TestContainer";

const UserForm = () => {
    const [username, setUsername] = useState("");
    const [returnData, setReturnData] = useState("");

    const getUserProfile = async () => {
        let data = await fetch(`https://api.github.com/users/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return data.json();
    }

    const handleFormSubmit = () => {
        getUserProfile()
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
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="submit" value="Get account data" />
            </form>
            <TestContainer data={returnData ? returnData : null} />
        </div>
    )
}

export default UserForm;