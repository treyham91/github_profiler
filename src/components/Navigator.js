import React, {useState, useEffect} from "react";
import NavigatorTab from "./NavigatorTab";
import UserUtilities from "../utils/user";

const Navigator = ({children}) => {
    const [userData, setUserData] = useState("");
    const [publicRepoCount, setPublicRepoCount] = useState(0);
    const [repoURL, setRepoURL] = useState("");
    const [recentActivityURL, setRecentActivityURL] = useState("");
    const [navigatorTabs, setNavigatorTabs] = useState([]);

    const userUtil = new UserUtilities();

    useEffect(() => {
        if (localStorage.getItem("user-account-data")) {
            setUserData(localStorage.getItem("user-account-data"))
        }
    }, [localStorage.getItem("user-account-data")])

    useEffect(() => {
        if (userData) {
            setPublicRepoCount(Number.parseInt(userUtil.setUserAccountField(userData, "public_repos")))
            setRepoURL(userUtil.setUserAccountField(userData, "repos_url"))
            setRecentActivityURL(userUtil.setUserAccountField(userData, "received_events_url"))
        }
    }, [])

    useEffect(() => {
        if (publicRepoCount && publicRepoCount > 0) {
            setNavigatorTabs(tabs => tabs.concat({id: 1, iconType: 'code-slash-outline', value: 'Repos'}))
        }
    })

    return (
        <div id="navigator">
            <nav>

            </nav>
        </div>
    )
}

export default Navigator;