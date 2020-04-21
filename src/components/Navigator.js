import React, {useState, useEffect} from "react";
import NavigatorTab from "./NavigatorTab";
import UserUtilities from "../utils/user";

const Navigator = ({children}) => {
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
                {id: 1, iconType: 'code-slash-outline', value: 'Repos', loadFunction: () => null},
                {id: 2, iconType: 'git-branch-outline', value: 'Recent Activity', loadFunction: () => null},
                ))
        } else {
            setNavigatorTabs(tabs => tabs.concat(
                {id: 1, iconType: 'git-branch-outline', value: 'Recent Activity', loadFunction: () => null}
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