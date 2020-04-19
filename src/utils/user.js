class UserUtilities {
    getUserProfile = async (username) => {
        let data = await fetch(`https://api.github.com/users/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return data.json();
    }

    getUserRepos = async (username) => {
        let data = await fetch(`https://api.github.com/users/${username}/repos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return data.json();
    }

    getUserActivity = async (username) => {
        let data = await fetch(`https://api.github.com/users/${username}/received_events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return data.json();
    }

    getUserAccountField = (data, fieldName) => {
        const dataObj = JSON.parse(data);

        return dataObj[fieldName];
    }

    setUserAccountField = (userData, fieldName) => {
        return this.getUserAccountField(
            userData,
            fieldName
        );
    }
}

export default UserUtilities