import React, {useState} from "react";
import Navigator from "./Navigator";
import ActivityItem from "./repos/ActivityItem";
import RepoItem from "./repos/RepoItem";

const UserBio = ({image, name, username, location, profileURL}) => {
    const [navigatorDisplay, setNavigatorDisplay] = useState(null);

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
                    iconType: setActivityIcon(activity.type),
                    activityMessage: activity.type
                })
            })
        } else {
            return [{id: 0, iconType: "", activityMessage: ""}]
        }

        return userActivityData.map(activity => {
            return <ActivityItem key={activity.id} iconType={activity.iconType} activityMessage={activity.activityMessage} />
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
                    repoImage: setRepoIcon(repo.language),
                    repoName: repo.name,
                    createDate: repo.created_at,
                    modifyDate: repo.updated_at,
                    language: repo.language
                })
            })
        } else {
            return [{
                id: 0,
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
            <div style={{display: 'flex'}}>
                <img src={image} alt="No avatar" />
                <div style={{display: 'block'}}>
                    <div style={{display: 'block', textAlign: 'left', margin: '30px 0px 0px 0px'}}>
                        <p style={{margin: '0px 0px 5px 0px', fontSize: '20px'}}>{name}</p>
                        <div style={{display: 'flex'}}>
                            <ion-icon name="location"></ion-icon>
                            <p style={{margin: '0px 0px 0px 5px', fontSize: '13px'}}>{location}</p>
                        </div>
                        <a href={profileURL}>{username}</a>
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
            </div>
        </div>
    )
}

export default UserBio;