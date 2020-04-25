import React, {useEffect, useState} from "react";
import Navigator from "./Navigator";
import ActivityItem from "./repos/ActivityItem";
import RepoItem from "./repos/RepoItem";
import UserUtilities from "../utils/user";


const UserBio = ({image, name, username, location, profileURL}) => {
    const [navigatorDisplay, setNavigatorDisplay] = useState(null);
    const [userData, setUserData] = useState("");
    const userUtil = new UserUtilities();

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            setUserData(localStorage.getItem("user-account-data"))
        }
    }, [localStorage.getItem("user-account-data")])

    const setActivityIcon = (activityType) => {
        let iconType;
        switch (activityType) {
            case "DeleteEvent":
                iconType = "close-outline";
                break;
            case "CreateEvent":
                iconType = "add-outline";
                break;
            case "PullRequestEvent":
                iconType = "enter-outline";
                break;
            default:
                iconType = "alert-outline";
        }

        return iconType;
    }

    const setRepoIcon = (activityType) => {
        let iconType;
        switch (activityType) {
            case "JavaScript":
                iconType = "logo-javascript";
                break;
            case "Python":
                iconType = "logo-python";
                break;
            case "HTML":
                iconType = "logo-html5";
                break;
            default:
                iconType = "logo-ionic";
        }

        return iconType;
    }

    const showActivityData = () => {
        let userActivityData = [];
        if (localStorage.getItem("user-activity")) {
            const userActivity = localStorage.getItem("user-activity");
            let data = JSON.parse(userActivity);
            data.map((activity, index) => {
                userActivityData.push({
                    id: index,
                    repoName: activity.repo.name,
                    activityDate: activity.created_at,
                    iconType: setActivityIcon(activity.type),
                    activityMessage: activity.type
                })
            })
        } else {
            return [{id: 0, repoName: "", activityDate: "", iconType: "", activityMessage: ""}]
        }

        return userActivityData.map(activity => {
            return (
                <ActivityItem
                    key={activity.id}
                    repoName={activity.repoName}
                    activityDate={activity.activityDate}
                    iconType={activity.iconType}
                    activityMessage={activity.activityMessage} />
            )
        });
    }

    const showRepoData = () => {
        let userRepoData = [];
        if (localStorage.getItem("user-repos")) {
            const userActivity = localStorage.getItem("user-repos");
            let data = JSON.parse(userActivity);
            data.map((repo, index) => {
                userRepoData.push({
                    id: index,
                    repoURL: repo.html_url,
                    repoImage: setRepoIcon(repo.language),
                    repoName: repo.name,
                    createDate: new Date(repo.created_at).toDateString(),
                    modifyDate: new Date(repo.updated_at).toDateString(),
                    language: repo.language
                })
            })
        } else {
            return [{
                id: 0,
                repoURL: "",
                repoImage: "",
                repoName: "",
                createDate: "",
                modifyDate: "",
                language: ""
            }]
        }

        return userRepoData.map(repo => {
            return (
                <RepoItem
                    key={repo.id}
                    repoURL={repo.repoURL}
                    createDate={repo.createDate}
                    language={repo.language}
                    modifyDate={repo.modifyDate}
                    repoImage={repo.repoImage}
                    repoName={repo.repoName} />
            )
        });
    }

    return (
        <div id="user-bio">
            <div id="user-bio-container">
                <img src={image} alt="No avatar" />
                <div style={{display: 'block'}}>
                    <div style={{display: 'block', margin: '30px 0px 0px 0px'}}>
                        <p style={{margin: '0px 0px 5px 0px', fontSize: '20px'}}>{name}</p>
                        <div style={{display: 'flex'}}>
                            <ion-icon name="location"></ion-icon>
                            <p style={{margin: '0px 0px 0px 5px', fontSize: '13px'}}>{location}</p>
                        </div>
                        <a href={profileURL}>{username}</a>
                        <div id="other-info">
                            <p><span>Bio:</span> {userData ? userUtil.setUserAccountField(userData,"bio") : "N/A"}</p>
                            <p><span>Company:</span> {userData ? userUtil.setUserAccountField(userData,"company") : "N/A"}</p>
                            <p><span>Email:</span> {userData ? userUtil.setUserAccountField(userData,"email") : "N/A"}</p>
                            <p><span>Hireable:</span> {userData ? userUtil.setUserAccountField(userData,"hireable") : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navigator
                showActivity={() => setNavigatorDisplay("activity")}
                showRepos={() => setNavigatorDisplay("repos")}>
                {navigatorDisplay === "activity"
                    ? showActivityData()
                    : navigatorDisplay === "repos"
                        ? showRepoData()
                        : null}
            </Navigator>
        </div>
    )
}

export default UserBio;