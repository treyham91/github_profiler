import React, {useState, useEffect} from "react";
import NavigatorTab from "./NavigatorTab";
import UserUtilities from "../utils/user";

const Navigator = ({children, showRepos, showActivity}) => {
    const [navigatorTabs, setNavigatorTabs] = useState([]);
    const [repoData, setRepoData] = useState("");
    const [activityData, setActivityData] = useState("");

    const userUtil = new UserUtilities();

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            const username = userUtil.setUserAccountField(localStorage.getItem("user-account-data"), "login");
            userUtil.getUserRepos(username)
                .then(data => {
                    setRepoData(JSON.stringify(data));
                    localStorage.setItem("user-repos", JSON.stringify(data));
                })
                .catch(error => {
                    setRepoData(JSON.stringify(error));
                });
        } else {
            setRepoData("");
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            const username = userUtil.setUserAccountField(localStorage.getItem("user-account-data"), "login");
            userUtil.getUserActivity(username)
                .then(data => {
                    setActivityData(JSON.stringify(data));
                    localStorage.setItem("user-activity", JSON.stringify(data));
                })
                .catch(error => {
                    setActivityData(JSON.stringify(error));
                });
        } else {
            setActivityData("");
        }
    }, [])

    useEffect(() => {
        let repoCount = 0;
        if (localStorage.getItem("user-account-data")) {
            repoCount = userUtil.setUserAccountField(localStorage.getItem("user-account-data"), "public_repos");
        }
        if (repoCount > 0) {
            setNavigatorTabs(tabs => tabs.concat(
                {id: 1, iconType: 'code-slash-outline', value: 'Repos', loadFunction: showRepos},
                {id: 2, iconType: 'git-branch-outline', value: 'Recent Activity', loadFunction: showActivity},
                ))
        } else {
            setNavigatorTabs(tabs => tabs.concat(
                {id: 1, iconType: 'git-branch-outline', value: 'Recent Activity', loadFunction: showActivity}
            ))
        }
    }, [])

    return (
        <div id="navigator">
            <nav>
                {navigatorTabs.map(tab => {
                    return <NavigatorTab key={tab.id} value={tab.value} iconType={tab.iconType} showData={tab.loadFunction} />
                })}
            </nav>
            {children}
        </div>
    )
}

export default Navigator;